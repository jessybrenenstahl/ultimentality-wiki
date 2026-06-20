# Ultimentality — Wiki

A fully cross-linked encyclopedia of the **Ultimentality** framework (Two-Axis Edition): one standalone page per term, topic, and component, faithful to the source treatise, with every load-bearing claim carrying its dual **epistemic (E)** and **alethic (A)** marks in a "Formal status" box.

**Live site:** https://jessybrenenstahl.github.io/ultimentality-wiki/

## What's here
- **96 standalone encyclopedia entries + a home index** across all 9 Parts (epistemic apparatus, Axiom & VLS, the Directional Core, the Two Forces, SPLCW, the Theodicytes, the Telos, Provenance, the Two-Axis Ledger).
- Each entry: plain-language lead, structured sections, **inline cross-links woven into the prose**, a "common misreadings" section, and a demoted formal-status box. Illustrative analogies/outside-thinker comparisons are explicitly marked as illustration.
- **Computed backlinks** ("Linked from"), **client-side search**, responsive light/dark layout, MathJax.

## Structure
- `index.html`, `*.html` — generated static site (served by GitHub Pages).
- `style.css`, `app.js`, `search.json` — assets + search index.
- `vault/` — the source Markdown vault (Obsidian-compatible `[[wikilinks]]`).

## Rebuild
Generated from `vault/*.md` by `build_wiki_site.py` (pandoc + a bespoke template for nav/search/backlinks). Re-run it and `git push` to update; GitHub Pages redeploys automatically.
