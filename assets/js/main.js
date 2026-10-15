/**
 * Main UI Controller
 * TAY Kai Keng Cybersecurity & AI Portfolio
 */

(function () {
  let activeCategory = "all";
  let activeDomain = "all";
  let activeStatus = "all";

  document.addEventListener("DOMContentLoaded", () => {
    renderDynamicContent();
    initHeaderScroll();
    initCertFilters();
    initMobileNav();
    updateYear();
  });

  function renderDynamicContent() {
    const data = window.PORTFOLIO_DATA;
    if (!data) return;

    renderResearch(data.research);
    renderCertifications(data.certifications);
    renderWorkProgression(data.workProgression);
    renderEducationProgression(data.educationProgression);
  }

  function renderResearch(research) {
    for (const [id, value] of Object.entries({
      "research-authors": research.authors,
      "research-summary": research.abstract,
      "research-contribution": research.contribution,
      "research-learning": research.learning
    })) {
      document.getElementById(id).textContent = value;
    }
  }

  function certificationMarkup(c) {
    const status = window.getCredentialStatus(c);
    const statusLabel = { active: "Current", completed: "Completed", expired: "Expired" }[status];
    const issued = window.formatCredentialDate(c.issuedOn, c.issued);
    const expiry = c.expires === "No Expiration" ? "No expiry listed"
      : `${status === "expired" ? "Expired" : "Expires"}: ${window.formatCredentialDate(c.expiresOn, c.expires)}`;
    const art = c.badgeImage
      ? `<img class="credential-badge" src="${escapeHtml(c.badgeImage)}" alt="${escapeHtml(c.title)} badge" width="56" height="56" loading="lazy">`
      : `<div class="vendor-logo-wrapper" aria-hidden="true">${window.getVendorLogo(c.vendor)}</div>`;
    const types = { proctored: "Proctored certification", online: "Online assessment", course: "Course completion" };
    const domain = document.querySelector(`#filter-cert-domain option[value="${c.domain}"]`).textContent;
    return `<article class="cert-card ${status === "expired" ? "expired" : ""}" data-credential-id="${escapeHtml(c.id)}">
      <div class="cert-header">
        ${art}
        <div class="cert-heading"><h3 class="cert-title">${escapeHtml(c.title)}</h3><p class="cert-issuer-badge">${escapeHtml(c.issuer)}</p></div>
      </div>
      <div class="cert-classification"><span class="status-badge ${status}">${statusLabel}</span><span>${types[c.category]}</span></div>
      <p class="cert-domain">${escapeHtml(domain)}</p>
      <div class="cert-validity"><span>${status === "completed" ? "Completed" : "Issued"}: ${escapeHtml(issued)}</span>${status === "completed" ? "" : `<span>${escapeHtml(expiry)}</span>`}</div>
      ${c.credentialUrl ? `<a class="credential-link" href="${escapeHtml(c.credentialUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Verify ${escapeHtml(c.title)} on Credly">Verify on Credly →</a>` : ""}
    </article>`;
  }

  function renderCertifications(certsList) {
    const container = document.getElementById("certs-container");
    if (!container || !certsList) return;

    // Multi-criteria filtering
    const filtered = certsList.filter(c => {
      const matchCat = activeCategory === "all" || c.category === activeCategory;
      const matchDomain = activeDomain === "all" || c.domain === activeDomain;
      const state = window.getCredentialStatus(c);
      const matchStatus = activeStatus === "all" || (activeStatus === "active" ? state !== "expired" : state === activeStatus);
      return matchCat && matchDomain && matchStatus;
    });

    // Type counts describe assessment format, not difficulty or prestige.
    const countAll = certsList.length;
    const countProctored = certsList.filter(c => c.category === "proctored").length;
    const countOnline = certsList.filter(c => c.category === "online").length;
    const countCourse = certsList.filter(c => c.category === "course").length;

    updateTabCount('[data-cert-cat="all"]', `All records (${countAll})`);
    updateTabCount('[data-cert-cat="proctored"]', `Proctored certifications (${countProctored})`);
    updateTabCount('[data-cert-cat="online"]', `Online assessments (${countOnline})`);
    updateTabCount('[data-cert-cat="course"]', `Completed courses (${countCourse})`);
    const countState = state => certsList.filter(c => window.getCredentialStatus(c) === state).length;
    document.getElementById("cert-inventory-summary").textContent = `${countState("active")} current credentials · ${countState("completed")} completed courses · ${countState("expired")} expired records`;
    document.getElementById("reset-cert-filters").disabled = activeCategory === "all" && activeDomain === "all" && activeStatus === "all";

    document.getElementById("cert-results-count").textContent = `${filtered.length} of ${certsList.length} records shown`;
    container.innerHTML = filtered.length
      ? filtered.map(c => certificationMarkup(c)).join("")
      : '<p class="cert-empty">No credentials match these filters. Try another domain or status.</p>';
  }

  function updateTabCount(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  }

  function renderWorkProgression(workList) {
    const container = document.getElementById("work-progression-container");
    if (!container || !workList) return;

    container.innerHTML = workList.map((item, idx) => `
      <div class="progression-step ${item.isCurrent ? 'current' : ''}">
        <div class="step-node">${item.stage.replace('STEP ', '')}</div>
        <div class="step-card">
          <div class="step-header">
            <span class="step-badge ${item.badgeType}">${escapeHtml(item.badge)}</span>
            <span class="step-period">${escapeHtml(item.period)}</span>
          </div>
          <h4 class="step-title">${escapeHtml(item.role)}</h4>
          <div class="step-org">${escapeHtml(item.company)} — ${escapeHtml(item.location)}</div>
          ${item.responsibilities ? `<ul class="work-responsibilities">${item.responsibilities.map(text => `<li>${escapeHtml(text)}</li>`).join("")}</ul>` : ""}
          <div class="step-tags">
            ${item.tags.map(t => `<span class="tag-badge">${escapeHtml(t)}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderEducationProgression(eduList) {
    const container = document.getElementById("education-progression-container");
    if (!container || !eduList) return;

    container.innerHTML = eduList.map((item, idx) => `
      <div class="progression-step ${item.isHighest ? 'highest' : ''}">
        <div class="step-node">${item.stage.replace('LEVEL ', '')}</div>
        <div class="step-card">
          <div class="step-header">
            <span class="step-badge ${item.badgeType}">${escapeHtml(item.badge)}</span>
            <span class="step-period">${escapeHtml(item.period)}</span>
          </div>
          <h4 class="step-title">${escapeHtml(item.degree)}</h4>
          <div class="step-org">${escapeHtml(item.institution)}</div>
          <div class="step-grade">${escapeHtml(item.achievement)}</div>
          <div class="step-tags">
            ${item.tags.map(t => `<span class="tag-badge">${escapeHtml(t)}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  function initCertFilters() {
    // Credential types: All, Proctored, Online, Course
    const catTabs = document.querySelectorAll("[data-cert-cat]");
    catTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        catTabs.forEach(t => { t.classList.remove("active"); t.setAttribute("aria-pressed", "false"); });
        tab.setAttribute("aria-pressed", "true");
        tab.classList.add("active");
        activeCategory = tab.getAttribute("data-cert-cat");
        renderCertifications(window.PORTFOLIO_DATA.certifications);
      });
    });

    // Domain Select Dropdown
    const domainSelect = document.getElementById("filter-cert-domain");
    if (domainSelect) {
      domainSelect.addEventListener("change", (e) => {
        activeDomain = e.target.value;
        renderCertifications(window.PORTFOLIO_DATA.certifications);
      });
    }

    // Status Buttons (All, Active, Expired)
    const statusBtns = document.querySelectorAll("[data-cert-status]");
    statusBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        statusBtns.forEach(b => { b.classList.remove("active"); b.setAttribute("aria-pressed", "false"); });
        btn.setAttribute("aria-pressed", "true");
        btn.classList.add("active");
        activeStatus = btn.getAttribute("data-cert-status");
        renderCertifications(window.PORTFOLIO_DATA.certifications);
      });
    });
    document.getElementById("reset-cert-filters").addEventListener("click", () => {
      activeCategory = activeDomain = activeStatus = "all";
      domainSelect.value = "all";
      for (const button of [...catTabs, ...statusBtns]) {
        const active = (button.dataset.certCat || button.dataset.certStatus) === "all";
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      }
      renderCertifications(window.PORTFOLIO_DATA.certifications);
    });
  }

  function initHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  function initMobileNav() {
    const toggle = document.querySelector(".mobile-nav-toggle");
    const navigation = document.getElementById("primary-navigation");
    const mobile = window.matchMedia("(max-width: 1100px)");
    const close = () => {
      navigation.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    };
    toggle.addEventListener("click", () => {
      const open = navigation.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });
    navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", close));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && navigation.classList.contains("is-open")) {
        close(); toggle.focus();
      }
    });
    mobile.addEventListener("change", close);
  }

  function updateYear() {
    const yearElem = document.getElementById("current-year");
    if (yearElem) {
      yearElem.textContent = new Date().getFullYear();
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
})();
