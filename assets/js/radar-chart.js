/** Spider chart of documented experience across major cybersecurity domains. */
(function () {
  function initRadarChart() {
    const container = document.getElementById("radar-chart-container");
    const directory = document.getElementById("domain-evidence-list");
    const data = window.PORTFOLIO_DATA;
    if (!container || !directory || !data) return;
    const domains = data.competencyRadar;
    const levels = data.radarLevels;
    if (!domains?.length || !levels?.length) return;

    const escape = (value) => String(value).replace(/[&<>"']/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);
    const center = 210;
    const radius = 116;
    const maxLevel = levels.length - 1;
    const point = (index, distance) => {
      const angle = index * Math.PI * 2 / domains.length - Math.PI / 2;
      return [center + Math.cos(angle) * distance, center + Math.sin(angle) * distance];
    };
    const coords = (point) => point.map(n => n.toFixed(1)).join(",");

    const rings = levels.slice(1).map((level, index) => {
      const distance = radius * (index + 1) / maxLevel;
      return `<polygon class="radar-ring" points="${domains.map((_, i) => coords(point(i, distance))).join(" ")}"/>
        <text class="radar-ring-number" x="${center + 8}" y="${center - distance + 13}">${index + 1}</text>`;
    }).join("");
    const axes = domains.map((_, i) => {
      const [x, y] = point(i, radius);
      return `<line class="radar-axis" x1="${center}" y1="${center}" x2="${x}" y2="${y}"/>`;
    }).join("");
    const vertices = domains.map((domain, i) => point(i, radius * domain.level / maxLevel));
    const dots = domains.map((domain, i) => {
      const [x, y] = vertices[i];
      return `<circle class="radar-dot${domain.level === 0 ? " radar-dot-empty" : ""}" cx="${x}" cy="${y}" r="4"/>`;
    }).join("");
    // Every domain has an accessible label link, including those at the origin.
    const labels = domains.map((domain, i) => {
      const [x, y] = point(i, radius + 28);
      const anchor = Math.abs(x - center) < 5 ? "middle" : x > center ? "start" : "end";
      const label = `${domain.domain}: ${domain.level} — ${levels[domain.level].label}. Explore evidence and suggested next step.`;
      return `<a href="#domain-${escape(domain.id)}" class="radar-domain-link" data-domain="${escape(domain.id)}" aria-label="${escape(label)}">
        <text class="radar-label" x="${x}" y="${y + 5}" text-anchor="${anchor}">${escape(domain.short)}</text>
      </a>`;
    }).join("");

    container.innerHTML = `
      <p class="radar-intro">Documented experience across 12 cyber domains. Select a domain to explore the evidence and a next step.</p>
      <svg class="radar-chart" viewBox="0 0 420 420" role="group" aria-labelledby="radar-title radar-description">
        <title id="radar-title">Cybersecurity experience &amp; growth map</title>
        <desc id="radar-description">Self-assessed experience on a scale from 0 to 3. Each domain label links to its evidence below. Zero means not yet documented in this portfolio.</desc>
        <g aria-hidden="true">${axes}${rings}
          <polygon class="radar-area" points="${vertices.map(coords).join(" ")}"/>
          ${dots}<text class="radar-ring-number" x="${center + 8}" y="${center + 15}">0</text>
        </g>
        ${labels}
      </svg>
      <ol class="radar-legend" start="0" aria-label="Documented experience scale">
        ${levels.map((level, index) => `<li><span class="radar-level-number" aria-hidden="true">${index}</span><span>${escape(level.label)}</span></li>`).join("")}
      </ol>
      <p class="radar-note">Self-assessed from portfolio evidence. These levels describe experience, not measured proficiency.</p>
      <a class="radar-explore" href="#domain-map">Explore all domains &amp; development steps →</a>`;

    directory.innerHTML = domains.map(domain => `
      <details class="domain-evidence" id="domain-${escape(domain.id)}">
        <summary>
          <span class="domain-name">${escape(domain.domain)}</span>
          <span class="domain-level${domain.level === 0 ? " domain-level-empty" : ""}">${domain.level} · ${escape(levels[domain.level].label)}</span>
        </summary>
        <div class="domain-evidence-body">
          <p class="domain-scope">${escape(domain.scope)}</p>
          <h3>Current evidence</h3>
          <p>${escape(domain.evidence)}</p>
          ${domain.source ? `<a class="domain-source" href="${escape(domain.source)}">${escape(domain.sourceLabel)} →</a>` : ""}
          <h3>Suggested next step</h3>
          <p>${escape(domain.nextStep)}</p>
        </div>
      </details>`).join("");

    const openDomain = (id) => {
      const detail = document.getElementById(id);
      if (!detail?.classList.contains("domain-evidence")) return;
      detail.open = true;
      detail.querySelector("summary").focus({ preventScroll: true });
      detail.scrollIntoView({ block: "start" });
    };
    container.querySelectorAll(".radar-domain-link").forEach(link => {
      link.addEventListener("click", () => openDomain(`domain-${link.dataset.domain}`));
    });
    // Direct links and browser back/forward also reveal the relevant evidence.
    window.addEventListener("hashchange", () => openDomain(window.location.hash.slice(1)));
    if (window.location.hash.startsWith("#domain-")) openDomain(window.location.hash.slice(1));

    document.getElementById("radar-rubric").innerHTML = levels.map((level, index) => `
      <div><dt>${index} · ${escape(level.label)}</dt><dd>${escape(level.description)}</dd></div>`).join("");
  }

  window.addEventListener("DOMContentLoaded", initRadarChart);
})();
