<div align="center">

# Luca's Cave

**Medicine · Bioinformatics · Computational Oncology**

[![Website](https://img.shields.io/badge/🌐_Official_Site-lucacelebrano.me-60d9c5?style=for-the-badge)](https://lucacelebrano.me/)
[![PWA](https://img.shields.io/badge/PWA-Installable-blue?style=for-the-badge)](https://lucacelebrano.me/)
[![GitHub](https://img.shields.io/badge/Source-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/Lukecele/Lukecele.github.io)
[![GitHub stars](https://img.shields.io/github/stars/Lukecele/Lukecele.github.io?style=for-the-badge&logo=github&color=gold)](https://github.com/Lukecele/Lukecele.github.io)

<p>
  <a href="https://lucacelebrano.me/">Explore the research portfolio (lucacelebrano.me) ↗</a>
</p>

</div>

## Overview

A lightweight, fast, and accessible research portfolio for **Luca Celebrano**, Independent computational oncology researcher.

It showcases current scientific manuscripts, open-source computational oncology systems, spatial transcriptomics and spatial omics tools, interactive Hugging Face spaces, and prior algorithmic systems projects.

This portfolio is purposefully separated from institutional analysis pipelines and thesis codebases. It serves as a personal index of research and software, not a clinical decision support system.

## Sections

- **Research & Publications** — Peer-reviewed manuscripts (including the submission for *Scientific Reports* and translational preprints on *Zenodo*).
- **Research Systems** — HTBI Bedside Calculator, Spatial Continuum Oncology, InSituGame, InSituVision-AI, Spatial Oncology Master, and related analytical frameworks.
- **Interactive Lab** — HTBI Streamlit Bedside Explorer, 2D/3D digital twins, biophysical reaction-diffusion simulators, and public benchmark datasets hosted on Hugging Face.
- **Clinical Training** — MedTerminal Cardio-Thoracic emergency medicine interactive trainer.
- **Previous Systems Work** — Arbitrage Inception and open-source decentralized systems.
- **Side Quests** — Interactive easter eggs, cinematic literary and anime quotes (Tolkien, Naruto, Disney, Harry Potter, Dragon Ball), and ambient soundscape in Luca's Cave.

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
