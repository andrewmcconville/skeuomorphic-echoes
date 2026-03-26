# ART 424 – UX/UI Design for Apps

Teaching materials repo: assignment briefs + exemplar prototypes for "Skeuomorphic Echoes: From Atoms to Pixels."

## Commands

```bash
cd examples/museum-kiosk/app
npm install         # first-time setup
npm run dev         # Vite dev server — open research.html, lo-fi-wireframe.html, or hi-fi-prototype.html
npm run build       # TypeScript check + production build
npm run preview     # Preview production build
npx playwright test # visual regression tests (Playwright)
```

## Architecture

- docs/briefs/ — Canvas LMS HTML fragments (p2 through p2.9; no doctype/body, paste directly into Canvas raw editor)
- examples/museum-kiosk/app/ — Vue 3 + TypeScript + Vite multi-page app
  - index.html — Landing page linking to research, lo-fi wireframe, + hi-fi prototype
  - research.html — Process book (step views: /step/2.1, /step/2.2, etc.)
  - lo-fi-wireframe.html — Lo-fi wireframe prototype
  - hi-fi-prototype.html — Hi-fi product prototype
  - src/shared/ — Design tokens, shared styles, shared data, shared components
    - tokens/colors.css — OKLCH palette custom properties
    - tokens/typography.css — IBM Plex font stacks + scale
    - tokens/spacing.css — Spacing scale
    - styles/reset.css — Base reset
    - components/GlossaryContent.vue — Shared glossary renderer (compact/full via prop)
    - components/PlaceholderPage.vue — Shared placeholder page for stub views
    - data/glossary.ts — Glossary of typographic icons (13 glyph entries, shared by all apps)
    - composables/useGlossary.ts — Glossary search/filter composable
    - createApp.ts — Shared app bootstrap (mounts Vue + router + global styles)
  - src/research/ — Research app views and router
    - step-shared.css — Shared step-page styles (hero, section block, cards, prose, tags)
    - components/ — SectionBlock.vue, SubsectionRow.vue, HeroHeader.vue, SpecsGrid.vue
    - data/types.ts — Barrel re-export of research TypeScript types from types/ subdirectory (common, step-2-3, step-2-4, step-2-8)
  - src/lo-fi-wireframe/ — Lo-fi wireframe app views and router
  - src/hi-fi-prototype/ — Hi-fi prototype app views and router
  - tests/ — Playwright test specs (visual-regression.spec.ts)
- examples/museum-kiosk/docs/ — Reference markdown documents (glossary.md, design-direction-brief.md, artifact-metadata-fields.md, 2.1–2.8 step content)
- examples/museum-kiosk/tests/ — Playwright test screenshots (visual baselines)

## Conventions

- Hash routing (createWebHashHistory) — required for GitHub Pages
- Path aliases: @shared, @research, @lo-fi-wireframe, @hi-fi-prototype
- OKLCH color space for all color values
- IBM Plex family: Serif (heading), Sans (body), Mono (metadata)
- Use "Step" not "Assignment" in exemplar apps (e.g., "Step 2.1")
- Implemented step views: 2.1, 2.2, 2.3, 2.4, 2.8 — remaining steps use generic StepView placeholder
- Non-step pages (Glossary) go under "Reference" nav section in research sidebar
- BEM naming strictly — no descendant selectors, no raw tag selectors
- CSS custom properties for modifier-affects-children theming (e.g., `specs-grid--light` sets `--_spec-label-color`)
- All pixel values must align to design token scale; snap 1–2px drift to nearest token
- Font-size overrides after `font` shorthand (e.g., `font: var(--text-body-350); font-size: 14px;`) are acceptable when the override is on the type scale (12, 13, 14, 18, 22, 28, 36, 48, 72) — this covers cases where a different token's weight/family is needed at a size not captured by a single token
- Shared step styles in step-shared.css; duplicated rules across views get extracted there
- Section block BEM: `.section` (outer), `.section__inner` (max-width constraint), `.section__header` (heading border), `.section__row` / `.section__label` / `.section__content` (grid layout), `.section__panel` (decorative background)
- Section variant modifiers: `--dark`, `--warm`, `--title` — set background/color on `.section`
- Typography tokens at `:root` in typography.css at research scale — no per-app overrides
- `--text-display-610` (weight 100) used for section headings
- Spacing scale: 2, 4, 8, 16, 24, 32, 48, 64 (`--space-2xs` through `--space-3xl`)
- Color groups: Emphasis (`--primary-500`, `--secondary-500`), Surface Light (`--surface-light-100` through `400`), Surface Dark (`--surface-dark-600` through `800`), Ink (`--ink-100` through `900`, slight cool bias)
- Typography tokens use numbered convention: hundreds = size tier, tens = weight/10 (e.g., `--text-display-670` = largest size + Bold 700, `--text-body-440` = mid size + Regular 400)
- Surface tokens for fills/backgrounds only; ink tokens for text, borders, and lines
- Box-shadow colors use `--surface-light-400` (warm-tinted to match the surface they sit on)
- Shared `.card` class in step-shared.css — extend with component-specific classes, don't duplicate card styles
- Stroke tokens: `--stroke-thin` (1px), `--stroke-medium` (2px) — always use vars for borders
- Step 2.8 design system page documents only tokens actively used in styling — add/remove entries as usage changes
- Vocabulary: "Artifact" (detail page), "Artifact Collection" (list page), "Skeuomorph Room" (room landing) — never "Interior Page" or "Room Landing" alone
- Glyph status terms use conservation biology language: thriving, endangered, extinct, adapted
- Glyph status badges use `--primary-500` (thriving/adapted) and `--secondary-500` (endangered) — no dedicated status colors

## Testing

- Playwright visual regression tests run automatically (PostToolUse hook) after every Write/Edit to files under examples/museum-kiosk/app/src/
- Run manually: `cd examples/museum-kiosk/app && npx playwright test`
- Update baselines after intentional changes: `npx playwright test --update-snapshots`
- Visual baselines stored in examples/museum-kiosk/tests/screenshots/

## Gotchas

- Step view content in src/research/views/ has corresponding markdown in examples/museum-kiosk/docs/ — changes to one must be mirrored in the other
- Assignment briefs are raw Canvas HTML fragments — no full-document wrapper
- AI tools intentionally withheld from student materials before p2.3
- Museum kiosk is portrait touchscreen (1440x2560px) — prototype viewport scaling via position: fixed + transform-origin
- Playwright preview server uses base path `/skeuomorphic-echoes/` — new test URLs must include it
- All files must stay in project directory (Dropbox), never in C:\Users\...\.claude\
- Custom skills in .claude/skills/ load into context but don't register as VS Code slash commands — execute manually or reference with @
