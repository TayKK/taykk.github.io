/**
 * BinImg2Vec Interactive Simulator
 * Demonstrates the core pipeline from the published research:
 * "BinImg2Vec: Augmenting Malware Binary Image Classification with Data2Vec" (ICAIC 2022)
 * Authors: Kai Keng TAY, Lee Joon Sern, Chua Zong Fu
 */

(function () {
  const samples = {
    wannacry: {
      name: "Ransomware.WannaCry.exe",
      type: "PE32 Executable (x86)",
      size: "3.48 MB",
      hexSnippet: "4D 5A 90 00 03 00 00 00 04 00 00 00 FF FF 00 00 B8 00 00 00 00 00 00 00 40 00 00 00 00 00 00 00 50 45 00 00 4C 01 04 00 E8 69 47 59 00 00 00 00",
      family: "Ransomware / WannaCryptor",
      confidence: "99.1%",
      entropyProfile: "High (.text encrypted payload, entropy: 7.84/8.0)",
      patternType: "ransomware"
    },
    emotet: {
      name: "Trojan.Emotet.dll",
      type: "PE32+ DLL (x64)",
      size: "1.12 MB",
      hexSnippet: "4D 5A 90 00 03 00 00 00 04 00 00 00 FF FF 00 00 80 00 00 00 00 00 00 00 40 00 00 00 00 00 00 00 50 45 00 00 64 86 05 00 B1 2A 89 5F 00 00 00 00",
      family: "Banking Trojan / Botnet",
      confidence: "98.4%",
      entropyProfile: "Medium-High (Polymorphic unpacker, entropy: 7.21/8.0)",
      patternType: "trojan"
    },
    agenttesla: {
      name: "Spyware.AgentTesla.bin",
      type: "MSIL .NET Executable",
      size: "780 KB",
      hexSnippet: "4D 5A 90 00 03 00 00 00 04 00 00 00 FF FF 00 00 B8 00 00 00 00 00 00 00 40 00 00 00 00 00 00 00 50 45 00 00 4C 01 03 00 2A 9C 3E 62 00 00 00 00",
      family: "InfoStealer / Spyware",
      confidence: "97.8%",
      entropyProfile: "Structured (Obfuscated .NET metadata, entropy: 6.95/8.0)",
      patternType: "spyware"
    }
  };

  let currentSampleKey = "wannacry";

  function initSimulator() {
    const btnWannacry = document.getElementById("sample-wannacry");
    const btnEmotet = document.getElementById("sample-emotet");
    const btnTesla = document.getElementById("sample-agenttesla");

    if (btnWannacry) btnWannacry.addEventListener("click", () => switchSample("wannacry"));
    if (btnEmotet) btnEmotet.addEventListener("click", () => switchSample("emotet"));
    if (btnTesla) btnTesla.addEventListener("click", () => switchSample("agenttesla"));

    renderCurrentState();
  }

  function switchSample(key) {
    if (!samples[key]) return;
    currentSampleKey = key;

    document.querySelectorAll(".sandbox-btn").forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.getElementById(`sample-${key}`);
    if (activeBtn) activeBtn.classList.add("active");

    renderCurrentState();
  }

  function renderCurrentState() {
    const s = samples[currentSampleKey];

    // Update Hex View
    const hexView = document.getElementById("raw-hex-display");
    if (hexView) {
      hexView.innerHTML = `
        <span style="color:#00f0ff;">[0x00000000]</span> ${s.hexSnippet}
        <br><span style="color:#64748b;">[0x00000030]</span> 00 00 00 00 00 00 00 00 00 00 00 00 E0 00 00 00 0B 01 02 19 00 10 00 00
      `;
    }

    // Render Canvas representation of Binary to 2D Grayscale Matrix
    const canvas = document.getElementById("bin-matrix-canvas");
    if (canvas && canvas.getContext) {
      drawGrayscaleMatrix(canvas, s.patternType);
    }

    // Update Output
    const outputElem = document.getElementById("model-output-display");
    if (outputElem) {
      outputElem.innerHTML = `
        <div style="display:flex; justify-content:space-between; margin-bottom:0.3rem;">
          <span style="color:#94a3b8;">Target Binary:</span>
          <span style="color:#fff; font-weight:600;">${s.name} (${s.size})</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:0.3rem;">
          <span style="color:#94a3b8;">Classified Family:</span>
          <span style="color:#00f0ff; font-weight:700;">${s.family}</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:0.3rem;">
          <span style="color:#94a3b8;">Data2Vec Latent Score:</span>
          <span style="color:#10b981; font-weight:700;">${s.confidence} Match</span>
        </div>
        <div style="display:flex; justify-content:space-between;">
          <span style="color:#94a3b8;">Entropy Profile:</span>
          <span style="color:#f59e0b;">${s.entropyProfile}</span>
        </div>
      `;
    }
  }

  function drawGrayscaleMatrix(canvas, patternType) {
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const imgData = ctx.createImageData(width, height);
    const data = imgData.data;

    let seed = patternType === "ransomware" ? 42 : patternType === "trojan" ? 137 : 89;

    function pseudoRandom() {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    }

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const index = (y * width + x) * 4;
        let intensity = 0;

        // Simulate PE sections:
        // Top 10%: Headers (repetitive structures with low entropy null bytes)
        if (y < height * 0.15) {
          intensity = pseudoRandom() > 0.7 ? 180 : (x % 16 === 0 ? 90 : 20);
        } 
        // Middle 60%: Code / Text section (dense instructions or encrypted payload)
        else if (y < height * 0.75) {
          if (patternType === "ransomware") {
            // High entropy noise
            intensity = Math.floor(pseudoRandom() * 255);
          } else if (patternType === "trojan") {
            // Structured code blocks with repetitive padding
            intensity = Math.floor((Math.sin(x / 5) * Math.cos(y / 4) + 1) * 110 + pseudoRandom() * 35);
          } else {
            // MSIL metadata bands
            intensity = (Math.floor(x / 8) % 2 === 0) ? Math.floor(pseudoRandom() * 200) : 40;
          }
        } 
        // Bottom 25%: Resources / Data / Relocations
        else {
          intensity = (y % 4 === 0) ? 140 : 15;
        }

        data[index] = intensity;     // Red
        data[index + 1] = intensity; // Green
        data[index + 2] = intensity; // Blue
        data[index + 3] = 255;       // Alpha
      }
    }

    ctx.putImageData(imgData, 0, 0);
  }

  // Expose to window once DOM is ready
  window.addEventListener("DOMContentLoaded", initSimulator);
})();

