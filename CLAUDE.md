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
  - src/research/ — Research app views and router
    - step-shared.css — Shared step-page styles (hero, sections, bands, badges)
    - data/types.ts — Research-specific TypeScript types (LabelValue, ScreenEntry, RoomEntry, CatalogGroup)
  - src/prototype/ — Prototype app views and router
  - tests/ — Playwright test specs (visual-regression.spec.ts)
- examples/museum-kiosk/docs/ — Reference markdown documents (glossary.md, design-direction-brief.md, specimen-metadata-fields.md, 2.1–2.8 step content)
- examples/museum-kiosk/tests/ — Playwright test screenshots (visual baselines)

## Conventions

- Hash routing (createWebHashHistory) — required for GitHub Pages
- Path aliases: @shared, @research, @prototype
- OKLCH color space for all color values
- IBM Plex family: Serif (display), Sans (body/UI), Mono (metadata/labels)
- Use "Step" not "Assignment" in exemplar apps (e.g., "Step 2.1")
- Section headings use amber-500 accent with dotted amber borders
- Implemented step views: 2.1, 2.2, 2.3, 2.8 — remaining steps use generic StepView placeholder
- Non-step pages (Glossary) go under "Reference" nav section in research sidebar
- BEM naming strictly — no descendant selectors, no raw tag selectors
- CSS custom properties for modifier-affects-children patterns (not descendant selectors)
- All pixel values must align to design token scale; snap 1–2px drift to nearest token
- Shared step styles in step-shared.css; duplicated rules across views get extracted there
- Spacing scale: 2, 4, 8, 16, 24, 32, 48, 64, 96 (`--space-2xs` through `--space-4xl`)
- Surface scale: 5-step (`--surface-100` lightest through `--surface-500`), consistent hue/chroma, lightness only varies
- Shared `.card` class in step-shared.css — extend with component-specific classes, don't duplicate card styles
- Stroke tokens: `--stroke-thin` (1px), `--stroke-medium` (2px) — always use vars for borders
- Vocabulary: "Artifact" (detail page), "Artifact Collection" (list page), "Skeuomorph Room" (room landing) — never "Interior Page" or "Room Landing" alone

## Testing

- Playwright visual regression tests run automatically (PostToolUse hook) after every Write/Edit to files under examples/museum-kiosk/app/src/
- Run manually: `cd examples/museum-kiosk/app && npx playwright test`
- Update baselines after intentional changes: `npx playwright test --update-snapshots`
- Visual baselines stored in examples/museum-kiosk/tests/screenshots/

## Gotchas

- Step view content in src/research/views/ has corresponding markdown in examples/museum-kiosk/docs/ — changes to one must be mirrored in the other
- Assignment briefs are raw Canvas HTML fragments — no full-document wrapper
- AI tools intentionally withheld from student materials before p2.3
- Museum kiosk is portrait touchscreen (1440x2560px) — viewport scaling via position: fixed + transform-origin
- Playwright preview server uses base path `/skeuomorphic-echoes/` — new test URLs must include it
- All files must stay in project directory (Dropbox), never in C:\Users\...\.claude\
