<div align="center">

# Luca's Cave

**Medicine · Bioinformatics · Computational Oncology**

[![Website](https://img.shields.io/badge/🌐_Official_Site-lucacelebrano.me-60d9c5?style=for-the-badge)](https://lucacelebrano.me/)
[![PWA](https://img.shields.io/badge/PWA-Installable-blue?style=for-the-badge)](https://lucacelebrano.me/)
[![GitHub](https://img.shields.io/badge/Source-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/Lukecele/lukecele-research)
[![GitHub stars](https://img.shields.io/github/stars/Lukecele/lukecele-research?style=for-the-badge&logo=github&color=gold)](https://github.com/Lukecele/lukecele-research)

<p>
  <a href="https://lucacelebrano.me/">Explore the research portfolio (lucacelebrano.me) ↗</a>
</p>

</div>

## Overview

A lightweight, fast, and accessible research portfolio for **Luca Celebrano**, Independent computational oncology researcher.

It showcases current scientific monographs and preprints, open-source computational oncology and neuro-biophysics packages (6 official **Bioconda** packages and 9 merged **`nf-core/modules`** PRs), spatial multi-omics tools, interactive Hugging Face WebGL spaces, and prior algorithmic systems projects.

This portfolio is purposefully separated from institutional analysis pipelines and thesis codebases. It serves as a personal index of research and software, not a clinical decision support system.

## Sections

- **01 / Computational Lab & 3D Twin** — Interactive 3D Tumor Sanctuary (Hugging Face WebGL Space), Spatial Oncology 60 FPS Simulator, and the 5-part 4K Biophysical Simulation Series.
- **02 / Current Research** — *Inflammatory Onco-Physics* (*N* = 3,443, 10 cohorts, Preprint v2 `10.21203/rs.3.rs-11695210/v2`, Zenodo `10.5281/zenodo.24393472`), *The Spatial-Genomic Oncology Continuum* (Preprint v2 `10.21203/rs.3.rs-11530312/v2`, Zenodo `10.5281/zenodo.24393478`), *Conditional Sub-Threshold Compartments & Translational Extensions* (Preprint v2 `10.21203/rs.3.rs-11633521/v2`, Zenodo `10.5281/zenodo.24393479`), and *Neuro-Glymphatic Tau Dynamics (NGTD)* (*N* = 2,758, `10.5281/zenodo.24393484`).
- **03 / Research Systems & Software** — Suite of open-source packages and platforms: *Inflammatory Onco-Physics*, *Spatial Continuum Oncology*, *Neuro-Glymphatic Continuum*, *Spatial Continuum Translational*, *InSituGame*, *Spatial Architecture (EGFR)*, *HTBI Bedside Calculator* (Streamlit Cloud), *InSituVision-AI*, *MedTerminal* (3D WebGL), and *CiteGuard MCP* (`citeguard-mcp`, PyPI, Official MCP Registry & Zenodo `10.5281/zenodo.24553130`).
- **04 / Luca's Cave** — Research manifesto, Systems Roots (*Arbitrage Inception*), interactive reproducible research Side Quests, and the 3×3 Quotes & Cinema gallery.
- **05 / Contact & Network** — Direct academic email, GitHub (`@Lukecele`), verified ORCID (`0009-0007-0931-3555`), Hugging Face Lab (`spatial-continuum-lab`), Curriculum Vitae (`cv.pdf`), and open-source portfolio repository.

## Technical Architecture

Built as a high-performance static Progressive Web App (PWA) with a minimal build step:

- Semantic HTML5;
- Custom responsive CSS with design tokens;
- Lightweight vanilla JavaScript bundled with `esbuild`;
- Google Analytics 4 (GA4) and Google Tag Manager (GTM) telemetry with custom click and engagement event streaming;
- Web App Manifest (`manifest.webmanifest`) and offline Service Worker (`sw.js`);
- Comprehensive Open Graph 2.0 and Twitter Card metadata with optimized social preview cards;
- JSON-LD `Person` schema structured data;
- Validated `robots.txt` and XML sitemap;
- High-resolution SVG/PNG app and touch icons;
- Serverless and zero-database architecture.

The interface is engineered for keyboard accessibility, reduced motion preferences (`prefers-reduced-motion`), mobile devices, and high-density desktop displays. Audio is strictly opt-in and never autoplays.

## Local Development

Install dependencies and start the local preview server:

```bash
npm install
npm run build
python3 -m http.server 4173
```

Navigate to <http://localhost:4173>.

## Deployment

The production deployment is hosted statically on GitHub Pages with custom domain and automated Let's Encrypt SSL:

**[lucacelebrano.me](https://lucacelebrano.me/)**

Continuous deployment triggers automatically on push to the `main` branch.

## Project Structure

- [`index.html`](./index.html): Main portfolio interface and structured semantic sections.
- [`styles.css`](./styles.css): Design system, responsive layouts, typography, and dark theme tokens.
- [`app.js`](./app.js): Interactive controls, audio player, telemetry handlers, and terminal logic.
- [`privacy.html`](./privacy.html): GDPR (EU 2016/679) disclosure and medical-scientific disclaimers.
- [`cookie-policy.html`](./cookie-policy.html): ePrivacy and technical storage disclosure.
- [`sitemap.xml`](./sitemap.xml) & [`robots.txt`](./robots.txt): Search engine discovery and indexing maps.

---

## ⭐ Support Open Science

If Luca's Cave, its research systems, or the interactive oncology tools aid your work, please consider **starring this repository on GitHub**!

---

## License

The portfolio source code is open source and distributed under the [MIT License](./LICENSE). Research software, manuscripts, trademarks, and third-party media retain the licenses and terms of their respective repositories and owners.
