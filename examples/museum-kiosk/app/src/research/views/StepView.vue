<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id as string
</script>

<template>
  <div class="step-page">
    <h1>Step {{ id }}</h1>
    <p class="placeholder">Content for step {{ id }} will go here.</p>
  </div>
</template>

<style scoped>
.step-page {
  max-width: 960px;
  margin: 0 auto;
}

h1 {
  font: var(--text-display-h1);
  margin-bottom: var(--space-lg);
}

.placeholder {
  font: var(--text-body-default);
  color: var(--gray-500);
  padding: var(--space-2xl);
  background: var(--surface-200);
  border: var(--stroke-thin) dashed var(--surface-400);
  border-radius: var(--radius-md);
  text-align: center;
}
</style>
