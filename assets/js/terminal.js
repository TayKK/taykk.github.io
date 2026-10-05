/**
 * Interactive SecOps CLI Terminal Emulator: keng-cli v2.4
 * Reads dynamically from window.PORTFOLIO_DATA
 */

(function () {
  function getCommands() {
    const data = window.PORTFOLIO_DATA || {};
    const p = data.profile || {};
    const certs = data.certifications || [];
    const domains = data.domains || [];
    const journey = data.journey || [];
    const research = data.research || {};

    return {
      help: `Available SecOps commands:
  help          - Display this command manual
  about         - Overview of Kai Keng TAY
  journey       - Trace evolution from Blue Teamer to Holistic Practitioner
  research      - Details on published paper (BinImg2Vec / ICAIC 2022)
  certs         - List verified industry certifications & credentials (${certs.length} active)
  skills        - Query technical & domain competencies
  ai-sec        - AI Security, Threat Modeling & ISO 42001 perspective
  contact       - Get direct LinkedIn & GitHub connectivity
  hire          - Check role alignment & hiring readiness
  whoami        - Print session telemetry
  clear         - Clear terminal display buffer`,

      about: `[PROFILE DOSSIER: ${p.name || 'KAI KENG TAY'}]
--------------------------------------------------------------------------------
Role Focus:     ${p.headline || 'Holistic Cybersecurity Practitioner & AI Security Researcher'}
Philosophy:     "${p.tagline || 'Never stop learning. Knowledge is power.'}"
Status:         ${p.status || 'AVAILABLE FOR ROLES'} (${p.statusDetail || 'Open to opportunities'})
Location:       ${p.location || 'Singapore'}
Bio:            ${p.bio || ''}`,

      journey: `[EVOLUTION: FROM BLUE TEAM TO HOLISTIC DEFENSE]
--------------------------------------------------------------------------------
` + journey.map(j => `${j.phase}: ${j.title} [${j.badge}]
  ${j.summary}
  Tags: ${j.tags.join(', ')}`).join('\n\n'),

      research: `[RESEARCH SPOTLIGHT: ${research.title || 'BinImg2Vec'}]
--------------------------------------------------------------------------------
Title:       ${research.title || 'BinImg2Vec'}
Venue:       ${research.venue || ''}
Authors:     ${research.authors || ''}
DOI / arXiv: ${research.arxivUrl || ''}
Abstract:    ${research.abstract || ''}`,

      certs: `[VERIFIED INDUSTRY CREDENTIALS (${certs.length} TOTAL)]
--------------------------------------------------------------------------------
` + formatCertsList(certs),

      skills: `[COMPETENCY INVENTORY]
--------------------------------------------------------------------------------
` + domains.map((d, idx) => `${idx + 1}. ${d.title} [${d.category.toUpperCase()}]:
   ${d.skills.map(s => '• ' + s).join('\n   ')}`).join('\n\n'),

      "ai-sec": `[AI SECURITY & GOVERNANCE DOCTRINE]
--------------------------------------------------------------------------------
As AI systems become core enterprise infrastructure, cybersecurity must defend both:
  1. Traditional assets augmented by AI (e.g. BinImg2Vec for malware classification).
  2. The AI supply chain itself (prompt injection, model poisoning, training data
     exfiltration, adversarial robustness, and ISO/IEC 42001 governance).
Kai Keng bridges algorithmic understanding with practical defensive engineering.`,

      contact: `[CONNECTIVITY PROTOCOLS]
--------------------------------------------------------------------------------
LinkedIn:  ${p.linkedinUrl || 'https://sg.linkedin.com/in/tay-kai-keng'}
GitHub:    ${p.githubUrl || 'https://github.com/TayKK'}
Location:  ${p.location || 'Singapore'}
Recruiters: Connect directly via LinkedIn for dialogue and scheduling.`,

      hire: `[TALENT RECRUITER QUERY RESULT]
--------------------------------------------------------------------------------
Status:              ${p.status || 'Available for select opportunities'}
Target Roles:        - Holistic Cybersecurity Practitioner / Security Engineer
                     - AI Security Specialist / AI Governance Analyst
                     - Cloud Security Engineer / DevSecOps Engineer
                     - Detection & Threat Intelligence Engineer
Location Preference: Singapore / Hybrid / Global Collaborative`,

      whoami: `recruiter@taykk-cyber-dossier:~$ (Permissions: read-only | classification: PUBLIC)`
    };
  }

  function formatCertsList(certs) {
    const cloud = certs.filter(c => c.category === 'cloud');
    const sec = certs.filter(c => c.category === 'security');
    const ai = certs.filter(c => c.category === 'ai');

    let out = '';
    if (cloud.length > 0) {
      out += '[CLOUD & INFRASTRUCTURE]\n';
      cloud.forEach(c => out += `  • ${c.title} (${c.org}) — [${c.badgeTag || 'VERIFIED'}]\n`);
      out += '\n';
    }
    if (sec.length > 0) {
      out += '[SECURITY, DEFENSE & APPSEC]\n';
      sec.forEach(c => out += `  • ${c.title} (${c.org}) — [${c.badgeTag || 'VERIFIED'}]\n`);
      out += '\n';
    }
    if (ai.length > 0) {
      out += '[AI SECURITY & GOVERNANCE]\n';
      ai.forEach(c => out += `  • ${c.title} (${c.org}) — [${c.badgeTag || 'VERIFIED'}]\n`);
    }
    return out.trim();
  }

  let history = [];
  let historyIndex = -1;

  function initTerminal() {
    const input = document.getElementById("terminal-input");
    const output = document.getElementById("terminal-output");
    if (!input || !output) return;

    // Welcome banner
    printLine(`keng-cli v2.4 (x86_64-taykk-cyber) - Type 'help' for command list or click pills.`, "system");

    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        const commandText = input.value.trim();
        input.value = "";
        if (commandText.length > 0) {
          history.push(commandText);
          historyIndex = history.length;
          executeCommand(commandText);
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (history.length > 0 && historyIndex > 0) {
          historyIndex--;
          input.value = history[historyIndex];
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIndex < history.length - 1) {
          historyIndex++;
          input.value = history[historyIndex];
        } else {
          historyIndex = history.length;
          input.value = "";
        }
      } else if (e.key === "Tab") {
        e.preventDefault();
        handleAutocomplete(input);
      }
    });

    // Wire quick command chips across the site
    document.querySelectorAll("[data-cli-cmd]").forEach(btn => {
      btn.addEventListener("click", () => {
        const cmd = btn.getAttribute("data-cli-cmd");
        if (cmd) {
          executeCommand(cmd);
          // Scroll smoothly to terminal
          const termSection = document.getElementById("terminal");
          if (termSection) {
            termSection.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });
  }

  function handleAutocomplete(inputElem) {
    const current = inputElem.value.toLowerCase().trim();
    if (!current) return;
    const commands = getCommands();
    const matches = Object.keys(commands).filter(cmd => cmd.startsWith(current));
    if (matches.length === 1) {
      inputElem.value = matches[0];
    } else if (matches.length > 1) {
      printLine(`Suggestions: ${matches.join("  ")}`, "cyan");
    }
  }

  function executeCommand(rawCmd) {
    const output = document.getElementById("terminal-output");
    const cmd = rawCmd.toLowerCase().trim();
    const commands = getCommands();

    // Print Prompt line
    printLine(`user@taykk-secops:~$ ${rawCmd}`, "prompt");

    if (cmd === "clear") {
      output.innerHTML = "";
      return;
    }

    if (commands[cmd]) {
      printLine(commands[cmd], "output");
    } else {
      printLine(`command not found: "${rawCmd}". Type 'help' to inspect valid instructions.`, "error");
    }

    // Auto-scroll to bottom of terminal
    const terminalBody = document.getElementById("terminal-body");
    if (terminalBody) {
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  }

  function printLine(text, type = "output") {
    const output = document.getElementById("terminal-output");
    if (!output) return;

    const line = document.createElement("div");
    line.className = "terminal-output-line";

    if (type === "prompt") {
      line.style.color = "#38bdf8";
      line.style.fontWeight = "600";
    } else if (type === "system") {
      line.style.color = "#00f0ff";
    } else if (type === "error") {
      line.style.color = "#f43f5e";
    } else if (type === "cyan") {
      line.style.color = "#00f0ff";
    } else {
      line.style.color = "#cbd5e1";
    }

    line.textContent = text;
    output.appendChild(line);
  }

  window.addEventListener("DOMContentLoaded", initTerminal);
})();
