<script setup lang="ts">
import type { LabelValue, ScreenEntry, RoomEntry, CatalogGroup } from '../data/types'

const screens: ScreenEntry[] = [
  { name: 'Floor Plan Map (Home)', type: 'Home screen', notes: 'Entry point; always accessible via nav' },
  { name: 'Visited Rooms', type: 'List screen', notes: 'Accessible from home via nav icon' },
  { name: 'About', type: 'Info screen', notes: 'Accessible from home via nav icon' },
  { name: 'Glossary', type: 'Reference screen', notes: 'Accessible from home via nav icon' },
  { name: 'Room: WYSIWYG', type: 'Room landing', notes: 'Tap zone on floor plan map' },
  { name: 'Room: Camera Shutter', type: 'Room landing', notes: 'Tap zone on floor plan map' },
  { name: 'Room: Envelope', type: 'Room landing', notes: 'Tap zone on floor plan map' },
  { name: 'Room: Hanging Up', type: 'Room landing', notes: 'Tap zone on floor plan map' },
  { name: 'Evolutionary stages (×20)', type: 'Interior pages', notes: 'Tap from room landing or previous/next' },
]

const modals: ScreenEntry[] = [
  { name: 'Navigation drawer', type: 'Slide-out menu', notes: 'Hamburger/menu icon tap' },
  { name: 'Collectible confirmation', type: 'Popup/toast', notes: 'Collecting an evolutionary stage' },
  { name: 'Specimen detail expand', type: 'Modal overlay', notes: 'Tap "show more" on metadata' },
  { name: 'Inactivity reset prompt', type: 'Dialog', notes: 'Kiosk idle timeout' },
]

const rooms: RoomEntry[] = [
  {
    name: 'WYSIWYG',
    stages: ['Google Docs', 'Adobe InDesign', 'Printing Press', 'Linotype Machine', 'Scrolls'],
  },
  {
    name: 'Camera Shutter',
    stages: ['Screenshot', 'Smartphone', 'Digital Camera', 'Film SLR', 'Box Camera'],
  },
  {
    name: 'Envelope',
    stages: ['Chat/DM', 'Email Client', 'Telegram', 'Paper Envelope', 'Wax-Sealed Letter'],
  },
  {
    name: 'Hanging Up',
    stages: ['Smartphone End Call', 'Flip Phone', 'Touch-Tone Phone', 'Rotary Phone', 'Candlestick Phone'],
  },
]

const homeContent: LabelValue[] = [
  { label: 'Title', value: '"Before the Prompt" — anchors exhibit identity' },
  { label: 'Subtitle', value: 'One-line hook explaining the exhibit concept' },
  { label: 'Floor plan', value: 'Top-down layout of the four rooms; primary navigation surface' },
  { label: 'Room zones (×4)', value: 'Tappable regions with labels; 88px min touch targets' },
  { label: 'Zone states', value: 'Visited vs. unvisited differentiation' },
  { label: 'Visited icon', value: 'Shows stages collected out of total' },
  { label: 'About icon', value: 'Links to credits, sources, and project info' },
  { label: 'Progress', value: 'Overall completion across all four rooms' },
]

const visitedContent: LabelValue[] = [
  { label: 'Title', value: '"Visited Rooms"' },
  { label: 'Navigation', value: 'Back arrow returns to floor plan' },
  { label: 'Room cards (×4)', value: 'Room name + thumbnail + progress; tap to jump to room' },
  { label: 'Stage count', value: 'e.g., "3 / 5 collected" beneath each card' },
  { label: 'Thumbnails', value: 'Small specimen previews for stages already collected' },
  { label: 'Locked state', value: 'Indicator for locked or unvisited stages' },
]

const aboutContent: LabelValue[] = [
  { label: 'Title', value: '"About" or exhibit title' },
  { label: 'Subheading', value: 'Brief descriptor of the exhibit\'s theme' },
  { label: 'Navigation', value: 'Back arrow to return to floor plan' },
  { label: 'Photo', value: 'Creator headshot or exhibit logo' },
  { label: 'Bio', value: 'Short paragraph about the designer/curator' },
  { label: 'Contact', value: 'Email or portfolio link for the creator' },
  { label: 'Overview', value: 'What the exhibit covers and why it exists' },
  { label: 'Sources', value: 'Works cited, image credits, tools used' },
]

const roomLandingContent: LabelValue[] = [
  { label: 'Room title', value: 'Names the skeuomorph section (e.g., "WYSIWYG")' },
  { label: 'Description', value: '2–3 sentences on what physical object persists and where' },
  { label: 'Summary', value: 'One-line thesis connecting the original artifact to its digital echo' },
  { label: 'Navigation', value: 'Back to map and visited rooms' },
  { label: 'Stage cards', value: '4–5 per room; title + thumbnail + era tag; shows collected state' },
  { label: 'Progress', value: 'Visual bar showing room completion' },
  { label: 'Mini-map', value: 'Highlights which room the visitor is currently in' },
]

const interiorCore: LabelValue[] = [
  { label: 'Specimen name', value: 'Display-size title of the artifact' },
  { label: 'Era tag', value: 'e.g., "Mechanical · c. 1450"' },
  { label: 'Date range', value: 'e.g., "c. 1450 – c. 1880"' },
  { label: 'Stage position', value: 'e.g., "3 of 6"; locates user in the evolutionary chain' },
  { label: 'Summary', value: '1–2 sentences describing the artifact' },
  { label: 'Hero image', value: 'Primary specimen illustration' },
  { label: 'Navigation', value: 'Previous / next / close / back to room' },
]

const interiorCatalog: CatalogGroup[] = [
  { group: 'Physical', fields: ['Medium / Material', 'Dimensions', 'Weight', 'Scale indicator'] },
  { group: 'Mechanism', fields: ['Input method', 'Output', 'Key constraint', 'Innovation'] },
  { group: 'Cultural', fields: ['Geographic origin', 'Primary users', 'Cultural impact'] },
  { group: 'Lineage', fields: ['Preceded by', 'Succeeded by', 'Skeuomorphic echo', 'Ghost term'] },
  { group: 'Provenance', fields: ['Collection / Source', 'Image credit', 'Further reading'] },
]
</script>

<template>
  <article class="step-page">
    <!-- ===== HERO — warm dark band ===== -->
    <header class="hero">
      <div class="hero-badge">
        <span class="badge-label">2.3</span>
      </div>
      <h1 class="hero-title">Sitemap &amp;<br />Content Inventory</h1>
      <p class="hero-lead">
        Mapping every screen, overlay, and content element the kiosk
        needs — from the floor-plan home screen down to individual
        specimen catalog fields.
      </p>
    </header>

    <!-- ===== SITEMAP ===== -->
    <section class="section">
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading">Sitemap</h2>
        </div>
      </header>
      <div class="section-body">
        <div class="section-row">
          <div class="section-label">
            <h3 class="subsection-heading">Structure</h3>
          </div>
          <div class="section-content">
            <div class="sitemap-tree">
              <div class="tree-level tree-level--top">
                <div class="tree-node tree-node--secondary">Visited Rooms</div>
                <div class="tree-node tree-node--secondary">About</div>
                <div class="tree-node tree-node--secondary">Glossary</div>
              </div>
              <div class="tree-connector">▲</div>
              <div class="tree-level">
                <div class="tree-node tree-node--home">Floor Plan Map<span class="node-tag">Home</span></div>
              </div>
              <div class="tree-connector">▼</div>
              <div class="tree-level tree-level--rooms">
                <div v-for="room in rooms" :key="room.name" class="tree-node tree-node--room">
                  {{ room.name }}
                </div>
              </div>
              <div class="tree-connector">▼</div>
              <div class="tree-level">
                <div class="tree-node tree-node--leaf">Evolutionary Stages (×20)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SCREENS ===== -->
    <section class="section">
      <div class="section-panel"></div>
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading">Screens</h2>
        </div>
      </header>
      <div class="section-body">
        <div class="section-row">
          <div class="section-label">
            <h3 class="subsection-heading">Pages</h3>
          </div>
          <div class="section-content">
            <div class="screen-table">
              <div class="screen-header">
                <span class="col-name">Screen</span>
                <span class="col-type">Type</span>
                <span class="col-notes">Notes</span>
              </div>
              <div v-for="s in screens" :key="s.name" class="screen-row">
                <span class="col-name">{{ s.name }}</span>
                <span class="col-type">{{ s.type }}</span>
                <span class="col-notes">{{ s.notes }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== MODALS & OVERLAYS ===== -->
    <section class="section">
      <div class="section-panel"></div>
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading">Modals</h2>
        </div>
      </header>
      <div class="section-body">
        <div class="section-row">
          <div class="section-label">
            <h3 class="subsection-heading">Overlays</h3>
          </div>
          <div class="section-content">
            <div class="screen-table">
              <div class="screen-header">
                <span class="col-name">Element</span>
                <span class="col-type">Type</span>
                <span class="col-notes">Notes</span>
              </div>
              <div v-for="m in modals" :key="m.name" class="screen-row">
                <span class="col-name">{{ m.name }}</span>
                <span class="col-type">{{ m.type }}</span>
                <span class="col-notes">{{ m.notes }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CONTENT INVENTORY INTRO — warm dark band ===== -->
    <section class="section section--full-width section--dark">
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading section-heading--light">Content<br />Inventory</h2>
        </div>
        <div class="section-content">
          <p class="inventory-intro">
            Each screen occupies a distinct visual register — from
            the warm, sparse gallery of the home screen to the cool,
            dense catalog of the interior specimen pages.
          </p>
          <div class="register-legend">
            <div class="register-chip register-chip--warm">
              <span class="chip-dot chip-dot--warm"></span>
              Warm / Gallery
            </div>
            <div class="register-chip register-chip--transition">
              <span class="chip-dot chip-dot--transition"></span>
              Transitional
            </div>
            <div class="register-chip register-chip--cool">
              <span class="chip-dot chip-dot--cool"></span>
              Cool / Clinical
            </div>
          </div>
        </div>
      </header>
    </section>

    <!-- ===== HOME SCREEN ===== -->
    <section class="section">
      <div class="section-panel"></div>
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading">Home</h2>
        </div>
        <div class="section-content">
          <div class="register-badge register-badge--warm">Warm / Gallery</div>
          <p class="register-desc">
            Cream ground, amber/orange overlays, lighter type weights,
            sparse and inviting.
          </p>
        </div>
      </header>
      <div class="section-body">
        <div class="section-row">
          <div class="section-label">
            <h3 class="subsection-heading">Fields</h3>
          </div>
          <div class="section-content">
            <div class="specs-grid">
              <div v-for="c in homeContent" :key="c.label" class="spec">
                <span class="spec-label">{{ c.label }}</span>
                <span class="spec-dots"></span>
                <span class="spec-value">{{ c.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== VISITED ROOMS ===== -->
    <section class="section">
      <div class="section-panel"></div>
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading">Visited</h2>
        </div>
        <div class="section-content">
          <div class="register-badge register-badge--warm">Warm / Gallery</div>
          <p class="register-desc">
            Overview and collection tracking; sparse, card-based layout.
          </p>
        </div>
      </header>
      <div class="section-body">
        <div class="section-row">
          <div class="section-label">
            <h3 class="subsection-heading">Fields</h3>
          </div>
          <div class="section-content">
            <div class="specs-grid">
              <div v-for="c in visitedContent" :key="c.label" class="spec">
                <span class="spec-label">{{ c.label }}</span>
                <span class="spec-dots"></span>
                <span class="spec-value">{{ c.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== ABOUT ===== -->
    <section class="section">
      <div class="section-panel"></div>
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading">About</h2>
        </div>
        <div class="section-content">
          <div class="register-badge register-badge--warm">Warm / Gallery</div>
          <p class="register-desc">
            Informational, low density; colophon-style credits block.
          </p>
        </div>
      </header>
      <div class="section-body">
        <div class="section-row">
          <div class="section-label">
            <h3 class="subsection-heading">Fields</h3>
          </div>
          <div class="section-content">
            <div class="specs-grid">
              <div v-for="c in aboutContent" :key="c.label" class="spec">
                <span class="spec-label">{{ c.label }}</span>
                <span class="spec-dots"></span>
                <span class="spec-value">{{ c.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== ROOM LANDING — warm band ===== -->
    <section class="section section--full-width section--warm">
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading">Room<br />Landing</h2>
        </div>
        <div class="section-content">
          <div class="register-badge register-badge--transition">Transitional</div>
          <p class="register-desc">
            Warm ground with emerging catalog density; the threshold
            between gallery browsing and specimen study.
          </p>
        </div>
      </header>
      <div class="section-body">
        <div class="section-row">
          <div class="section-label">
            <h3 class="subsection-heading">Fields</h3>
          </div>
          <div class="section-content">
            <div class="specs-grid">
              <div v-for="c in roomLandingContent" :key="c.label" class="spec">
                <span class="spec-label">{{ c.label }}</span>
                <span class="spec-dots"></span>
                <span class="spec-value">{{ c.value }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Room breakdown cards -->
        <div class="section-row">
          <div class="section-label">
            <h3 class="subsection-heading">Rooms</h3>
          </div>
          <div class="section-content">
            <div class="room-cards">
              <div v-for="(room, i) in rooms" :key="room.name" class="room-card">
                <div class="room-card-header">
                  <span class="room-number">{{ i + 1 }}</span>
                  <span class="room-name">{{ room.name }}</span>
                </div>
                <div class="room-stages">
                  <span
                    v-for="(stage, j) in room.stages"
                    :key="stage"
                    class="stage-chip"
                  >
                    <span class="stage-index">{{ j + 1 }}</span>
                    {{ stage }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== INTERIOR PAGE — dark band ===== -->
    <section class="section section--full-width section--dark">
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading section-heading--light">Interior<br />Page</h2>
        </div>
        <div class="section-content">
          <div class="register-badge register-badge--cool">Cool / Clinical</div>
          <p class="register-desc register-desc--light">
            Cream + near-black + mid-gray dominant, heavier type weights,
            tighter spacing, dense and authoritative. Layout reads like a
            museum catalog raisonné or a specimen tag pinned beside a
            display case.
          </p>
        </div>
      </header>
      <div class="section-body">
        <div class="section-row">
          <div class="section-label">
            <h3 class="subsection-heading subsection-heading--light">Core Fields</h3>
          </div>
          <div class="section-content">
            <div class="specs-grid specs-grid--light">
              <div v-for="c in interiorCore" :key="c.label" class="spec">
                <span class="spec-label">{{ c.label }}</span>
                <span class="spec-dots"></span>
                <span class="spec-value">{{ c.value }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="section-row">
          <div class="section-label">
            <h3 class="subsection-heading subsection-heading--light">Catalog Fields</h3>
          </div>
          <div class="section-content">
            <div class="catalog-groups">
              <div v-for="group in interiorCatalog" :key="group.group" class="catalog-group">
                <h4 class="catalog-group-title">{{ group.group }}</h4>
                <div class="catalog-fields">
                  <span v-for="field in group.fields" :key="field" class="catalog-field">
                    {{ field }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section-row">
          <div class="section-label">
            <h3 class="subsection-heading subsection-heading--light">Actions</h3>
          </div>
          <div class="section-content">
            <div class="specs-grid specs-grid--light">
              <div class="spec">
                <span class="spec-label">Collect</span>
                <span class="spec-dots"></span>
                <span class="spec-value">Button to add this stage to the visitor's collection; triggers toast</span>
              </div>
              <div class="spec">
                <span class="spec-label">Collected</span>
                <span class="spec-dots"></span>
                <span class="spec-value">Indicator shown when stage is already collected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
.subsection-heading--light {
  color: var(--surface-400);
}

/* ---- Sitemap tree ---- */
.sitemap-tree {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-xl) 0;
}

.tree-level {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
}

.tree-level--top {
  gap: var(--space-xl);
}

.tree-level--rooms {
  gap: var(--space-sm);
}

.tree-connector {
  font-size: 12px;
  color: var(--surface-400);
  line-height: 1;
}

.tree-node {
  font: var(--text-meta-era);
  font-size: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: var(--space-sm) var(--space-md);
  border: var(--stroke-medium) solid var(--ink-900);
  background: var(--surface-100);
  text-align: center;
  width: 140px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tree-node--home {
  background: var(--amber-500);
  color: var(--ink-900);
  font-size: 14px;
  font-weight: 600;
  width: 200px;
  flex-direction: column;
}

.node-tag {
  display: block;
  font-size: 10px;
  font-weight: 400;
  color: var(--ink-800);
  margin-top: 2px;
}

.tree-node--room {
  background: var(--surface-200);
}

.tree-node--secondary {
  border-style: dashed;
  color: var(--gray-500);
}

.tree-node--leaf {
  border-style: dotted;
  color: var(--gray-500);
  font-size: 11px;
}

/* ---- Screen table ---- */
.screen-table {
  display: flex;
  flex-direction: column;
}

.screen-header,
.screen-row {
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  gap: var(--space-md);
  padding: var(--space-sm) 0;
}

.screen-header {
  border-bottom: var(--stroke-medium) solid var(--ink-900);
  font: var(--text-meta-field-label);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--gray-500);
  padding-bottom: var(--space-sm);
}

.screen-row {
  border-bottom: var(--stroke-thin) solid var(--surface-300);
}

.col-name {
  font: var(--text-body-small);
  font-weight: 500;
}

.col-type {
  font: var(--text-meta-field-value);
  color: var(--gray-500);
}

.col-notes {
  font: var(--text-body-small);
  font-size: 13px;
  color: var(--gray-500);
}

/* ---- Inventory intro ---- */
.inventory-intro {
  font: var(--text-body-default);
  color: var(--surface-300);
  max-width: 520px;
}

/* ---- Register legend ---- */
.register-legend {
  display: flex;
  gap: var(--space-lg);
}

.register-chip {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font: var(--text-meta-era);
  font-size: 12px;
  letter-spacing: 0.05em;
  color: var(--surface-300);
}

.chip-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.chip-dot--warm {
  background: var(--amber-500);
}

.chip-dot--transition {
  background: var(--orange-500);
}

.chip-dot--cool {
  background: var(--gray-500);
}

/* ---- Register badge ---- */
.register-badge {
  display: inline-block;
  font: var(--text-meta-era);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 3px 10px;
  align-self: flex-start;
}

.register-badge--warm {
  background: var(--amber-500);
  color: var(--ink-900);
}

.register-badge--transition {
  background: var(--orange-500);
  color: var(--surface-100);
}

.register-badge--cool {
  background: var(--gray-500);
  color: var(--surface-100);
}

.register-desc {
  font: var(--text-body-small);
  color: var(--gray-500);
  font-style: italic;
}

.register-desc--light {
  color: var(--surface-300);
}

/* ---- Specs overrides ---- */
.spec-dots {
  min-width: 20px;
}

.spec-value {
  font-size: 14px;
  white-space: normal;
}

.specs-grid--light .spec-label {
  color: var(--surface-400);
}

.specs-grid--light .spec-dots {
  border-bottom-color: var(--warm-border);
}

.specs-grid--light .spec-value {
  color: var(--surface-200);
}

/* ---- Room cards ---- */
.room-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md);
}

.room-card {
  padding: var(--space-lg);
  border: var(--stroke-medium) solid var(--ink-900);
  background: var(--surface-100);
  box-shadow: var(--shadow-card-sm) var(--surface-300);
}

.room-card-header {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}

.room-number {
  font: var(--text-display-h1);
  font-size: 28px;
  line-height: 1;
  color: var(--surface-400);
}

.room-name {
  font: var(--text-ui-nav);
  font-size: 15px;
  font-weight: 500;
}

.room-stages {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.stage-chip {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  font: var(--text-body-small);
  font-size: 13px;
  color: var(--gray-500);
}

.stage-index {
  font: var(--text-meta-field-value);
  color: var(--surface-400);
  min-width: 14px;
}

/* ---- Catalog groups ---- */
.catalog-groups {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.catalog-group-title {
  font: var(--text-meta-era);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--surface-400);
  margin: 0 0 var(--space-sm);
  padding-bottom: var(--space-sm);
  border-bottom: var(--stroke-thin) solid var(--warm-border);
}

.catalog-fields {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.catalog-field {
  font: var(--text-meta-field-value);
  color: var(--surface-200);
  padding: 3px 10px;
  border: var(--stroke-thin) solid var(--warm-border);
}
</style>
