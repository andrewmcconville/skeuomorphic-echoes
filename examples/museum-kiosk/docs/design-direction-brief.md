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

Four color groups, all defined in OKLCH. Surfaces handle backgrounds and fills; ink handles text, borders, and lines; emphasis colors provide accent and hierarchy.

### Emphasis — warm overlay spectrum
- **Primary (amber)** — section headings, hero badges, status badges, zone highlights (approx. #E8A838)
- **Secondary (orange)** — glossary accents, timeline markers, hover states, era tags (approx. #D46A38)
- Both used at reduced opacity (40–60%) over the cream ground for zone overlays on the floor map
- Both used at full opacity for tags, badges, labels, and active UI elements

### Surface Light — warm cream grounds
- **100–300** — card fills, page ground, inset panels (approx. #FAF7F2 to #EDE8DC range)
- **400** — tag fills (approx. #D8D3CA)
- All content sits on these; it is never pure white

### Surface Dark — editorial bands
- **600–800** — dark section bands, hero backgrounds (approx. #524D47 to #3A3530)
- Slightly warmer hue and higher chroma than surface light — creates a rich, editorial depth

### Ink — slight cool bias
- **900–800** — primary text, card strokes, active nav backgrounds (approx. #1A1A1A to #2A2A2A)
- **500–400** — secondary/tertiary text, metadata labels, subsection headings (approx. #6B6B6B to #8A8A8A)
- **300–200** — subtle borders, dividers, dotted leaders (approx. #C8C2B8 to #D8D3CA)
- **100** — light text on dark bands, hero titles, active nav text (approx. #F0EDE8)
- Cool chroma offsets the warm surfaces — warm/cool tension throughout

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
- Cream or light warm gray fill (Surface-Light-100)
- 2px Ink-900 stroke, slight offset drop shadow (Ink-200 shadow color)
- Hero object illustration centered, generous padding
- Metadata fields arranged in a dense grid below or beside the illustration
- Feels like a pinned card on a museum wall

### Zone overlay (floor map)
- Semi-transparent primary or secondary fill (40–60% opacity)
- 2px Ink-900 outline
- Subtle drop shadow to lift off the base map
- Tap target minimum 88px for kiosk touch

### Buttons / interactive elements
- Ink-900 stroke border, Surface-Light-100 fill, label in caps or small caps (tracking +50–100)
- Active/pressed: fill inverts to Ink-800 with Ink-100 text
- Generous hit area for coarse touch input

### Navigation
- Minimal chrome — back arrow, floor map icon, collection counter
- Persistent but quiet; the specimen content is the focus
- Dotted or dashed leader lines (Ink-300) connecting icon to label

### Metadata labels
- Mono typeface, small size (12–14px equivalent at kiosk scale)
- Uppercase or small caps with wide tracking
- Arranged in key: value pairs, left-aligned in columns
- Separated by thin rules (Ink-200) or generous vertical rhythm

---

## Summary Line

A museum specimen catalog rendered as a touchscreen kiosk: warm cream surfaces, amber-to-orange emphasis overlays with cool ink strokes, technically dense metadata grids, and objects presented with the reverence of a field guide and the rigor of a technical manual.
