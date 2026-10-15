/**
 * Interactive SecOps CLI Terminal: kk-cli v2.5
 * Reads dynamically from window.PORTFOLIO_DATA
 * No personal email address or phone number is published.
 */

(function () {
  function getCommands() {
    const data = window.PORTFOLIO_DATA || {};
    const p = data.profile || {};
    const certs = data.certifications || [];
    const journey = data.journey || [];
    const research = data.research || {};
    const work = data.workProgression || [];
    const edu = data.educationProgression || [];

    return {
      help: `Available commands in kk-cli:
  help          - Display this command manual
  about         - Overview of TAY Kai Keng
  journey       - Explore practice, research, and continuing development
  radar         - Explore my domain experience and related credentials
  research      - Details on published research (BinImg2Vec / ICAIC 2022)
  certs         - List certifications and training (by category & validity)
  work          - Cybersecurity experience (Ensign InfoSecurity)
  edu           - Academic degree progression (SUTD, SIT, SP)
  contact       - Public connectivity channels (LinkedIn, GitHub)
  whoami        - Print session telemetry
  clear         - Clear terminal display buffer`,

      about: `[DOSSIER: ${p.name || 'TAY Kai Keng'}]
--------------------------------------------------------------------------------
Role Focus:     ${p.headline || 'Cybersecurity Practitioner & AI Security Researcher'}
Philosophy:     "${p.tagline || 'Never stop learning. Knowledge is power.'}"
Status:         ${p.status || 'ACTIVE PRACTITIONER'}
Location:       ${p.location || 'Singapore'}
Bio:            ${p.bio || ''}`,

      journey: `[PRACTICE, RESEARCH & CONTINUING DEVELOPMENT]
--------------------------------------------------------------------------------
` + journey.map(j => `${j.phase}: ${j.title} [${j.badge}]
  ${j.summary}
  Tags: ${j.tags.join(', ')}`).join('\n\n'),

      radar: `[CYBER DOMAIN EXPERIENCE & GROWTH MAP]
--------------------------------------------------------------------------------
Self-assessed from portfolio evidence; levels describe experience, not proficiency.
Zero means not yet documented, not absence of ability.
` + (data.radarLevels || []).map((level, index) => `${index}: ${level.label}`).join('\n') + '\n\n'
        + (data.competencyRadar || []).map(domain => `${domain.domain}: ${domain.level} — ${data.radarLevels[domain.level].label}
  Evidence: ${domain.evidence}
  Related learning: ${window.getDomainCredentials(domain.id).map(c => `${c.title} [${window.getCredentialStatus(c)}]`).join("; ") || "No credential mapped yet"}`).join('\n\n'),

      research: `[FLAGSHIP RESEARCH: ${research.title || 'BinImg2Vec'}]
--------------------------------------------------------------------------------
Title:       ${research.title || 'BinImg2Vec'}
Venue:       ${research.venue || ''}
Authors:     ${research.authors || ''}
DOI / arXiv: ${research.arxivUrl || ''}
Summary:     ${research.abstract || ''}
My involvement: ${research.contribution || ''}
What I learned: ${research.learning || ''}`,

      certs: `[CERTIFICATIONS & TRAINING (${certs.length} TOTAL)]
--------------------------------------------------------------------------------
` + formatCertsList(certs),

      work: `[CAREER PROGRESSION LADDER]
--------------------------------------------------------------------------------
` + work.map(w => `[${w.stage}] ${w.badge}: ${w.role}
  Company:  ${w.company} (${w.location})
  Period:   ${w.period}
  Work:     ${(w.responsibilities || []).join(' ')}
  Focus:    ${w.tags.join(' • ')}`).join('\n\n'),

      edu: `[ACADEMIC DEGREE ADVANCEMENT]
--------------------------------------------------------------------------------
` + edu.map(e => `[${e.stage}] ${e.badge}: ${e.degree}
  School:       ${e.institution}
  Period:       ${e.period}
  Achievement:  ${e.achievement}
  Focus:        ${e.tags.join(' • ')}`).join('\n\n'),

      contact: `[PUBLIC CONNECTIVITY]
--------------------------------------------------------------------------------
LinkedIn:  ${p.linkedinUrl || 'https://sg.linkedin.com/in/tay-kai-keng'}
GitHub:    ${p.githubUrl || 'https://github.com/TayKK'}
Credly:    ${p.credlyUrl || 'https://www.credly.com/users/tay-kai-keng/badges/credly'}
Location:  ${p.location || 'Singapore'}
Note:      To preserve privacy, direct communication is handled via LinkedIn.`,

      whoami: `visitor@kk-cyber-dossier:~$ (Session: kk-cli v2.5 | access: PUBLIC)`
    };
  }

  function formatCertsList(certs) {
    const proctored = certs.filter(c => c.category === 'proctored');
    const online = certs.filter(c => c.category === 'online');
    const course = certs.filter(c => c.category === 'course');

    let out = '';
    out += `PROCTORED CERTIFICATIONS (${proctored.length})\n`;
    proctored.forEach(c => {
      const exp = c.expires === 'No Expiration' ? 'No expiry listed' : `${window.getCredentialStatus(c).toUpperCase()}: ${window.formatCredentialDate(c.expiresOn, c.expires)}`;
      out += `  • ${c.title} (${c.issuer}) — ${exp}${c.credentialUrl ? '\n    Verify: ' + c.credentialUrl : ''}\n`;
    });

    out += `\nONLINE ASSESSMENTS (${online.length})\n`;
    online.forEach(c => {
      const exp = c.expires === 'No Expiration' ? 'No expiry listed' : `${window.getCredentialStatus(c).toUpperCase()}: ${window.formatCredentialDate(c.expiresOn, c.expires)}`;
      out += `  • ${c.title} (${c.issuer}) — ${exp}${c.credentialUrl ? '\n    Verify: ' + c.credentialUrl : ''}\n`;
    });

    out += `\nCOMPLETED COURSES (${course.length})\n`;
    course.forEach(c => {
      out += `  • ${c.title} (${c.issuer}) — Completed: ${window.formatCredentialDate(c.issuedOn, c.issued)}${c.credentialUrl ? '\n    Verify: ' + c.credentialUrl : ''}\n`;
    });

    return out.trim();
  }

  let history = [];
  let historyIndex = -1;

  function initTerminal() {
    const input = document.getElementById("terminal-input");
    const output = document.getElementById("terminal-output");
    if (!input || !output) return;

    printLine(`kk-cli v2.5 (x86_64-kk-cyber) - Type 'help' for command list or click chips.`, "system");

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
    const disclosure = document.getElementById("terminal-disclosure");
    if (disclosure) disclosure.open = true;
    const output = document.getElementById("terminal-output");
    const cmd = rawCmd.toLowerCase().trim();
    const commands = getCommands();

    printLine(`user@kk-secops:~$ ${rawCmd}`, "prompt");

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
