<script setup lang="ts">
const secondarySkeuomorphs = [
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

const inspirationSites = [
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

const formFactors = [
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
    <!-- Hero header -->
    <header class="hero">
      <div class="hero-meta">
        <span class="step-number">2.1</span>
        <span class="step-label">Process Step</span>
      </div>
      <h1>Skeuomorph<br />Selection</h1>
      <p class="hero-lead">
        Identifying the physical artifacts that persist as metaphors in digital
        interfaces — and choosing which evolution to trace.
      </p>
    </header>

    <div class="divider"></div>

    <!-- Goals -->
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

    <div class="divider"></div>

    <!-- Primary Skeuomorph -->
    <section class="section-row">
      <div class="section-label">
        <h2 class="section-heading">Primary</h2>
      </div>
      <div class="section-content">
        <div class="primary-card">
          <h3 class="primary-title">The WYSIWYG Page Editor</h3>
          <p class="evolution-chain">
            Hand-written manuscripts
            <span class="arrow">→</span> Movable type
            <span class="arrow">→</span> Linotype machines
            <span class="arrow">→</span> X-Acto knife paste-ups
            <span class="arrow">→</span> Adobe InDesign
            <span class="arrow">→</span> Google Docs
          </p>
          <p class="rationale">
            The most popular and taken-for-granted skeuomorph in daily digital
            life — virtual pages mimic paper, clipboards reference paste-up
            boards, and font menus appear as mini type specimen books.
          </p>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- Secondary Skeuomorphs -->
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

    <div class="divider"></div>

    <!-- UX Pattern & Media -->
    <section class="section-row">
      <div class="section-label">
        <h2 class="section-heading">Format</h2>
      </div>
      <div class="section-content">
        <div class="data-row">
          <div class="datum">
            <span class="datum-label">UX Pattern</span>
            <span class="datum-value">Museum kiosk with wayfinding and collecting</span>
          </div>
          <div class="datum">
            <span class="datum-label">Media</span>
            <span class="datum-value">Typographic primary, supported by historical photography, diagrams, and floor-plan maps</span>
          </div>
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

    <div class="divider"></div>

    <!-- Research Sources -->
    <section class="section-row">
      <div class="section-label">
        <h2 class="section-heading">Sources</h2>
      </div>
      <div class="section-content">
        <div class="data-row">
          <div class="datum">
            <span class="datum-label">Informational</span>
            <span class="datum-value">
              Bringhurst's <em>The Elements of Typographic Style</em>, the
              Letterform Archive's online collection, and the Computer History
              Museum's desktop publishing archives.
            </span>
          </div>
          <div class="datum">
            <span class="datum-label">Visual</span>
            <span class="datum-value">
              The Letterform Archive's digitized type specimens, the Computer
              History Museum's early DTP screenshots, and archive.org for
              scanned specimen books and software documentation.
            </span>
          </div>
        </div>
        <p class="rationale">
          Each provides verifiable primary-source material. Bringhurst is the
          canonical typographic reference, the Letterform Archive holds over
          100,000 original design objects, and the Computer History Museum
          documented the DTP revolution firsthand.
        </p>
      </div>
    </section>

    <div class="divider"></div>

    <!-- Inspiration -->
    <section class="section-row">
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
    </section>

    <div class="divider"></div>

    <!-- Form Factor -->
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

    <div class="divider"></div>

    <!-- Project Title -->
    <section class="section-row">
      <div class="section-label">
        <h2 class="section-heading">Title</h2>
      </div>
      <div class="section-content">
        <div class="title-card">
          <em>Before the Prompt:<br />The Rise and Fall of Digital Icons</em>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
.step-page {
  max-width: 820px;
}

/* ---- Hero ---- */
.hero {
  margin-bottom: var(--space-2xl);
}

.hero-meta {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}

.step-number {
  font: var(--text-display-title);
  font-size: 56px;
  line-height: 1;
  color: var(--ink-900);
}

.step-label {
  font: var(--text-meta-field-label);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--gray-400);
  align-self: flex-end;
  margin-bottom: 8px;
}

h1 {
  font: var(--text-display-title);
  margin-bottom: var(--space-md);
}

.hero-lead {
  font: var(--text-body-default);
  color: var(--gray-500);
  max-width: 560px;
}

/* ---- Divider ---- */
.divider {
  height: var(--stroke-medium);
  background: var(--ink-900);
  margin: var(--space-2xl) 0;
}

/* ---- Section row: label + content ---- */
.section-row {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: var(--space-2xl);
}

.section-label {
  padding-top: 2px;
}

.section-heading {
  font: var(--text-display-h2);
  font-size: 18px;
  line-height: 24px;
  color: var(--ink-800);
  margin: 0;
}

.section-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
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

/* ---- Primary card ---- */
.primary-card {
  padding: var(--space-xl);
  background: var(--surface-200);
  border: var(--stroke-medium) solid var(--ink-900);
}

.primary-title {
  font: var(--text-display-h1);
  margin-bottom: var(--space-lg);
}

.evolution-chain {
  font: var(--text-body-default);
  font-size: 15px;
  line-height: 28px;
  margin-bottom: var(--space-lg);
}

.arrow {
  color: var(--orange-500);
  padding: 0 2px;
}

.primary-card .rationale {
  border-left: none;
  padding-left: 0;
}

/* ---- Secondary grid ---- */
.secondary-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.secondary-card {
  display: flex;
  gap: var(--space-md);
  padding: var(--space-lg);
  border: var(--stroke-thin) solid var(--surface-300);
  background: var(--surface-100);
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
  gap: 4px;
}

.datum-label {
  font: var(--text-meta-field-label);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--gray-400);
}

.datum-value {
  font: var(--text-body-default);
  font-size: 16px;
}

/* ---- Specs grid (dotted leader lines) ---- */
.specs-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.spec {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
}

.spec-label {
  font: var(--text-meta-field-label);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--gray-500);
  white-space: nowrap;
}

.spec-dots {
  flex: 1;
  border-bottom: 1px dotted var(--surface-400);
  margin-bottom: 3px;
}

.spec-value {
  font: var(--text-body-small);
  font-size: 15px;
  white-space: nowrap;
}

/* ---- Inspiration cards ---- */
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
  transition: background 0.15s;
}

.inspiration-card:hover {
  background: var(--surface-200);
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

/* ---- Title card ---- */
.title-card {
  font: var(--text-display-h1);
  font-size: 32px;
  line-height: 40px;
  padding: var(--space-2xl) var(--space-xl);
  border: var(--stroke-medium) solid var(--ink-900);
  background: var(--ink-900);
  color: var(--surface-100);
}
</style>
