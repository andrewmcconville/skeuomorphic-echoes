<script setup lang="ts">
import HeroHeader from '../components/HeroHeader.vue'
import SectionBlock from '../components/SectionBlock.vue'
import SubsectionRow from '../components/SubsectionRow.vue'
import SpecsGrid from '../components/SpecsGrid.vue'
import {
  colorGroups, overlays, typeGroups,
  spacingTokens, strokeTokens, radiusTokens, shadowTokens,
} from '../data/step-2-8'

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
  <article class="step-page ds-page">
    <HeroHeader badge="2.8" lead="Color, typography, spacing, and structural tokens in use across the research, lo-fi wireframe, and hi-fi prototype apps.">
      Design<br>System
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

      <SubsectionRow label="Opacity">
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
              <span class="type-label">{{ s.name }}</span>
              <span class="type-name">{{ s.family }} · {{ s.weight }}</span>
              <span class="type-spec">{{ s.size }}</span>
            </div>
          </div>
        </div>
      </SubsectionRow>
    </SectionBlock>

    <!-- ==================== SPACING ==================== -->
    <SectionBlock heading="Spacing" :panel="false">
      <SubsectionRow label="Scale">
        <div class="spacing-list">
          <div v-for="t in spacingTokens" :key="t.var" class="spacing-item">
            <div class="spacing-bar" :style="{ width: t.value }" />
            <div class="spacing-meta">
              <span class="token-name">{{ t.var }}</span>
              <span class="token-value">{{ t.value }}</span>
            </div>
            <span class="token-usage">{{ t.usage }}</span>
          </div>
        </div>
      </SubsectionRow>
    </SectionBlock>

    <!-- ==================== STRUCTURE ==================== -->
    <SectionBlock heading="Structure" :panel="false">
      <SubsectionRow label="Strokes">
        <SpecsGrid :items="strokeTokens.map(t => ({ label: t.name, value: `${t.value} — ${t.usage}` }))" />
      </SubsectionRow>

      <SubsectionRow label="Radius">
        <SpecsGrid :items="radiusTokens.map(t => ({ label: t.name, value: `${t.value} — ${t.usage}` }))" />
      </SubsectionRow>

      <SubsectionRow label="Shadows">
        <div class="shadow-samples">
          <div v-for="s in shadowTokens" :key="s.var" class="shadow-sample">
            <div class="shadow-preview" :style="{ boxShadow: `${s.value} var(--surface-light-400)` }" />
            <div class="shadow-meta">
              <span class="token-name">{{ s.var }}</span>
              <span class="token-value">{{ s.value }}</span>
            </div>
            <span class="token-usage">{{ s.usage }}</span>
          </div>
        </div>
      </SubsectionRow>
    </SectionBlock>
  </article>
</template>

<style scoped>
/* ---- Step 2.8 overrides ---- */
.ds-page {
  --_section-content-gap: var(--space-lg);
}

/* ---- Color grid ---- */
.color-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3xl);
}

.color-swatch {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.swatch {
  width: 100%;
  aspect-ratio: 1.5;
  border: var(--stroke-thin) solid var(--ink-200);
}

.swatch-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
}

.color-name {
  font: var(--text-body-350);
}

.color-hex {
  font: var(--text-meta-430);
  color: var(--ink-500);
}

.color-usage {
  font: var(--text-meta-430);
  color: var(--ink-400);
  line-height: 1.4;
}

.overlay-usage__text {
  font: var(--text-body-440);
  color: var(--ink-500);
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
}

.type-sample:first-child {
  padding-top: 0;
}

.type-meta {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
  margin-top: var(--space-sm);
  font: var(--text-meta-440);
  color: var(--ink-500);
}

.type-preview {
  margin-bottom: var(--space-sm);
  color: var(--ink-900);
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ---- Spacing scale ---- */
.spacing-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.spacing-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
}

.spacing-bar {
  height: var(--space-sm);
  background: var(--primary-500);
  min-width: var(--space-2xs);
}

.spacing-meta {
  display: flex;
  align-items: baseline;
  gap: var(--space-md);
}

.token-name {
  font: var(--text-meta-440);
  color: var(--ink-500);
}

.token-value {
  font: var(--text-meta-430);
  color: var(--ink-400);
}

.token-usage {
  font: var(--text-meta-430);
  color: var(--ink-400);
  line-height: 1.4;
}

/* ---- Shadow samples ---- */
.shadow-samples {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

.shadow-sample {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.shadow-preview {
  width: 100%;
  aspect-ratio: 1.6;
  background: var(--surface-light-100);
  border: var(--stroke-medium) solid var(--ink-900);
}

.shadow-meta {
  display: flex;
  align-items: baseline;
  gap: var(--space-md);
}

@media (max-width: 768px) {
  .color-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .shadow-samples {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .color-grid {
    grid-template-columns: 1fr;
  }

  .shadow-samples {
    grid-template-columns: 1fr;
  }

  .type-preview {
    white-space: normal;
    overflow-wrap: break-word;
  }
}
</style>
