# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static website for A.I.C. Madeira (Associação Internacional da Caridade), a charity in Funchal, Madeira. All content is in European Portuguese (pt_PT). Plain HTML/CSS/JS — no npm, no frameworks. The only tooling is `build.py` (python3 stdlib), which assembles pages from partials.

## Commands

```
./serve.sh          # build + serve dist/ at http://localhost:8000
./serve.sh 3000     # custom port
python3 build.py    # rebuild dist/ only
```

There are no tests or linters. After editing `src/`, rerun the build (or restart `serve.sh`) — `dist/` is generated output and gitignored; never edit it.

## Architecture

```
src/pages/       the five pages (full HTML documents with real <head>)
src/partials/    header.html, footer.html — shared markup
src/styles.css   the single stylesheet (design tokens + all classes)
src/site.js      all behavior: mobile menu, photo fallback, contact form
src/assets/      logo, favicon, photos
documentos/      published PDFs (repo root — see Documents below)
build.py         expands include markers, generates the docs listing, copies into dist/
```

- **Includes:** pages contain `<!-- include: header.html -->` / `<!-- include: footer.html -->` markers; `build.py` replaces them with the partial's contents. Pure concatenation — no variables or templating.
- **Generated listing:** `documentos.html` contains a `<!-- docs-list -->` marker that `build.py` replaces with the document list built from the `documentos/` folder. It is the only generated markup in the project.
- **Active nav link:** each page's `<body>` has `data-page="<key>"`; nav links in the header partial have `data-nav="<key>"`. A CSS attribute-selector rule in `styles.css` highlights the matching link. The header partial is identical on every page.
- **site.js** has two self-guarding modules (each no-ops if its element is absent): the mobile menu toggle (`.nav-toggle` → `.nav-open` class; the ≤1023px/≥1024px breakpoint lives in CSS) and the Formspree contact form (`#contact-form`, form id `mjgqnbja`), plus a fallback that hides broken `.photo-frame` images. No page depends on JavaScript for its content.
- **Relative URLs only** (no leading `/`) — the site must work both at `https://zyxplay.github.io/aic-madeira-site/` and at a custom domain.

### Adding a page

1. Create `src/pages/<name>.html` (copy an existing page's head/skeleton), set `data-page="<key>"` on `<body>`.
2. Add the link with `data-nav="<key>"` to **both** nav lists in `src/partials/header.html` and to `src/partials/footer.html`.
3. Add the `body[data-page="<key>"] [data-nav="<key>"]` selector to the active-link rule in `styles.css`.

## Documents page

`documentos.html` is static HTML. At build time `build.py` reads the repo-root `documentos/` folder, keeps the PDFs, and replaces the page's `<!-- docs-list -->` marker with the grouped listing (see `render_documentos()`). No JavaScript and no network request are involved, so the list cannot fail to load.

Grouping is by filename keyword, first match wins: `estatuto` → Estatutos, `relat`/`contas` → Relatórios de Contas (sorted newest-first), everything else → Outros documentos. Display name is the filename with `.pdf` stripped and `-`/`_` turned into spaces; the file size is read from disk. Download links are relative (`documentos/<file>.pdf`), percent-encoded, served by the deployed site itself.

**Publishing a document = commit a PDF to `documentos/` and push.** The existing deploy workflow rebuilds on every push to `main`, so the listing and the file always ship together — no separate step.

Names are normalised to Unicode NFC for display and sorting (macOS writes accented filenames decomposed, which otherwise sorts wrongly), while the href keeps the on-disk form so the path matches.

## Deploy

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) runs `build.py` and deploys `dist/` to GitHub Pages. One-time setup: repo Settings → Pages → Source: "GitHub Actions".

## Design system

Design tokens are CSS custom properties at the top of `styles.css` — use them instead of raw hex values:

- Backgrounds: `--bg` (cream), `--surface` (white), dark band uses `--ink`
- Text: `--ink`, `--body`, `--muted`, `--muted-2`; on dark: `--on-dark`, `--on-dark-muted`
- Accent: `--terracotta` (hover `--terracotta-dark`), `--accent-warm`, active-nav bg `--active-bg`
- Borders: `--border`, `--border-strong`
- Fonts: Lora (`--font-serif`, headings) + Karla (`--font-sans`, body), loaded from Google Fonts
- Layout: `.container` (1120px), `clamp()` paddings, `repeat(auto-fit, minmax(min(100%, Npx), 1fr))` grids, pill buttons

Key business facts used across pages: NIF 511072031 (IRS consignation), founded 1617, in Madeira since 1876, seat at Hospício Princesa D. Maria Amélia, Funchal.
