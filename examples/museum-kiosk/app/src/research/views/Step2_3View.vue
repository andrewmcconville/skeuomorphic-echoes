<script setup lang="ts">
import {
  screens, modals, rooms,
  homeContent, collectionContent, aboutContent, glossaryContent,
  roomLandingContent, interiorCore, interiorCatalog,
} from '../data/step-2-3'
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
        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
            <h3 class="subsection-heading">Structure</h3>
          </div>
          <div class="section-content">
            <div class="sitemap-tree">
              <div class="tree-level tree-level--top">
                <div class="tree-node tree-node--secondary">Artifact Collection</div>
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
        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
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
        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
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


    <!-- ===== HOME SCREEN ===== -->
    <section class="section">
      <div class="section-panel"></div>
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading">Home</h2>
        </div>
      </header>
      <div class="section-body">
        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
            <h3 class="subsection-heading">Fields</h3>
          </div>
          <div class="section-content">
            <div class="specs-grid specs-grid--dense">
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

    <!-- ===== SKEUOMORPH ROOM — warm band ===== -->
    <section class="section section--full-width section--warm">
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading">Skeuomorph Room</h2>
        </div>
      </header>
      <div class="section-body">
        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
            <h3 class="subsection-heading">Fields</h3>
          </div>
          <div class="section-content">
            <div class="specs-grid specs-grid--dense">
              <div v-for="c in roomLandingContent" :key="c.label" class="spec">
                <span class="spec-label">{{ c.label }}</span>
                <span class="spec-dots"></span>
                <span class="spec-value">{{ c.value }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Skeuomorph room breakdown cards -->
        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
            <h3 class="subsection-heading">Skeuomorph Rooms</h3>
          </div>
          <div class="section-content">
            <div class="room-cards">
              <div v-for="(room, i) in rooms" :key="room.name" class="card card--vertical card--room">
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

    <!-- ===== ARTIFACT — dark band ===== -->
    <section class="section section--full-width section--dark">
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading section-heading--light">Artifact</h2>
        </div>
      </header>
      <div class="section-body">
        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
            <h3 class="subsection-heading subsection-heading--light">Core Fields</h3>
          </div>
          <div class="section-content">
            <div class="specs-grid specs-grid--dense specs-grid--light">
              <div v-for="c in interiorCore" :key="c.label" class="spec">
                <span class="spec-label">{{ c.label }}</span>
                <span class="spec-dots"></span>
                <span class="spec-value">{{ c.value }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
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

        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
            <h3 class="subsection-heading subsection-heading--light">Actions</h3>
          </div>
          <div class="section-content">
            <div class="specs-grid specs-grid--dense specs-grid--light">
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

    <!-- ===== ARTIFACT COLLECTION ===== -->
    <section class="section">
      <div class="section-panel"></div>
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading">Artifact Collection</h2>
        </div>
      </header>
      <div class="section-body">
        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
            <h3 class="subsection-heading">Fields</h3>
          </div>
          <div class="section-content">
            <div class="specs-grid specs-grid--dense">
              <div v-for="c in collectionContent" :key="c.label" class="spec">
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
      </header>
      <div class="section-body">
        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
            <h3 class="subsection-heading">Fields</h3>
          </div>
          <div class="section-content">
            <div class="specs-grid specs-grid--dense">
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

    <!-- ===== GLOSSARY ===== -->
    <section class="section">
      <div class="section-panel"></div>
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading">Glossary</h2>
        </div>
      </header>
      <div class="section-body">
        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
            <h3 class="subsection-heading">Fields</h3>
          </div>
          <div class="section-content">
            <div class="specs-grid specs-grid--dense">
              <div v-for="c in glossaryContent" :key="c.label" class="spec">
                <span class="spec-label">{{ c.label }}</span>
                <span class="spec-dots"></span>
                <span class="spec-value">{{ c.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
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
  color: var(--surface-500);
  line-height: 1;
}

.tree-node {
  font: var(--text-meta-era);
  font-size: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: var(--space-sm) var(--space-md);
  border: var(--stroke-medium) solid var(--ink-900);
  background: var(--surface-200);
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
  margin-top: var(--space-2xs);
}

.tree-node--room {
  background: var(--surface-300);
}

.tree-node--secondary {
  border-style: dashed;
  color: var(--gray-500);
}

.tree-node--leaf {
  border-style: dotted;
  color: var(--gray-500);
  font-size: 12px;
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
  border-bottom: var(--stroke-thin) solid var(--surface-400);
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

/* ---- Room cards ---- */
.room-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md);
}

.card--room {
  box-shadow: var(--shadow-card-sm) var(--surface-400);
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
  color: var(--surface-500);
}

.room-name {
  font: var(--text-ui-nav);
  font-size: 14px;
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
  color: var(--surface-500);
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
  color: var(--surface-500);
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
  color: var(--surface-300);
  padding: var(--space-xs) 10px;
  border: var(--stroke-thin) solid var(--warm-border);
}
</style>
