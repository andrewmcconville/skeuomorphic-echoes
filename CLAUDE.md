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
# Deploy: push to main — GitHub Actions builds and deploys to Pages automatically
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
    - data/steps.ts — Step metadata registry
    - data/step-2-*.ts — Per-step structured content (2-1, 2-2, 2-3, 2-4, 2-8)
  - src/lo-fi-wireframe/ — Lo-fi wireframe app (overlay-driven single-canvas, no page navigation)
    - wireframe.css — Shared wireframe styles and transition animations
    - components/ — FloorPlan, RoomOverlay, ArtifactModal, CollectionDrawer, AboutDrawer, GlossaryDrawer
    - composables/useCollection.ts — Reactive collection state shared across overlays
    - data/rooms.ts — 4 rooms × 5 artifacts with content, lookup helpers
  - src/hi-fi-prototype/ — Hi-fi prototype app views and router
    - views/ — HomeView.vue, AboutView.vue, GlossaryView.vue
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
- Section block BEM: `.section` (outer, padding `--space-4xl`), `.section__inner` (max-width 8 grid columns), `.section__header` (heading border), `.section__row` / `.section__label` / `.section__content` (grid layout, label = 1 grid column), `.section__panel` (decorative background, 5 grid columns)
- Section variant modifiers: `--dark`, `--warm`, `--title` — set background/color on `.section`
- Typography tokens at `:root` in typography.css at research scale — no per-app overrides
- `--text-heading-620` (weight 200) used for section headings
- 12-column Swiss grid at 120px per column (1440px total); sidebar = 2 columns, content = 10 columns
- Grid tokens on `.research-app`: `--grid-column: 120px`, `--grid-columns: 12`, `--sidebar-width: calc(2 * var(--grid-column))`
- Research app centered in viewport (`max-width: 1440px; margin: 0 auto`); fixed sidebar and grid overlay use `calc(50% - var(--_app-width) / 2)` to track centered container
- Spacing scale: 2, 4, 8, 16, 24, 30, 40, 60, 120 (`--space-2xs` through `--space-4xl`) — top four tiers align to the 120px grid (¼, ⅓, ½, 1 column)
- Color groups: Emphasis (`--primary-500`, `--secondary-500`), Surface Light (`--surface-light-100` through `400`), Surface Dark (`--surface-dark-600` through `800`), Ink (`--ink-100` through `900`, slight cool bias)
- Typography tokens use numbered convention: hundreds = size tier, tens = weight/10 (e.g., `--text-heading-670` = largest size + Bold 700, `--text-body-440` = mid size + Regular 400)
- Surface tokens for fills/backgrounds only; ink tokens for text, borders, and lines
- Box-shadow colors use `--surface-light-400` (warm-tinted to match the surface they sit on)
- Shared `.card` class in step-shared.css — extend with component-specific classes, don't duplicate card styles
- Stroke tokens: `--stroke-thin` (1px), `--stroke-medium` (2px) — always use vars for borders
- Step 2.8 design system page documents only tokens actively used in styling — add/remove entries as usage changes
- Vocabulary: "Artifact" (detail page), "Artifact Collection" (list page), "Skeuomorph Room" (room landing) — never "Interior Page" or "Room Landing" alone
- Glyph status terms use conservation biology language: thriving, endangered, extinct, adapted
- Glyph status badges use `--primary-500` (thriving/adapted) and `--secondary-500` (endangered) — no dedicated status colors
- Lo-fi wireframe is overlay-driven: floor plan always visible, rooms/artifacts/drawers layer on top as animated overlays — not page navigation
- Lo-fi wireframe routes drive overlay state (`#/room/:id`, `#/room/:id/artifact/:id`, `#/collection`, `#/about`, `#/glossary`)
- Lo-fi wireframe uses hard-offset shadows only (`4px 4px 0 #ccc`) — no blur

## Testing

- Playwright visual regression tests run automatically (PostToolUse hook) after every Write/Edit to files under examples/museum-kiosk/app/src/
- Run manually: `cd examples/museum-kiosk/app && npx playwright test`
- Update baselines after intentional changes: `npx playwright test --update-snapshots`
- Visual baselines stored in examples/museum-kiosk/tests/screenshots/

## Gotchas

- Step view content in src/research/views/ has corresponding markdown in examples/museum-kiosk/docs/ — changes to one must be mirrored in the other
- Assignment briefs are raw Canvas HTML fragments — no full-document wrapper
- AI tools intentionally withheld from student materials before p2.3
- Museum kiosk is portrait touchscreen (1440x2560px) — research app centered via `margin: 0 auto`; prototype viewport scaling via position: fixed + transform-origin
- Playwright preview server uses Vite base path — test URLs use root-relative paths (e.g., `/lo-fi-wireframe.html#/`)
- All files must stay in project directory (Dropbox), never in C:\Users\...\.claude\
- Custom skills in .claude/skills/ load into context but don't register as VS Code slash commands — execute manually or reference with @
