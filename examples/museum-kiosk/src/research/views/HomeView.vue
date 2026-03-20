<script setup lang="ts">
import { RouterLink } from 'vue-router'

const steps = [
  { id: '2.1', title: 'Skeuomorph Selection' },
  { id: '2.2', title: 'Persona' },
  { id: '2.3', title: 'Sitemap & Content Inventory' },
  { id: '2.4', title: 'Happy Path & User Task' },
  { id: '2.5', title: 'Lo-fi Wireframe on Paper' },
  { id: '2.6', title: 'Lo-fi Wireframe in Figma' },
  { id: '2.7', title: 'Think-Aloud & Task Analysis' },
  { id: '2.8', title: 'Design System' },
  { id: '2.9', title: 'Hi-fi Home & Primary Skeuomorph' },
]
</script>

<template>
  <div class="home">
    <header class="home-hero">
      <h1>Before the Prompt</h1>
      <p class="subtitle">The Rise and Fall of Digital Icons</p>
      <p class="description">
        A research process book tracing the WYSIWYG page editor from
        hand-written manuscripts to cloud collaboration — documenting
        every step of designing a museum kiosk experience.
      </p>
    </header>

    <div class="divider"></div>

    <section>
      <div class="step-list">
        <RouterLink
          v-for="s in steps"
          :key="s.id"
          :to="`/step/${s.id}`"
          class="step-row"
        >
          <span class="step-id">{{ s.id }}</span>
          <span class="step-dots"></span>
          <span class="step-title">{{ s.title }}</span>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  max-width: 820px;
}

.home-hero {
  margin-bottom: var(--space-2xl);
}

h1 {
  font: var(--text-display-title);
  margin-bottom: var(--space-xs);
}

.subtitle {
  font: var(--text-display-h2);
  color: var(--gray-500);
  margin-bottom: var(--space-lg);
}

.description {
  font: var(--text-body-default);
  color: var(--gray-500);
  max-width: 560px;
}

.divider {
  height: var(--stroke-medium);
  background: var(--ink-900);
  margin-bottom: var(--space-2xl);
}

.step-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.step-row {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  padding: var(--space-md) 0;
  border-bottom: var(--stroke-thin) solid var(--surface-300);
  transition: padding-left 0.15s;
}

.step-row:first-child {
  border-top: var(--stroke-thin) solid var(--surface-300);
}

.step-row:hover {
  padding-left: var(--space-sm);
}

.step-id {
  font: var(--text-meta-field-value);
  color: var(--gray-400);
  min-width: 28px;
}

.step-dots {
  flex: 1;
  border-bottom: 1px dotted var(--surface-400);
  margin-bottom: 3px;
}

.step-title {
  font: var(--text-body-default);
  font-size: 16px;
}

.step-row:hover .step-id {
  color: var(--orange-500);
}
</style>
