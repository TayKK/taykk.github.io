# TAY Kai Keng (KK) — Cybersecurity Portfolio

A personal portfolio of a Singapore-based cybersecurity practitioner at Ensign InfoSecurity, with experience in digital forensics, incident response, and threat hunting, and a research interest in AI for cybersecurity.

- [Portfolio](https://taykk.github.io/)
- [Printable profile](https://taykk.github.io/profile.html)
- [LinkedIn](https://sg.linkedin.com/in/tay-kai-keng)
- [Public credentials on Credly](https://www.credly.com/users/tay-kai-keng/badges/credly)
- [BinImg2Vec publication](https://doi.org/10.48550/arXiv.2209.00782)

## Features

- Cybersecurity experience, education, and BinImg2Vec research.
- A complete credential catalogue, filterable by type, domain, and validity.
- An A4 print view containing current certifications and assessments, independently of catalogue filters. Course completions remain in the website catalogue.
- An interactive map of 12 cybersecurity domains, with supporting evidence and development areas.
- A research demonstration using synthetic byte patterns and preset outputs.
- An optional terminal interface, keyboard navigation, and responsive layouts.

The domain map describes documented experience using a four-step scale: not yet documented, study and training, applied work or research, and professional practice. It is a self-assessment rather than a proficiency benchmark. Credentials are not assigned a shared difficulty ranking across issuers.

## Local development

This is a static HTML, CSS, and JavaScript site with no application dependencies or build step.

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Check JavaScript syntax:

```sh
for file in assets/js/*.js; do node --check "$file" || exit; done
```

The browser smoke tests require Node.js, Playwright, Chromium, and a running local server:

```sh
node tests/smoke.cjs
```

Set `PORTFOLIO_TEST_URL` or `CHROMIUM_PATH` for a different server address or Chromium installation. Tests cover credential filters, expiry handling, badge loading, domain navigation, research examples, mobile layouts, and the print view.

## Content and assets

- `assets/js/portfolio-data.js` contains profile, experience, research, credential, and domain data shared by the site and print view.
- `index.html` contains the introduction, navigation, and page metadata.
- `profile.html`, `assets/js/profile.js`, and `assets/css/profile.css` provide the printable profile.
- Badge artwork and public verification sources are documented in [assets/img/badges/README.md](assets/img/badges/README.md) and [sources.json](assets/img/badges/sources.json).
- Issuer artwork attribution is documented in [assets/img/issuers/README.md](assets/img/issuers/README.md).

Credential validity is calculated using the Singapore calendar date. Exact expiry dates remain current through the listed day; month-only records use the end of that month. The linked issuer records are the reference for renewals and changes. Course completions are labelled separately from current certifications.

When updating content, keep the introduction and metadata consistent with the shared profile data. Preserve official credential titles and the attribution accompanying third-party artwork.
