<script setup lang="ts">
import type { LabelValue, SkeuomorphMapping, InspirationSite } from '../data/types'

const evolutionStages = [
  'Hand-written manuscripts',
  'Movable type',
  'Linotype machines',
  'X-Acto knife paste-ups',
  'Adobe InDesign',
  'Google Docs',
]

const secondarySkeuomorphs: SkeuomorphMapping[] = [
  {
    name: 'Camera shutter',
    maps: 'Shutter sound effect',
    description:
      'Phones play a mechanical click when taking a photo, and even when capturing a screenshot, where no camera is involved at all.',
  },
  {
    name: 'Envelope',
    maps: 'Email icon',
    description:
      'The sealed paper envelope persists as the symbol for electronic messages decades after physical mail stopped being the default.',
  },
  {
    name: 'Hanging up the phone',
    maps: 'End Call button',
    description:
      'Replacing a handset on its cradle became a red button tap, preserving the gesture of a rotary-era device most users have never touched.',
  },
]

const inspirationSites: InspirationSite[] = [
  {
    name: 'Klim Type Foundry',
    url: 'https://klim.co.nz/',
    note: 'Swiss-inspired grids, interactive type testers, and an energy that makes design history feel like a living workshop.',
  },
  {
    name: 'Histography.io',
    url: 'https://histography.io/',
    note: 'Progressive-disclosure timeline that zooms from a full historical sweep down to individual events.',
  },
  {
    name: 'Letterform Archive',
    url: 'https://oa.letterformarchive.org/',
    note: 'Browsable, filterable collection of 3,500+ digitized design artifacts with search by decade, country, and format.',
  },
]

const formFactors: LabelValue[] = [
  { label: 'Viewport', value: '1440 × 2560 px' },
  { label: 'Orientation', value: 'Portrait' },
  { label: 'Format', value: 'Web app' },
  { label: 'Input', value: 'Coarse (touch)' },
  { label: 'Context', value: 'Wall-mounted kiosk' },
  { label: 'Location', value: '4 exhibit room entrances' },
]
</script>

<template>
  <article class="step-page">
    <!-- ===== HERO — warm dark band ===== -->
    <header class="hero">
      <div class="hero-badge">
        <span class="badge-number">2.1</span>
      </div>
      <h1>Skeuomorph<br />Selection</h1>
      <p class="hero-lead">
        Identifying the physical artifacts that persist as metaphors in digital
        interfaces — and choosing which evolution to trace.
      </p>
      <div class="hero-accent"></div>
    </header>

    <!-- ===== GOALS ===== -->
    <section class="section-row">
      <div class="section-label">
        <h2 class="section-heading">Goals</h2>
      </div>
      <div class="section-content">
        <div class="prose-block">
          <h3>What do you hope to make?</h3>
          <p>
            A museum kiosk interface that serves as both wayfinding guide and
            collectible-driven exploration tool, greeting visitors at each
            exhibit entrance and inviting them to collect evolutionary stages as
            they explore.
          </p>
        </div>
        <div class="prose-block">
          <h3>Why does this project matter to you?</h3>
          <p>
            AI prompting is replacing the toolbars, rulers, and drop-down menus
            of traditional editors. If natural-language interaction removes the
            need for visual metaphors altogether, skeuomorphs may become
            artifacts themselves.
          </p>
        </div>
      </div>
    </section>

    <!-- ===== PRIMARY — warm dark band ===== -->
    <section class="band band--dark band--no-panel">
      <div class="band-inner section-row">
        <div class="section-label">
          <h2 class="section-heading section-heading--light">Primary</h2>
        </div>
        <div class="section-content">
          <h3 class="primary-title">The WYSIWYG<br />Page Editor</h3>
          <div class="evolution-timeline">
            <div
              v-for="(stage, i) in evolutionStages"
              :key="stage"
              class="evo-stage"
            >
              <span class="evo-marker">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="evo-name">{{ stage }}</span>
            </div>
          </div>
          <p class="rationale rationale--light">
            The most popular and taken-for-granted skeuomorph in daily digital
            life — virtual pages mimic paper, clipboards reference paste-up
            boards, and font menus appear as mini type specimen books.
          </p>
        </div>
      </div>
    </section>

    <!-- ===== SECONDARY ===== -->
    <section class="section-row">
      <div class="section-label">
        <h2 class="section-heading">Secondary</h2>
      </div>
      <div class="section-content">
        <div class="secondary-grid">
          <div
            v-for="(s, i) in secondarySkeuomorphs"
            :key="s.name"
            class="secondary-card"
          >
            <span class="card-number">{{ i + 1 }}</span>
            <div class="card-body">
              <div class="card-mapping">
                <span class="mapping-from">{{ s.name }}</span>
                <span class="mapping-arrow">→</span>
                <span class="mapping-to">{{ s.maps }}</span>
              </div>
              <p>{{ s.description }}</p>
            </div>
          </div>
        </div>
        <p class="rationale">
          Each preserves a physical object — a shutter, an envelope, a handset —
          as a sound, icon, or gesture in software that no longer needs the
          original thing to function.
        </p>
      </div>
    </section>


    <!-- ===== FORMAT ===== -->
    <section class="section-row">
      <div class="section-label">
        <h2 class="section-heading">Format</h2>
      </div>
      <div class="section-content">
        <div class="prose-block">
          <h3>UX Pattern</h3>
          <p>Museum kiosk with wayfinding and collecting</p>
        </div>
        <div class="prose-block">
          <h3>Media</h3>
          <p>Typographic primary, supported by historical photography, diagrams, and floor-plan maps</p>
        </div>
        <div class="prose-block">
          <h3>Why this format?</h3>
          <p>
            Each kiosk orients visitors to the room they're entering while
            offering collectible evolutionary stages, turning a passive gallery
            walk into an active scavenger hunt through design history.
          </p>
        </div>
      </div>
    </section>


    <!-- ===== SOURCES ===== -->
    <section class="section-row">
      <div class="section-label">
        <h2 class="section-heading">Sources</h2>
      </div>
      <div class="section-content">
        <div class="prose-block">
          <h3>Informational</h3>
          <p>
            Bringhurst's <em>The Elements of Typographic Style</em>, the
            Letterform Archive's online collection, and the Computer History
            Museum's desktop publishing archives.
          </p>
        </div>
        <div class="prose-block">
          <h3>Visual</h3>
          <p>
            The Letterform Archive's digitized type specimens, the Computer
            History Museum's early DTP screenshots, and archive.org for
            scanned specimen books and software documentation.
          </p>
        </div>
        <p class="rationale">
          Each provides verifiable primary-source material. Bringhurst is the
          canonical typographic reference, the Letterform Archive holds over
          100,000 original design objects, and the Computer History Museum
          documented the DTP revolution firsthand.
        </p>
      </div>
    </section>

    <!-- ===== INSPIRATION — warm band ===== -->
    <section class="band band--warm">
      <div class="band-inner section-row">
        <div class="section-label">
          <h2 class="section-heading">Inspiration</h2>
        </div>
        <div class="section-content">
          <div class="inspiration-grid">
            <a
              v-for="site in inspirationSites"
              :key="site.url"
              :href="site.url"
              target="_blank"
              rel="noopener"
              class="inspiration-card"
            >
              <span class="inspiration-name">{{ site.name }}</span>
              <span class="inspiration-arrow">↗</span>
              <p class="inspiration-note">{{ site.note }}</p>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== FORM FACTOR ===== -->
    <section class="section-row">
      <div class="section-label">
        <h2 class="section-heading">Form Factor</h2>
      </div>
      <div class="section-content">
        <div class="specs-grid">
          <div v-for="f in formFactors" :key="f.label" class="spec">
            <span class="spec-label">{{ f.label }}</span>
            <span class="spec-dots"></span>
            <span class="spec-value">{{ f.value }}</span>
          </div>
        </div>
        <div class="prose-group">
          <div class="prose-block">
            <h3>Why portrait?</h3>
            <p>
              Portrait mirrors the vertical proportions of a physical page, the
              central artifact of the WYSIWYG skeuomorph. The fixed resolution
              allows precise positioning like a typeset museum placard.
            </p>
          </div>
          <div class="prose-block">
            <h3>Why a web app?</h3>
            <p>
              The kiosk needs room-specific content, collectible tracking, touch
              navigation without browser chrome, and inactivity resets — all
              requiring app-level state management.
            </p>
          </div>
          <div class="prose-block">
            <h3>Why coarse input?</h3>
            <p>
              Museum visitors expect to walk up and interact immediately with
              generously sized touch targets, echoing the tactile history of
              compositors physically handling type.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== TITLE — warm dark band ===== -->
    <section class="band band--dark band--title">
      <div class="band-inner section-row">
        <div class="section-label">
          <h2 class="section-heading section-heading--light">Title</h2>
        </div>
        <div class="section-content">
          <div class="title-lockup">
            <span class="title-circle"></span>
            <em>Before the Prompt:<br />The Rise and Fall of Digital Icons</em>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
/* ---- Band variant: title ---- */
.band--title {
  background: var(--warm-dark);
  position: relative;
  overflow: hidden;
}

/* ---- Section row ---- */
.section-row {
  position: relative;
}

/* Subtle background panel behind content column */
.section-row::before {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 60%;
  background: var(--surface-200);
  opacity: var(--opacity-panel);
  z-index: 0;
}

.section-row > * {
  position: relative;
  z-index: 1;
}

.band--no-panel .section-row::before,
.band--title .section-row::before {
  display: none;
}

/* ---- Prose ---- */
.prose-block h3 {
  font: var(--text-meta-era);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--gray-500);
  margin-bottom: var(--space-sm);
}

.prose-block p {
  font: var(--text-body-default);
}

.prose-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.rationale {
  font: var(--text-body-small);
  color: var(--gray-500);
  border-left: var(--stroke-medium) solid var(--surface-300);
  padding-left: var(--space-md);
}

.rationale--light {
  color: var(--surface-300);
  border-left-color: var(--warm-border);
}

/* ---- Primary — warm dark band content ---- */
.primary-title {
  font: var(--text-display-title);
  color: var(--surface-100);
  margin: 0;
}

.evolution-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  border-left: var(--stroke-medium) solid var(--orange-500);
  margin-left: var(--space-sm);
  padding: var(--space-sm) 0;
  background: linear-gradient(
    to right,
    oklch(0 0 0 / 0.12) 0px,
    transparent 40px
  );
}

.evo-stage {
  display: flex;
  align-items: baseline;
  gap: var(--space-md);
  padding: var(--space-sm) 0 var(--space-sm) var(--space-lg);
  position: relative;
}

.evo-stage::before {
  content: '';
  position: absolute;
  left: -5px;
  top: 50%;
  width: 8px;
  height: 8px;
  background: var(--orange-500);
  border-radius: 50%;
  transform: translateY(-50%);
}

.evo-marker {
  font: var(--text-meta-field-value);
  color: var(--surface-400);
  min-width: 20px;
}

.evo-name {
  font: var(--text-body-default);
  color: var(--surface-100);
}

/* ---- Secondary ---- */
.secondary-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.secondary-card {
  display: flex;
  gap: var(--space-md);
  padding: var(--space-lg);
  border: var(--stroke-medium) solid var(--ink-900);
  background: var(--surface-100);
  box-shadow: var(--shadow-card) var(--surface-300);
}

.card-number {
  font: var(--text-display-h1);
  font-size: 32px;
  line-height: 1;
  color: var(--surface-400);
  min-width: 28px;
}

.card-body {
  flex: 1;
}

.card-mapping {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  margin-bottom: var(--space-sm);
  font: var(--text-ui-nav);
  font-size: 14px;
}

.mapping-from {
  font-weight: 500;
  color: var(--ink-900);
}

.mapping-arrow {
  color: var(--orange-500);
}

.mapping-to {
  font-weight: 500;
  color: var(--ink-900);
}

.card-body p {
  font: var(--text-body-small);
  color: var(--gray-500);
}

/* ---- Data rows ---- */
.data-row {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.datum {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}


/* ---- Inspiration cards (on warm band) ---- */
.inspiration-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}

.inspiration-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  padding: var(--space-lg);
  border: var(--stroke-medium) solid var(--ink-900);
  background: var(--surface-100);
  position: relative;
  box-shadow: var(--shadow-card-sm) var(--surface-300);
  transition: transform 0.15s, box-shadow 0.15s;
}

.inspiration-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-card-hover) var(--surface-400);
}

.inspiration-name {
  font: var(--text-ui-nav);
  font-size: 15px;
  font-weight: 500;
}

.inspiration-arrow {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  font-size: 14px;
  color: var(--gray-400);
  transition: color 0.15s;
}

.inspiration-card:hover .inspiration-arrow {
  color: var(--orange-500);
}

.inspiration-note {
  font: var(--text-body-small);
  font-size: 13px;
  color: var(--gray-500);
}

/* ---- Title lockup — warm dark band ---- */
.title-lockup {
  font: var(--text-display-h1);
  font-size: 36px;
  line-height: 44px;
  color: var(--surface-100);
  position: relative;
  padding-left: var(--space-2xl);
}

.title-circle {
  position: absolute;
  left: -60px;
  top: 50%;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--orange-500);
  opacity: var(--opacity-decorative);
  transform: translateY(-50%);
}

.band--title::after {
  content: '';
  position: absolute;
  right: 40px;
  bottom: -30px;
  width: 80px;
  height: 80px;
  border: var(--stroke-medium) solid var(--warm-border);
  opacity: var(--opacity-ghost);
}
</style>
