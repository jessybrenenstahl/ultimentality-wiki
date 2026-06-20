# Ultimentality — Wiki

A fully cross-linked wiki of the **Ultimentality** framework (Two-Axis Edition): one page per term, topic, and component, faithful to the source treatise, with every load-bearing claim carrying its dual **epistemic (E)** and **alethic (A)** marks.

**Live site:** https://jessybrenenstahl.github.io/ultimentality-wiki/

## What's here
- **96 term pages + a home index** across all 9 Parts (epistemic apparatus, Axiom & VLS, the Directional Core, the Two Forces, SPLCW, the Theodicytes, the Telos, Provenance, the Two-Axis Ledger).
- **~1,300 internal cross-links**, computed **backlinks** on every page, **client-side search**, responsive layout, light/dark, and MathJax.
- Provenance flags on each page: **canonical** (benchmark-fixed), **treatise-side** (the writer's scaffolding), or **seed**.

## Structure
- `index.html`, `*.html` — the generated static site (served by GitHub Pages).
- `style.css`, `app.js`, `search.json` — site assets and search index.
- `vault/` — the source Markdown vault (Obsidian-compatible `[[wikilinks]]`); open this folder in Obsidian/Foam/Dendron to browse or edit the source.

## Rebuild
The site is generated from `vault/*.md` by a standalone Python builder (`pandoc` for Markdown→HTML, bespoke template for nav/search/backlinks). Re-run the builder and push to update.
