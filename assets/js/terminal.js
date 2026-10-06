/**
 * Interactive SecOps CLI Terminal: kk-cli v2.5
 * Reads dynamically from window.PORTFOLIO_DATA
 */

(function () {
  function getCommands() {
    const data = window.PORTFOLIO_DATA || {};
    const p = data.profile || {};
    const certs = data.certifications || [];
    const journey = data.journey || [];
    const research = data.research || {};
    const work = data.workExperience || [];
    const edu = data.education || [];

    return {
      help: `Available commands in kk-cli:
  help          - Display this command manual
  about         - Overview of Kai Keng TAY
  journey       - Trace evolution from Blue Teamer to Holistic Practitioner
  research      - Details on published research (BinImg2Vec / ICAIC 2022)
  certs         - List all 20 verified industry credentials (by category & validity)
  work          - Professional work experience (Ensign InfoSecurity, RSAF)
  edu           - Education & academic credentials (SUTD, SIT, SP)
  contact       - Direct connectivity protocols (LinkedIn, GitHub)
  whoami        - Print session telemetry
  clear         - Clear terminal display buffer`,

      about: `[DOSSIER: ${p.name || 'KAI KENG TAY'}]
--------------------------------------------------------------------------------
Role Focus:     ${p.headline || 'Cybersecurity Practitioner & AI Security Researcher'}
Philosophy:     "${p.tagline || 'Never stop learning. Knowledge is power.'}"
Status:         ${p.status || 'ACTIVE PRACTITIONER'}
Location:       ${p.location || 'Singapore'}
Bio:            ${p.bio || ''}`,

      journey: `[EVOLUTION: FROM BLUE TEAM TO HOLISTIC DEFENSE]
--------------------------------------------------------------------------------
` + journey.map(j => `${j.phase}: ${j.title} [${j.badge}]
  ${j.summary}
  Tags: ${j.tags.join(', ')}`).join('\n\n'),

      research: `[FLAGSHIP RESEARCH: ${research.title || 'BinImg2Vec'}]
--------------------------------------------------------------------------------
Title:       ${research.title || 'BinImg2Vec'}
Venue:       ${research.venue || ''}
Authors:     ${research.authors || ''}
DOI / arXiv: ${research.arxivUrl || ''}
Abstract:    ${research.abstract || ''}`,

      certs: `[VERIFIED INDUSTRY CREDENTIALS (${certs.length} TOTAL)]
--------------------------------------------------------------------------------
` + formatCertsList(certs),

      work: `[PROFESSIONAL WORK EXPERIENCE]
--------------------------------------------------------------------------------
` + work.map(w => `• ${w.role}
  Company:  ${w.company} (${w.location})
  Period:   ${w.period}
  Scope:    ${w.highlights.join(' ')}`).join('\n\n'),

      edu: `[EDUCATION & ACADEMIC HONORS]
--------------------------------------------------------------------------------
` + edu.map(e => `• ${e.degree}
  School:   ${e.institution}
  Period:   ${e.period}
  Grade:    ${e.grade}
  Details:  ${e.details}`).join('\n\n'),

      contact: `[CONNECTIVITY PROTOCOLS]
--------------------------------------------------------------------------------
LinkedIn:  ${p.linkedinUrl || 'https://sg.linkedin.com/in/tay-kai-keng'}
GitHub:    ${p.githubUrl || 'https://github.com/TayKK'}
Location:  ${p.location || 'Singapore'}`,

      whoami: `recruiter@taykk-cyber-dossier:~$ (Session: kk-cli v2.5 | access: PUBLIC)`
    };
  }

  function formatCertsList(certs) {
    const proctored = certs.filter(c => c.category === 'proctored');
    const online = certs.filter(c => c.category === 'online');
    const course = certs.filter(c => c.category === 'course');

    let out = '';
    out += `1. PROCTORED INDUSTRY CERTIFICATIONS (${proctored.length})\n`;
    proctored.forEach(c => {
      const exp = c.expires === 'No Expiration' ? 'Permanent' : `${c.status.toUpperCase()}: ${c.expires}`;
      out += `  • ${c.title} [${c.issuer}] — (${exp})\n`;
    });

    out += `\n2. ONLINE / ASSESSMENT-BASED CERTIFICATIONS (${online.length})\n`;
    online.forEach(c => {
      const exp = c.expires === 'No Expiration' ? 'Permanent' : `${c.status.toUpperCase()}: ${c.expires}`;
      out += `  • ${c.title} [${c.issuer}] — (${exp})\n`;
    });

    out += `\n3. COURSE CERTIFICATIONS & SPECIALIZATIONS (${course.length})\n`;
    course.forEach(c => {
      out += `  • ${c.title} [${c.issuer}] — (Issued: ${c.issued})\n`;
    });

    return out.trim();
  }

  let history = [];
  let historyIndex = -1;

  function initTerminal() {
    const input = document.getElementById("terminal-input");
    const output = document.getElementById("terminal-output");
    if (!input || !output) return;

    // Welcome banner
    printLine(`kk-cli v2.5 (x86_64-taykk-cyber) - Type 'help' for command list or click chips.`, "system");

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
      printLine(`Suggestions: ${matches.join("  ")}`, "accent");
    }
  }

  function executeCommand(rawCmd) {
    const output = document.getElementById("terminal-output");
    const cmd = rawCmd.toLowerCase().trim();
    const commands = getCommands();

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
      line.style.color = "#38bdf8";
    } else if (type === "error") {
      line.style.color = "#f87171";
    } else if (type === "accent") {
      line.style.color = "#38bdf8";
    } else {
      line.style.color = "#cbd5e1";
    }

    line.textContent = text;
    output.appendChild(line);
  }

  window.addEventListener("DOMContentLoaded", initTerminal);
})();
