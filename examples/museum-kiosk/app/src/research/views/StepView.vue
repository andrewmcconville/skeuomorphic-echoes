<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id as string
</script>

<template>
  <div class="step-page">
    <h1 class="step-page__title">Step {{ id }}</h1>
    <p class="placeholder">Content for step {{ id }} will go here.</p>
  </div>
</template>

<style scoped>
.step-page {
  max-width: calc(8 * var(--grid-column));
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-3xl);
}

.step-page__title {
  font: var(--text-heading-470);
  margin-bottom: var(--space-lg);
}

.placeholder {
  font: var(--text-body-640);
  color: var(--ink-500);
  padding: var(--space-2xl);
  background: var(--surface-light-300);
  border: var(--stroke-thin) dashed var(--ink-300);
  border-radius: var(--radius-md);
  text-align: center;
}

@media (max-width: 1024px) {
  .step-page {
    max-width: none;
  }
}

@media (max-width: 600px) {
  .step-page {
    padding: var(--space-2xl) var(--space-lg);
  }
}
</style>
