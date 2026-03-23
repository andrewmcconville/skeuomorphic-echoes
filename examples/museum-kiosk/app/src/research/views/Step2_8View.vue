<script setup lang="ts">
import HeroHeader from '../components/HeroHeader.vue'
import SectionBlock from '../components/SectionBlock.vue'
import SubsectionRow from '../components/SubsectionRow.vue'
import SpecsGrid from '../components/SpecsGrid.vue'
import { colorGroups, overlays, typeGroups, components } from '../data/step-2-8'

/** Parse CSS `extra` string (e.g. "text-transform: uppercase; letter-spacing: 0.08em") into a style object */
function parseExtraStyles(extra?: string): Record<string, string> {
  if (!extra) return {}
  return Object.fromEntries(
    extra.split('; ').map(pair => {
      const [prop, val] = pair.split(': ')
      const camel = prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
      return [camel, val]
    }),
  )
}
</script>

<template>
  <article class="ds-page">
    <HeroHeader badge="2.8" lead="Color, typography, and component specifications for the museum kiosk prototype. All values map directly to Figma variables, text styles, and components.">
      Design System
    </HeroHeader>

    <!-- ==================== COLORS ==================== -->
    <SectionBlock heading="Colors" :panel="false">
      <SubsectionRow
        v-for="group in colorGroups"
        :key="group.name"
        :label="group.name"
      >
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
      </SubsectionRow>

      <SubsectionRow label="Overlay Opacity">
        <SpecsGrid :items="overlays.map(o => ({ label: o.name, value: o.value }))" />
        <div class="overlay-usage">
          <p v-for="o in overlays" :key="o.name" class="overlay-usage__text">
            <strong class="overlay-usage__value">{{ o.value }}</strong> — {{ o.usage }}
          </p>
        </div>
      </SubsectionRow>
    </SectionBlock>

    <!-- ==================== TYPOGRAPHY ==================== -->
    <SectionBlock heading="Typography" :panel="false">
      <SubsectionRow
        v-for="group in typeGroups"
        :key="group.name"
        :label="group.name"
      >
        <div class="type-samples">
          <div v-for="s in group.styles" :key="s.token" class="type-sample">
            <p
              class="type-preview"
              :style="{ font: `var(${s.token})`, ...parseExtraStyles(s.extra) }"
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
      </SubsectionRow>
    </SectionBlock>

    <!-- ==================== COMPONENTS ==================== -->
    <SectionBlock heading="Components" :panel="false">
      <SubsectionRow
        v-for="comp in components"
        :key="comp.name"
        :label="comp.name"
      >
        <p class="comp-desc">{{ comp.description }}</p>
        <div class="variant-list">
          <div v-for="v in comp.variants" :key="v.name" class="variant">
            <span class="variant-name">{{ v.name }}</span>
            <span class="variant-spec">{{ v.spec }}</span>
          </div>
        </div>
      </SubsectionRow>
    </SectionBlock>
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
