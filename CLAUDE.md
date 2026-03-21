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
  - research.html — Process book (step views: /step/2.1, /step/2.2, etc.)
  - prototype.html — Hi-fi product prototype
  - src/shared/ — Design tokens, shared styles
    - tokens/colors.css — OKLCH palette custom properties
    - tokens/typography.css — IBM Plex font stacks + scale
    - tokens/spacing.css — Spacing scale
    - styles/reset.css — Base reset
  - src/research/ — Research app views and router
  - src/prototype/ — Prototype app views and router
  - tests/ — Playwright test specs
- examples/museum-kiosk/tests/ — Playwright test screenshots (visual baselines)

## Conventions

- Hash routing (createWebHashHistory) — required for GitHub Pages
- Path aliases: @shared, @research, @prototype
- OKLCH color space for all color values
- IBM Plex family: Serif (display), Sans (body/UI), Mono (metadata/labels)
- Use "Step" not "Assignment" in exemplar apps (e.g., "Step 2.1")
- Noun-based titles without scope qualifiers

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
