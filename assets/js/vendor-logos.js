/** Locally stored issuer marks; provenance in assets/img/issuers/README.md.
 * Plain text abbreviations are used where sourced artwork is unavailable.
 * These identify issuers and are not individual certification badges.
 */
window.VENDOR_MARKS = {
  google: { file: "googlecloud.svg" },
  googlecourse: { file: "google.svg" },
  microsoft: { file: "microsoft.svg" },
  linuxfoundation: { file: "linuxfoundation.svg" },
  cncf: { file: "cncf.svg" },
  isc2: { file: "isc2.svg" },
  cisco: { file: "cisco.svg" },
  coursera: { file: "coursera.svg" },
  aws: { text: "AWS" },
  giac: { text: "GIAC" },
  apisec: { text: "APIsec" },
  gaicc: { text: "GAICC" },
  redteam: { text: "RTL" },
  proofpoint: { text: "PP" },
  opswat: { text: "OPSWAT" },
  ntuc: { text: "NTUC" },
  basistech: { text: "Basis" }
};

window.getVendorLogo = function (key) {
  const mark = window.VENDOR_MARKS[key];
  if (mark?.file) return `<img class="issuer-logo" src="assets/img/issuers/${mark.file}" alt="" width="32" height="32" loading="lazy">`;
  return `<span class="issuer-monogram" aria-hidden="true">${mark?.text || "CERT"}</span>`;
};
