/**
 * Interactive Spider Web / Radar Chart
 * Visualizes cyber domain competency metrics
 */

(function () {
  function initRadarChart() {
    const container = document.getElementById("radar-chart-container");
    if (!container) return;

    const radarData = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.competencyRadar) || [
      { domain: "DFIR & Threat Ops", score: 94, short: "DFIR", keyCreds: "GCFE • Incident Response Consultant" },
      { domain: "AI Security & AIMS", score: 92, short: "AI-Sec", keyCreds: "BinImg2Vec • ISO 42001 • AWS AI • CLLMSP" },
      { domain: "Cloud & Containers", score: 88, short: "Cloud", keyCreds: "Google Cloud ACE • KCNA • LFCA" },
      { domain: "AppSec & API Defense", score: 85, short: "AppSec", keyCreds: "APIsec Certified • OWASP API Top 10" },
      { domain: "Networks & Systems", score: 87, short: "Systems", keyCreds: "CCNA • Linux LFCA • Cyber-Physical" },
      { domain: "GRC & Architecture", score: 84, short: "GRC", keyCreds: "ISO 42001 Lead • MS SC-900 • Maturity Reviews" }
    ];

    const size = 330;
    const center = size / 2;
    const radius = 108;
    const numAxes = radarData.length;
    const angleStep = (Math.PI * 2) / numAxes;

    // Calculate concentric rings
    const rings = [0.2, 0.4, 0.6, 0.8, 1.0];
    let gridPolygons = "";
    rings.forEach((scale) => {
      const points = [];
      for (let i = 0; i < numAxes; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = center + Math.cos(angle) * (radius * scale);
        const y = center + Math.sin(angle) * (radius * scale);
        points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      }
      gridPolygons += `<polygon points="${points.join(' ')}" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>`;
    });

    // Axis lines and labels
    let axisLines = "";
    let axisLabels = "";
    for (let i = 0; i < numAxes; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const xEnd = center + Math.cos(angle) * radius;
      const yEnd = center + Math.sin(angle) * radius;
      axisLines += `<line x1="${center}" y1="${center}" x2="${xEnd.toFixed(1)}" y2="${yEnd.toFixed(1)}" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1"/>`;

      // Label positioning
      const labelDist = radius + 26;
      const xLabel = center + Math.cos(angle) * labelDist;
      const yLabel = center + Math.sin(angle) * labelDist + 4;
      const textAnchor = Math.abs(xLabel - center) < 15 ? "middle" : xLabel > center ? "start" : "end";

      axisLabels += `
        <text x="${xLabel.toFixed(1)}" y="${yLabel.toFixed(1)}" 
              fill="#94a3b8" font-size="10" font-family="JetBrains Mono, monospace" 
              text-anchor="${textAnchor}" font-weight="600" class="radar-label" data-index="${i}">
          ${radarData[i].short} <tspan fill="#38bdf8">${radarData[i].score}%</tspan>
        </text>
      `;
    }

    // Value Polygon points
    const valPoints = [];
    let vertexPoints = "";
    radarData.forEach((d, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const dist = (d.score / 100) * radius;
      const x = center + Math.cos(angle) * dist;
      const y = center + Math.sin(angle) * dist;
      valPoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);

      vertexPoints += `
        <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4.5" 
                fill="#38bdf8" stroke="#090d16" stroke-width="2" 
                class="radar-dot" data-index="${i}" style="cursor: pointer;"/>
      `;
    });

    const svg = `
      <div style="position: relative; width: 100%; display: flex; justify-content: center;">
        <svg viewBox="0 0 ${size} ${size}" width="100%" height="${size}" style="max-width: 360px; overflow: visible;">
          <!-- Rings -->
          ${gridPolygons}
          <!-- Axes -->
          ${axisLines}
          <!-- Filled Polygon Area -->
          <polygon points="${valPoints.join(' ')}" 
                   fill="rgba(56, 189, 248, 0.22)" 
                   stroke="#38bdf8" 
                   stroke-width="2.2" 
                   stroke-linejoin="round"/>
          <!-- Data Points -->
          ${vertexPoints}
          <!-- Labels -->
          ${axisLabels}
        </svg>

        <!-- Tooltip -->
        <div id="radar-tooltip" style="
          position: absolute;
          bottom: -32px;
          left: 50%;
          transform: translateX(-50%);
          background: #18233c;
          border: 1px solid rgba(56, 189, 248, 0.35);
          color: #f1f5f9;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          white-space: nowrap;
          pointer-events: none;
          display: none;
          box-shadow: 0 4px 15px rgba(0,0,0,0.5);
          z-index: 10;
        "></div>
      </div>
    `;

    container.innerHTML = svg;

    // Interactive Hover Listeners
    const tooltip = document.getElementById("radar-tooltip");
    const dots = container.querySelectorAll(".radar-dot, .radar-label");

    dots.forEach((dot) => {
      dot.addEventListener("mouseenter", (e) => {
        const idx = parseInt(e.target.getAttribute("data-index"), 10);
        const item = radarData[idx];
        if (tooltip && item) {
          tooltip.innerHTML = `<strong>${item.domain}</strong>: <span style="color:#38bdf8;">${item.score}/100</span> — <span style="color:#94a3b8;">${item.keyCreds}</span>`;
          tooltip.style.display = "block";
        }
      });

      dot.addEventListener("mouseleave", () => {
        if (tooltip) tooltip.style.display = "none";
      });
    });
  }

  window.addEventListener("DOMContentLoaded", initRadarChart);
})();
