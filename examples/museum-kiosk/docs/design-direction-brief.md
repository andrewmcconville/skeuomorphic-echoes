# Set in Stone — Design Direction Brief

## Museum Kiosk · Portrait Touchscreen · 1440 × 2560 px

---

## Design Position

**Museum exhibit catalog meets technical illustration meets editorial print design.**

The kiosk presents skeuomorphic artifacts the way a natural history museum presents specimens: centered on a neutral ground, surrounded by dense metadata, framed with bold strokes. Every object is treated with the reverence and rigor of a catalog entry — era, medium, mechanism, provenance — as if the user is leafing through the definitive field guide to interface archaeology.

---

## Reference Hierarchy

### Direct (literal visual language)
- **Zoning map** — transparent yellow/orange overlays with bold dark outlines and drop shadows on a desaturated base; floor map zones as tappable, lifted shapes
- **Assemble with Care (ustwo)** — warm cream ground, heavy dark-stroke bordered panels, asymmetric sparse layout, specimen-card framing, contemplative pace
- **Zerotype cassette catalog** — hero object as technical illustration, bilingual/multi-register labeling, model numbers and scale indicators, dense colophon/credit blocks, editorial display type

### Secondary (spirit, not literal)
- **Seqtrak** — grid density as design intent, orange/dark duality, material honesty
- **Dither/ASCII** — colophon block structure, rendering-style-as-era-signal (potential for evolutionary stages)
- **Architectural section** — cross-cut revelation, scale bars, figure-ground contrast

### Principle (extracted from teardown)
- **Exploded view as narrative** — "we opened this up so you can see how it works"

---

## Color Palette

### Primary surface
- **Cream / warm off-white** — the gallery wall / paper ground (approx. #F5F0E8 to #EDE8DC range)
- All content sits on this; it is never pure white

### Accent: warm overlay spectrum
- **Amber / yellow** — primary zone highlight, active states, selected exhibit (approx. #E8A838 to #D4922A)
- **Orange / coral** — secondary zone highlight, secondary category or completion state (approx. #D46A38 to #C25A30)
- Both used at reduced opacity (40–60%) over the cream ground for zone overlays on the floor map
- Both used at full opacity for tags, badges, labels, and active UI elements

### Structure
- **Near-black** — strokes, outlines, specimen borders, primary text (#1A1A1A to #2A2A2A)
- **Mid-gray** — secondary text, metadata labels, scale marks (#6B6B6B to #8A8A8A)
- **Light warm gray** — card backgrounds, inset panels, subtle separation (#D8D3CA to #C8C2B8)

### Semantic (minimal use)
- **Muted green** — collected / completed state
- **Muted red-brown** — locked / unavailable

---

## Typography

IBM Plex family across three optical roles. Cohesive, systematic, institutional authority — feels like a well-funded museum's in-house identity. Free, open-source, available in Figma.

| Role | Typeface | Weight | Use |
|---|---|---|---|
| Display | IBM Plex Serif | Bold / Light | Specimen titles, page headings, evolutionary stage names |
| Body / UI | IBM Plex Sans | Regular / Medium | Navigation, descriptions, buttons, body copy |
| Metadata | IBM Plex Mono | Regular / Light | Catalog fields, era tags, dimensions, coordinates, colophon |

---

## Component Style Rules

### Specimen card (evolutionary stage)
- Cream or light warm gray fill
- 2–3px near-black stroke, slight offset drop shadow (2–4px, 10–15% opacity)
- Hero object illustration centered, generous padding
- Metadata fields arranged in a dense grid below or beside the illustration
- Feels like a pinned card on a museum wall

### Zone overlay (floor map)
- Semi-transparent amber or orange fill (40–60% opacity)
- 2px near-black outline
- Subtle drop shadow to lift off the base map
- Tap target minimum 88px for kiosk touch

### Buttons / interactive elements
- Dark stroke border, cream fill, label in caps or small caps (tracking +50–100)
- Active/pressed: fill inverts to near-black with cream text
- Generous hit area for coarse touch input

### Navigation
- Minimal chrome — back arrow, floor map icon, collection counter
- Persistent but quiet; the specimen content is the focus
- Dotted or dashed leader lines connecting icon to label (per Monument Valley settings screen)

### Metadata labels
- Mono typeface, small size (12–14px equivalent at kiosk scale)
- Uppercase or small caps with wide tracking
- Arranged in key: value pairs, left-aligned in columns
- Separated by thin rules or generous vertical rhythm

---

## Dual Register

The mood board revealed two complementary tones. Rather than choosing one, use both mapped to context:

| Register | When | Palette | Type weight | Density |
|---|---|---|---|---|
| **Warm / gallery** | Floor map, home screen, overview, collection tracker | Cream + amber/orange overlays | Lighter weights, more whitespace | Sparse, inviting |
| **Cool / clinical** | Specimen sheet, evolutionary stage detail, metadata deep-dive | Cream + near-black + mid-gray dominant | Heavier weights, tighter spacing | Dense, authoritative |

The transition from warm to cool signals the user going deeper — from browsing the gallery to studying the artifact.

---

## Summary Line

A museum specimen catalog rendered as a touchscreen kiosk: warm cream surfaces, amber-to-orange zone overlays with bold dark strokes, technically dense metadata grids, and objects presented with the reverence of a field guide and the rigor of a technical manual.
