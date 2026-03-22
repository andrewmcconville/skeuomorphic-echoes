<script setup lang="ts">
import type { ColorGroup, TypeGroup, ComponentDef } from '../data/types'

const colorGroups: ColorGroup[] = [
  {
    name: 'Primary Surface',
    colors: [
      { name: 'Surface-100', var: '--surface-100', hex: '#F5F0E8', usage: 'Default page ground, card fill, modal backgrounds' },
      { name: 'Surface-200', var: '--surface-200', hex: '#EDE8DC', usage: 'Alternate ground for inset panels, about screen body' },
      { name: 'Surface-300', var: '--surface-300', hex: '#D8D3CA', usage: 'Card backgrounds, column dividers, subtle separation' },
      { name: 'Surface-400', var: '--surface-400', hex: '#C8C2B8', usage: 'Disabled card fills, empty-state placeholders' },
    ],
  },
  {
    name: 'Accent — Warm Overlay',
    colors: [
      { name: 'Amber-500', var: '--amber-500', hex: '#E8A838', usage: 'Primary zone highlight, active tab, selected state' },
      { name: 'Amber-700', var: '--amber-700', hex: '#D4922A', usage: 'Pressed/hover state for amber, progress bar fill' },
      { name: 'Orange-500', var: '--orange-500', hex: '#D46A38', usage: 'Secondary zone highlight, category badges, era tags' },
      { name: 'Orange-700', var: '--orange-700', hex: '#C25A30', usage: 'Pressed/hover for orange, active room indicator' },
    ],
  },
  {
    name: 'Structure',
    colors: [
      { name: 'Ink-900', var: '--ink-900', hex: '#1A1A1A', usage: 'Primary text, borders, card strokes, button outlines' },
      { name: 'Ink-800', var: '--ink-800', hex: '#2A2A2A', usage: 'Secondary headlines, nav icons, pressed button fill' },
      { name: 'Gray-500', var: '--gray-500', hex: '#6B6B6B', usage: 'Secondary text, metadata labels, scale marks' },
      { name: 'Gray-400', var: '--gray-400', hex: '#8A8A8A', usage: 'Tertiary text, placeholder copy, disabled labels' },
    ],
  },
  {
    name: 'Warm Darks',
    colors: [
      { name: 'Warm-Dark', var: '--warm-dark', hex: '#3A3530', usage: 'Editorial dark bands, hero backgrounds, title sections' },
      { name: 'Warm-Mid', var: '--warm-mid', hex: '#4A4540', usage: 'Mid-tone panels, primary content bands, tonal contrast' },
      { name: 'Warm-Border', var: '--warm-border', hex: '#524D47', usage: 'Borders and accents on dark bands, decorative strokes' },
    ],
  },
  {
    name: 'Semantic',
    colors: [
      { name: 'Collected-Green', var: '--collected-green', hex: '#5A7A5A', usage: 'Collected/completed state, progress bar segment' },
      { name: 'Locked-Brown', var: '--locked-brown', hex: '#8A5A3A', usage: 'Locked/unavailable state, restricted overlay' },
    ],
  },
]

const overlays = [
  { name: 'Zone-Overlay-Opacity', value: '50%', usage: 'Floor plan zone fill (amber or orange at half opacity over cream)' },
  { name: 'Shadow-Opacity', value: '12%', usage: 'Specimen card and zone drop shadows' },
]

const typeGroups: TypeGroup[] = [
  {
    name: 'Display — IBM Plex Serif',
    styles: [
      { name: 'Display / Title', token: '--text-display-title', weight: 'Bold', size: '80 / 88', sample: 'Before the Prompt' },
      { name: 'Display / Specimen Name', token: '--text-display-specimen', weight: 'Bold', size: '56 / 64', sample: 'WYSIWYG Editor' },
      { name: 'Display / Heading 1', token: '--text-display-h1', weight: 'Bold', size: '40 / 48', sample: 'The Evolution of Type' },
      { name: 'Display / Heading 2', token: '--text-display-h2', weight: 'Light', size: '32 / 40', sample: 'From Atoms to Pixels' },
    ],
  },
  {
    name: 'Body / UI — IBM Plex Sans',
    styles: [
      { name: 'Body / Default', token: '--text-body-default', weight: 'Regular', size: '24 / 36', sample: 'The quick brown fox jumps over the lazy dog.' },
      { name: 'Body / Small', token: '--text-body-small', weight: 'Regular', size: '20 / 28', sample: 'The quick brown fox jumps over the lazy dog.' },
      { name: 'UI / Button Label', token: '--text-ui-button', weight: 'Medium', size: '20 / 20', sample: 'COLLECT SPECIMEN', extra: 'text-transform: uppercase; letter-spacing: 0.08em' },
      { name: 'UI / Nav Label', token: '--text-ui-nav', weight: 'Medium', size: '16 / 20', sample: 'Floor Plan · Collection · About' },
      { name: 'UI / Caption', token: '--text-ui-caption', weight: 'Regular', size: '16 / 24', sample: 'Image credit: Letterform Archive, 2024' },
    ],
  },
  {
    name: 'Metadata — IBM Plex Mono',
    styles: [
      { name: 'Meta / Era Tag', token: '--text-meta-era', weight: 'Regular', size: '18 / 24', sample: 'MECHANICAL · c. 1450', extra: 'text-transform: uppercase; letter-spacing: 0.1em' },
      { name: 'Meta / Field Label', token: '--text-meta-field-label', weight: 'Regular', size: '14 / 20', sample: 'Medium, Dimensions, Weight' },
      { name: 'Meta / Field Value', token: '--text-meta-field-value', weight: 'Light', size: '14 / 20', sample: 'Cast iron, 280 × 420 mm, 12.4 kg' },
      { name: 'Meta / Progress', token: '--text-meta-progress', weight: 'Regular', size: '16 / 20', sample: '3 / 5 collected' },
    ],
  },
]

const components: ComponentDef[] = [
  {
    name: 'Specimen Card',
    description: 'The primary content container — one per evolutionary stage. Feels like a pinned card on a museum wall.',
    variants: [
      { name: 'Default', spec: 'Cream fill (Surface-100), 2px Ink-900 stroke, 3px offset drop shadow, era tag in upper-left' },
      { name: 'Collected', spec: 'Default + muted green (Collected-Green) check badge in upper-right corner' },
      { name: 'Locked', spec: 'Surface-400 fill, dashed Ink-900 stroke, Locked-Brown lock icon, no tap action' },
    ],
  },
  {
    name: 'Zone Overlay',
    description: 'Tappable regions on the floor plan map, one per exhibit room.',
    variants: [
      { name: 'Unvisited', spec: 'Amber-500 fill at Zone-Overlay-Opacity, 2px Ink-900 outline, drop shadow, room label centered' },
      { name: 'Visited', spec: 'Surface-300 fill at 60% opacity, 1px Gray-500 outline, muted label' },
      { name: 'Active / Pressed', spec: 'Orange-500 fill at 80% opacity, 2px Ink-900 outline, scale 0.97 feedback' },
    ],
  },
  {
    name: 'Button',
    description: 'Dark-stroke bordered, cream-filled controls with caps labels. Minimum 88px touch target.',
    variants: [
      { name: 'Primary Default', spec: 'Surface-100 fill, 2px Ink-900 stroke, label in UI / Button Label style' },
      { name: 'Primary Hover', spec: 'Ink-800 fill, Surface-100 text (inverted)' },
      { name: 'Primary Disabled', spec: 'Surface-400 fill, Gray-400 stroke and text, no tap action' },
      { name: 'Secondary Default', spec: 'No fill (transparent), 1px Gray-500 stroke, Gray-500 label' },
      { name: 'Secondary Hover', spec: 'Surface-300 fill, Ink-900 stroke and label' },
    ],
  },
  {
    name: 'Header',
    description: 'Persistent top navigation bar — minimal chrome so the specimen content stays in focus.',
    variants: [
      { name: 'Main Header', spec: 'Back arrow + exhibit title + floor map icon + collection counter; dotted leader lines' },
      { name: 'Slim Header', spec: 'Back/close icon only; used on interior specimen pages' },
    ],
  },
  {
    name: 'Era Tag',
    description: 'Inline label identifying a specimen\'s historical period.',
    variants: [
      { name: 'Default', spec: 'Surface-300 pill, Meta / Era Tag text style, e.g. "Mechanical · c. 1450"' },
      { name: 'Active', spec: 'Orange-500 pill, Surface-100 text, used when viewing that era' },
    ],
  },
  {
    name: 'Toast / Confirmation',
    description: 'Triggered when a visitor taps "Collect" on a specimen page.',
    variants: [
      { name: 'Collectible Confirmation', spec: 'Surface-100 fill, Ink-900 stroke, Collected-Green check icon, auto-dismiss 3s' },
    ],
  },
]
</script>

<template>
  <article class="ds-page">
    <header class="hero">
      <div class="hero-badge">
        <span class="badge-label">2.8</span>
      </div>
      <h1>Design System</h1>
      <p class="hero-lead">
        Color, typography, and component specifications for the museum kiosk
        prototype. All values map directly to Figma variables, text styles,
        and components.
      </p>
      <div class="hero-accent"></div>
    </header>


    <!-- ==================== COLORS ==================== -->
    <section class="category">
      <div class="section-row">
        <div class="section-label">
          <h2 class="section-heading">Colors</h2>
        </div>
      </div>

      <div
        v-for="group in colorGroups"
        :key="group.name"
        class="section-row subsection"
      >
        <div class="section-label">
          <h3 class="subsection-heading">{{ group.name }}</h3>
        </div>
        <div class="section-content">
          <div class="color-grid">
            <div v-for="c in group.colors" :key="c.var" class="color-swatch">
              <div class="swatch" :style="{ background: `var(${c.var})` }" />
              <div class="swatch-info">
                <span class="color-name">{{ c.name }}</span>
                <code class="color-hex">{{ c.hex }}</code>
                <span class="color-usage">{{ c.usage }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-row subsection">
        <div class="section-label">
          <h3 class="subsection-heading">Overlay Opacity</h3>
        </div>
        <div class="section-content">
          <div class="specs-grid">
            <div v-for="o in overlays" :key="o.name" class="spec">
              <span class="spec-label">{{ o.name }}</span>
              <span class="spec-dots"></span>
              <span class="spec-value">{{ o.value }}</span>
            </div>
          </div>
          <div class="overlay-usage">
            <p v-for="o in overlays" :key="o.name">
              <strong>{{ o.value }}</strong> — {{ o.usage }}
            </p>
          </div>
        </div>
      </div>
    </section>


    <!-- ==================== TYPOGRAPHY ==================== -->
    <section class="category">
      <div class="section-row">
        <div class="section-label">
          <h2 class="section-heading">Typography</h2>
        </div>
      </div>

      <div
        v-for="group in typeGroups"
        :key="group.name"
        class="section-row subsection"
      >
        <div class="section-label">
          <h3 class="subsection-heading">{{ group.name }}</h3>
        </div>
        <div class="section-content">
          <div class="type-samples">
            <div v-for="s in group.styles" :key="s.token" class="type-sample">
              <p
                class="type-preview"
                :style="{ font: `var(${s.token})`, ...(s.extra ? Object.fromEntries(s.extra.split('; ').map(p => { const [k, v] = p.split(': '); return [k.replace(/-([a-z])/g, (_, c) => c.toUpperCase()), v] })) : {}) }"
              >
                {{ s.sample }}
              </p>
              <div class="type-meta">
                <span class="type-name">{{ s.name }}</span>
                <div class="type-specs">
                  <span class="type-spec">{{ s.weight }}</span>
                  <span class="type-spec">{{ s.size }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ==================== COMPONENTS ==================== -->
    <section class="category">
      <div class="section-row">
        <div class="section-label">
          <h2 class="section-heading">Components</h2>
        </div>
      </div>

      <div
        v-for="comp in components"
        :key="comp.name"
        class="section-row subsection"
      >
        <div class="section-label">
          <h3 class="subsection-heading">{{ comp.name }}</h3>
        </div>
        <div class="section-content">
          <p class="comp-desc">{{ comp.description }}</p>
          <div class="variant-list">
            <div v-for="v in comp.variants" :key="v.name" class="variant">
              <span class="variant-name">{{ v.name }}</span>
              <span class="variant-spec">{{ v.spec }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
/* ---- Category ---- */
.category {
  display: flex;
  flex-direction: column;
  gap: 0;
}


.section-content {
  gap: var(--space-lg);
  margin-left: 180px;
}

/* ---- Subsections (keep grid) ---- */
.subsection {
  padding: 0;
  margin-bottom: var(--space-2xl);
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: var(--space-2xl);
}

.subsection .section-label {
  grid-column: 1;
  border-bottom: none;
  margin-bottom: 0;
}

.subsection .section-label::after {
  display: none;
}

.subsection .section-content {
  grid-column: 2;
  margin-left: 0;
}

.subsection-heading {
  font: var(--text-meta-field-label);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--gray-400);
  line-height: 1.4;
  margin: 0;
  font-weight: 400;
}

/* ---- Color grid ---- */
.color-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
}

.color-swatch {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.swatch {
  width: 100%;
  aspect-ratio: 1.2;
  border: var(--stroke-thin) solid var(--surface-300);
}

.swatch-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
}

.color-name {
  font: var(--text-ui-nav);
  font-size: 13px;
}

.color-hex {
  font: var(--text-meta-field-value);
  color: var(--gray-500);
}

.color-usage {
  font: var(--text-meta-field-value);
  font-size: 11px;
  color: var(--gray-400);
  line-height: 1.4;
}

.overlay-usage p {
  font: var(--text-body-small);
  color: var(--gray-500);
  margin-bottom: var(--space-xs);
}

.overlay-usage strong {
  color: var(--ink-900);
}

/* ---- Type samples ---- */
.type-samples {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.type-sample {
  padding: var(--space-lg) 0;
  border-bottom: var(--stroke-thin) solid var(--surface-300);
}

.type-sample:first-child {
  padding-top: 0;
}

.type-meta {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-top: var(--space-sm);
}

.type-name {
  font: var(--text-meta-field-label);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--gray-500);
}

.type-specs {
  display: flex;
  gap: var(--space-md);
}

.type-spec {
  font: var(--text-meta-field-value);
  color: var(--gray-400);
}

.type-preview {
  color: var(--ink-900);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ---- Components ---- */
.comp-desc {
  font: var(--text-body-default);
  font-size: 16px;
}

.variant-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.variant {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
  padding: var(--space-md) 0;
  border-bottom: var(--stroke-thin) solid var(--surface-300);
}

.variant:first-child {
  padding-top: 0;
}

.variant-name {
  font: var(--text-ui-nav);
  font-size: 13px;
  font-weight: 500;
}

.variant-spec {
  font: var(--text-body-small);
  font-size: 13px;
  color: var(--gray-500);
}
</style>
