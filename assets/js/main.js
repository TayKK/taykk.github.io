/**
 * Main UI Controller
 * Dynamically mounts content from assets/js/portfolio-data.js
 * Tay Kai Keng Cybersecurity & AI Portfolio
 */

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    renderDynamicContent();
    initHeaderScroll();
    initDomainTabs();
    initCertFilters();
    initMobileNav();
    updateYear();
  });

  // Render everything from PORTFOLIO_DATA
  function renderDynamicContent() {
    const data = window.PORTFOLIO_DATA;
    if (!data) return;

    renderJourney(data.journey);
    renderDomains(data.domains);
    renderCertifications(data.certifications);
    renderExperience(data.experience);
  }

  function renderJourney(journeyList) {
    const container = document.getElementById("journey-container");
    if (!container || !journeyList) return;

    container.innerHTML = journeyList.map(item => `
      <div class="journey-card ${item.stepClass || ''}">
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

  function renderDomains(domainsList) {
    const container = document.getElementById("domains-container");
    if (!container || !domainsList) return;

    container.innerHTML = domainsList.map(d => `
      <div class="domain-card" data-domain-cat="${escapeHtml(d.category)}">
        <div class="domain-card-header">
          <div class="domain-card-icon">${d.icon}</div>
          <h3 class="domain-card-title">${escapeHtml(d.title)}</h3>
        </div>
        <ul class="domain-skill-list">
          ${d.skills.map(s => `<li><span class="bullet">▹</span> ${escapeHtml(s)}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  function renderCertifications(certsList) {
    const container = document.getElementById("certs-container");
    if (!container || !certsList) return;

    // Update filter badge counts
    const countAll = certsList.length;
    const countCloud = certsList.filter(c => c.category === 'cloud').length;
    const countAi = certsList.filter(c => c.category === 'ai').length;
    const countSec = certsList.filter(c => c.category === 'security').length;

    const btnAll = document.querySelector('[data-cert-filter="all"]');
    const btnCloud = document.querySelector('[data-cert-filter="cloud"]');
    const btnAi = document.querySelector('[data-cert-filter="ai"]');
    const btnSec = document.querySelector('[data-cert-filter="security"]');

    if (btnAll) btnAll.textContent = `All Certifications (${countAll})`;
    if (btnCloud) btnCloud.textContent = `Cloud & Infrastructure (${countCloud})`;
    if (btnAi) btnAi.textContent = `AI & Governance (${countAi})`;
    if (btnSec) btnSec.textContent = `Security & Defense (${countSec})`;

    container.innerHTML = certsList.map(c => {
      const tagColor = c.category === 'cloud' ? '#00f0ff' : c.category === 'ai' ? '#a855f7' : '#10b981';
      return `
        <div class="cert-card" data-cert-cat="${escapeHtml(c.category)}">
          <div>
            <div class="cert-top">
              <span class="cert-issuer-badge">${escapeHtml(c.issuer)}</span>
              <span class="cert-verified-status">✓ VERIFIED</span>
            </div>
            <h3 class="cert-title">${escapeHtml(c.title)}</h3>
            <div class="cert-org">${escapeHtml(c.org)}</div>
            <p class="cert-focus">${escapeHtml(c.description)}</p>
          </div>
          <div class="cert-footer">
            <span>DOMAIN: ${escapeHtml(c.category.toUpperCase())}</span>
            <span style="color: ${tagColor}; font-weight: 600;">${escapeHtml(c.badgeTag || 'VERIFIED')}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderExperience(expList) {
    const container = document.getElementById("experience-container");
    if (!container || !expList) return;

    container.innerHTML = expList.map(e => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3 class="timeline-role">${escapeHtml(e.role)}</h3>
          <div class="timeline-org">${escapeHtml(e.org)}</div>
          <p class="timeline-desc">${escapeHtml(e.desc)}</p>
        </div>
      </div>
    `).join('');
  }

  // Header scroll detection
  function initHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // Domain competency matrix filtering
  function initDomainTabs() {
    const tabs = document.querySelectorAll(".domain-tab");

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const filter = tab.getAttribute("data-domain-filter");
        const cards = document.querySelectorAll(".domain-card");
        cards.forEach(card => {
          const category = card.getAttribute("data-domain-cat");
          if (filter === "all" || category === filter) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  // Certifications category filter
  function initCertFilters() {
    const chips = document.querySelectorAll("[data-cert-filter]");

    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        chips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");

        const filter = chip.getAttribute("data-cert-filter");
        const certCards = document.querySelectorAll(".cert-card");
        certCards.forEach(card => {
          const cat = card.getAttribute("data-cert-cat");
          if (filter === "all" || cat === filter) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  // Mobile navigation drawer toggle
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
          navLinks.style.top = "72px";
          navLinks.style.left = "0";
          navLinks.style.width = "100%";
          navLinks.style.background = "rgba(11, 17, 30, 0.98)";
          navLinks.style.padding = "1.5rem";
          navLinks.style.borderBottom = "1px solid rgba(0, 240, 255, 0.2)";
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
