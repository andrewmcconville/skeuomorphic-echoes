<script setup lang="ts">
import { colorGroups, overlays, typeGroups, components } from '../data/step-2-8'
</script>

<template>
  <article class="ds-page">
    <header class="hero">
      <div class="hero-badge">
        <span class="badge-label">2.8</span>
      </div>
      <h1 class="hero-title">Design System</h1>
      <p class="hero-lead">
        Color, typography, and component specifications for the museum kiosk
        prototype. All values map directly to Figma variables, text styles,
        and components.
      </p>
    </header>


    <!-- ==================== COLORS ==================== -->
    <section class="section">
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading">Colors</h2>
        </div>
      </header>
      <div class="section-body">
        <div
          v-for="group in colorGroups"
          :key="group.name"
          class="section-row section-row--nested"
        >
          <div class="section-label section-label--nested">
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

        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
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
              <p v-for="o in overlays" :key="o.name" class="overlay-usage__text">
                <strong class="overlay-usage__value">{{ o.value }}</strong> — {{ o.usage }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ==================== TYPOGRAPHY ==================== -->
    <section class="section">
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading">Typography</h2>
        </div>
      </header>
      <div class="section-body">
        <div
          v-for="group in typeGroups"
          :key="group.name"
          class="section-row section-row--nested"
        >
          <div class="section-label section-label--nested">
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
      </div>
    </section>


    <!-- ==================== COMPONENTS ==================== -->
    <section class="section">
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading">Components</h2>
        </div>
      </header>
      <div class="section-body">
        <div
          v-for="comp in components"
          :key="comp.name"
          class="section-row section-row--nested"
        >
          <div class="section-label section-label--nested">
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
      </div>
    </section>
  </article>
</template>

<style scoped>
/* ---- Step 2.8 overrides ---- */
.section-content {
  gap: var(--space-lg);
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
  border: var(--stroke-thin) solid var(--surface-400);
}

.swatch-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
}

.color-name {
  font: var(--text-ui-nav);
}

.color-hex {
  font: var(--text-meta-field-value);
  color: var(--gray-500);
}

.color-usage {
  font: var(--text-meta-field-value);
  font-size: 12px;
  color: var(--gray-400);
  line-height: 1.4;
}

.overlay-usage__text {
  font: var(--text-body-small);
  color: var(--gray-500);
  margin-bottom: var(--space-xs);
}

.overlay-usage__value {
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
  border-bottom: var(--stroke-thin) solid var(--surface-400);
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
  border-bottom: var(--stroke-thin) solid var(--surface-400);
}

.variant:first-child {
  padding-top: 0;
}

.variant-name {
  font: var(--text-ui-nav);
  font-weight: 500;
}

.variant-spec {
  font: var(--text-body-small);
  color: var(--gray-500);
}
</style>
