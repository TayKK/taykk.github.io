/** A printable summary using the same source data as the portfolio. */
(function () {
  const data = window.PORTFOLIO_DATA;
  const escape = value => String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
  const container = document.getElementById("profile-content");
  if (!container || !data) return;
  const printOnly = container.classList.contains("print-only");
  function credentialList(credentials) {
    return credentials.map(c => {
      const title = c.credentialUrl ? `<a href="${escape(c.credentialUrl)}">${escape(c.title)}</a>` : escape(c.title);
      const issued = escape(window.formatCredentialDate(c.issuedOn, c.issued));
      const expiry = c.expires === "No Expiration" ? "No expiry listed" : `Expires ${escape(window.formatCredentialDate(c.expiresOn, c.expires))}`;
      return `<li data-credential-id="${escape(c.id)}"><strong>${title}</strong><p class="profile-meta">${escape(c.issuer)}</p><p class="profile-meta">Issued ${issued} · ${expiry}</p></li>`;
    }).join("");
  }
  function renderProfile() {
    // Refresh validity at print time, independently of the catalogue's filters.
    const current = data.certifications.filter(c => c.category !== "course" && window.getCredentialStatus(c) === "active");
    const asAt = new Intl.DateTimeFormat("en-SG", { timeZone: "Asia/Singapore", day: "numeric", month: "short", year: "numeric" }).format(new Date());
    container.innerHTML = `
    <header><h1>${escape(data.profile.name)}</h1><p class="profile-headline">${escape(data.profile.headline)}</p>
      <p>${escape(data.profile.location)} · <a href="${escape(data.profile.linkedinUrl)}">LinkedIn</a> · <a href="${escape(data.profile.githubUrl)}">GitHub</a> · <a href="${escape(data.profile.credlyUrl)}">Credly</a> · <a href="https://taykk.github.io/">taykk.github.io</a></p>
      <p class="profile-summary">${escape(data.profile.bio)}</p>
    </header>
    <section><h2>Cybersecurity experience</h2>
      <p class="profile-meta">Ensign InfoSecurity since January 2022 · ${escape(window.getCompanyTenure())}, including my internship</p>
      ${data.workProgression.map(item => `<article><h3>${escape(item.role)}</h3><p class="profile-meta">${escape(item.company)} · ${escape(item.period)}</p><ul>${item.responsibilities.map(text => `<li>${escape(text)}</li>`).join("")}</ul></article>`).join("")}
    </section>
    <section><h2>Research</h2><article>
      <h3>${escape(data.research.title)}</h3><p class="profile-meta">${escape(data.research.venue)} · Co-author</p>
      <p>${escape(data.research.contribution)}</p>
      <p><strong>Learning:</strong> ${escape(data.research.learning)}</p>
      <p><a href="${escape(data.research.arxivUrl)}">Paper: arXiv ${escape(data.research.arxivId.split(" ")[0].replace("arXiv:", ""))}</a></p>
    </article></section>
    <section><h2>Education</h2>${data.educationProgression.map(item=>`<article><h3>${escape(item.degree)}</h3><p class="profile-meta">${escape(item.institution)} · ${escape(item.period)}</p><p>${escape(item.achievement)}</p></article>`).join("")}</section>
    <section class="profile-credential-section" id="credentials">
      <h2>Current credentials (${current.length})</h2>
      <p class="profile-meta">${escape(data.profile.name)} · Singapore · Status as at ${escape(asAt)}</p>
      <p class="profile-credential-note">Current certifications and assessments. Titles link to public verification records where available. The website includes the full credential and training history.</p>
      <ul class="profile-credentials" id="profile-current-credentials">${credentialList(current)}</ul>
    </section>
    <footer>KK · Full portfolio and credential history: <a href="https://taykk.github.io/">taykk.github.io</a></footer>`;
  }
  if (!printOnly) renderProfile();
  window.addEventListener("beforeprint", renderProfile);
  window.addEventListener("afterprint", () => { if (printOnly) container.replaceChildren(); });
  document.getElementById("print-profile")?.addEventListener("click", () => window.print());
})();
