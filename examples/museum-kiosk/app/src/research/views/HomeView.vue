<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { steps } from '../data/steps'
</script>

<template>
  <div class="home">
    <header class="home-hero">
      <h1 class="home-hero__title">Before the Prompt</h1>
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
          :to="s.to"
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

.home-hero__title {
  font: var(--text-display-670);
  margin-bottom: var(--space-xs);
}

.subtitle {
  font: var(--text-display-230);
  color: var(--ink-500);
  margin-bottom: var(--space-lg);
}

.description {
  font: var(--text-body-640);
  color: var(--ink-500);
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
  border-bottom: var(--stroke-thin) solid var(--ink-200);
  transition: padding-left 0.15s;
}

.step-row:first-child {
  border-top: var(--stroke-thin) solid var(--ink-200);
}

.step-row:hover {
  padding-left: var(--space-sm);
}

.step-id {
  font: var(--text-meta-230);
  color: var(--ink-400);
  min-width: 28px;
}

.step-dots {
  flex: 1;
  border-bottom: var(--stroke-thin) dotted var(--ink-300);
  margin-bottom: 3px;
}

.step-title {
  font: var(--text-body-640);
  font-size: 16px;
}

.step-row:hover .step-id {
  color: var(--secondary-500);
}
</style>
