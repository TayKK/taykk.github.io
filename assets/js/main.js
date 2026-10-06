/**
 * Main UI Controller
 * Tay Kai Keng Cybersecurity & AI Portfolio
 */

(function () {
  let activeCategory = "all";
  let activeLevel = "all";
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

    renderJourney(data.journey);
    renderCertifications(data.certifications);
    renderWorkProgression(data.workProgression);
    renderEducationProgression(data.educationProgression);
  }

  function renderJourney(journeyList) {
    const container = document.getElementById("journey-container");
    if (!container || !journeyList) return;

    container.innerHTML = journeyList.map(item => `
      <div class="journey-card">
        <div class="journey-step">
          <span>${escapeHtml(item.phase)}</span>
          <span class="tag-badge">${escapeHtml(item.badge)}</span>
        </div>
        <div class="journey-icon">${item.icon}</div>
        <h3 class="journey-title">${escapeHtml(item.title)}</h3>
        <p class="journey-summary">${escapeHtml(item.summary)}</p>
        <div class="journey-tags">
          ${item.tags.map(t => `<span class="tag-badge">${escapeHtml(t)}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  function renderCertifications(certsList) {
    const container = document.getElementById("certs-container");
    if (!container || !certsList) return;

    // Multi-criteria filtering
    const filtered = certsList.filter(c => {
      const matchCat = activeCategory === "all" || c.category === activeCategory;
      const matchLevel = activeLevel === "all" || c.level === activeLevel;
      const matchDomain = activeDomain === "all" || c.domain === activeDomain;
      const matchStatus = activeStatus === "all" || c.status === activeStatus;
      return matchCat && matchLevel && matchDomain && matchStatus;
    });

    // Update Category Tab Counts
    const countAll = certsList.length;
    const countProctored = certsList.filter(c => c.category === "proctored").length;
    const countOnline = certsList.filter(c => c.category === "online").length;
    const countCourse = certsList.filter(c => c.category === "course").length;

    updateTabCount('[data-cert-cat="all"]', `All (${countAll})`);
    updateTabCount('[data-cert-cat="proctored"]', `(1) Proctored (${countProctored})`);
    updateTabCount('[data-cert-cat="online"]', `(2) Online Assessments (${countOnline})`);
    updateTabCount('[data-cert-cat="course"]', `(3) Course Certs (${countCourse})`);

    // Render Cards
    if (filtered.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; padding: 2.5rem; text-align: center; color: var(--text-muted); font-family: var(--font-mono);">No certifications match the selected filter combination.</div>`;
      return;
    }

    container.innerHTML = filtered.map(c => {
      const isExpired = c.status === "expired";
      const statusLabel = isExpired ? "Expired" : "Active";
      const statusClass = isExpired ? "expired" : "active";
      
      const expiryText = c.expires === "No Expiration" 
        ? "No Expiration" 
        : isExpired 
          ? `Expired: ${escapeHtml(c.expires)}` 
          : `Expires: ${escapeHtml(c.expires)}`;

      const vendorLogoSvg = window.getVendorLogo ? window.getVendorLogo(c.vendor) : '';
      const levelClass = c.level || 'intermediate';
      const levelName = c.level === 'advanced' ? 'Advanced' : c.level === 'foundational' ? 'Foundational' : 'Intermediate';

      return `
        <div class="cert-card ${isExpired ? 'expired' : ''}">
          <div>
            <div class="cert-header">
              <div class="cert-vendor-box">
                <div class="vendor-logo-wrapper" title="${escapeHtml(c.issuer)}">
                  ${vendorLogoSvg}
                </div>
                <span class="cert-issuer-badge">${escapeHtml(c.issuer)}</span>
              </div>
              <div style="display: flex; gap: 0.35rem; align-items: center;">
                <span class="level-badge ${levelClass}">${levelName}</span>
                <span class="status-badge ${statusClass}">
                  <span class="pulse-dot" style="background-color: currentColor; width: 6px; height: 6px;"></span>
                  ${statusLabel}
                </span>
              </div>
            </div>

            <h3 class="cert-title">${escapeHtml(c.title)}</h3>
            <div class="cert-validity">
              <span>Issued: ${escapeHtml(c.issued)}</span>
              <span>•</span>
              <span style="${isExpired ? 'color: var(--text-dim);' : ''}">${expiryText}</span>
              ${c.credentialId ? `<span>•</span><span style="color: var(--text-dim);">ID: ${escapeHtml(c.credentialId)}</span>` : ''}
            </div>
          </div>

          <div class="cert-skills">
            ${(c.skills || []).map(s => `<span class="tag-badge">${escapeHtml(s)}</span>`).join('')}
          </div>
        </div>
      `;
    }).join('');
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
    // Tier tabs: All, Proctored, Online, Course
    const catTabs = document.querySelectorAll("[data-cert-cat]");
    catTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        catTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        activeCategory = tab.getAttribute("data-cert-cat");
        renderCertifications(window.PORTFOLIO_DATA.certifications);
      });
    });

    // Level Select Dropdown
    const levelSelect = document.getElementById("filter-cert-level");
    if (levelSelect) {
      levelSelect.addEventListener("change", (e) => {
        activeLevel = e.target.value;
        renderCertifications(window.PORTFOLIO_DATA.certifications);
      });
    }

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
        statusBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeStatus = btn.getAttribute("data-cert-status");
        renderCertifications(window.PORTFOLIO_DATA.certifications);
      });
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
    const toggleBtn = document.querySelector(".mobile-nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (toggleBtn && navLinks) {
      toggleBtn.addEventListener("click", () => {
        const isHidden = window.getComputedStyle(navLinks).display === "none";
        if (isHidden) {
          navLinks.style.display = "flex";
          navLinks.style.flexDirection = "column";
          navLinks.style.position = "absolute";
          navLinks.style.top = "70px";
          navLinks.style.left = "0";
          navLinks.style.width = "100%";
          navLinks.style.background = "rgba(15, 21, 35, 0.98)";
          navLinks.style.padding = "1.5rem";
          navLinks.style.borderBottom = "1px solid rgba(56, 189, 248, 0.2)";
        } else {
          navLinks.style.display = "";
        }
      });
    }
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
