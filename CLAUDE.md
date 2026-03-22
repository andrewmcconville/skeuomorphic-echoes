# ART 424 – UX/UI Design for Apps

Teaching materials repo: assignment briefs + exemplar prototypes for "Skeuomorphic Echoes: From Atoms to Pixels."

## Commands

```bash
cd examples/museum-kiosk/app
npm install         # first-time setup
npm run dev         # Vite dev server — open research.html or prototype.html
npm run build       # TypeScript check + production build
npm run preview     # Preview production build
npx playwright test # visual regression tests (Playwright)
```

## Architecture

- docs/briefs/ — Canvas LMS HTML fragments (no doctype/body, paste directly into Canvas raw editor)
- examples/museum-kiosk/app/ — Vue 3 + TypeScript + Vite multi-page app
  - index.html — Landing page linking to research + prototype
  - research.html — Process book (step views: /step/2.1, /step/2.2, etc.)
  - prototype.html — Hi-fi product prototype
  - src/shared/ — Design tokens, shared styles, shared data
    - tokens/colors.css — OKLCH palette custom properties
    - tokens/typography.css — IBM Plex font stacks + scale
    - tokens/spacing.css — Spacing scale
    - styles/reset.css — Base reset
    - data/glossary.ts — Glossary of typographic ghosts (13 glyph entries, shared by both apps)
    - data/types.ts — Shared TypeScript types (LabelValue, SkeuomorphMapping, InspirationSite)
  - src/research/ — Research app views and router
    - step-shared.css — Shared step-page styles (hero, sections, bands, badges)
  - src/prototype/ — Prototype app views and router
  - tests/ — Playwright test specs
- examples/museum-kiosk/docs/ — Reference markdown documents (glossary.md)
- examples/museum-kiosk/tests/ — Playwright test screenshots (visual baselines)

## Conventions

- Hash routing (createWebHashHistory) — required for GitHub Pages
- Path aliases: @shared, @research, @prototype
- OKLCH color space for all color values
- IBM Plex family: Serif (display), Sans (body/UI), Mono (metadata/labels)
- Use "Step" not "Assignment" in exemplar apps (e.g., "Step 2.1")
- Noun-based titles without scope qualifiers
- Unified `.badge-label` class for hero badges (not separate number/glyph classes)
- Section headings use amber-500 accent with dotted amber borders
- Hero badges: fixed width/height, `align-items: flex-end`, `font-weight: 100`
- Implemented step views: 2.1, 2.2, 2.3, 2.8 — remaining steps use generic StepView placeholder
- Non-step pages (Glossary) go under "Reference" nav section in research sidebar
- BEM naming strictly — no descendant selectors, no raw tag selectors
- CSS custom properties for modifier-affects-children patterns (not descendant selectors)
- All pixel values must align to design token scale; snap 1–2px drift to nearest token
- Shared step styles in step-shared.css; duplicated rules across views get extracted there
- Spacing scale: 2, 4, 8, 16, 24, 32, 48, 64 (`--space-2xs` through `--space-3xl`)
- Research app overrides typography to smaller scale (see App.vue `:root` block)
- Stroke tokens: `--stroke-thin` (1px), `--stroke-medium` (2px) — always use vars for borders

## Testing

- Playwright visual regression tests run automatically (PostToolUse hook) after every Write/Edit to files under examples/museum-kiosk/app/src/
- Run manually: `cd examples/museum-kiosk/app && npx playwright test`
- Update baselines after intentional changes: `npx playwright test --update-snapshots`
- Visual baselines stored in examples/museum-kiosk/tests/screenshots/

## Gotchas

- Assignment briefs are raw Canvas HTML fragments — no full-document wrapper
- AI tools intentionally withheld from student materials before p2.3
- Museum kiosk is portrait touchscreen (1440x2560px) — viewport scaling via position: fixed + transform-origin
- All files must stay in project directory (Dropbox), never in C:\Users\...\.claude\
