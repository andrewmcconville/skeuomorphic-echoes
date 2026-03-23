<script setup lang="ts">
import GlossaryContent from '@shared/components/GlossaryContent.vue'
</script>

<template>
  <article class="glossary-page">
    <header class="glossary-header">
      <span class="glossary-header__icon">§</span>
      <h1 class="glossary-header__title">Glossary of<br />Typographic Icons</h1>
      <p class="glossary-header__intro">
        Thirteen marks that once organized the written word by hand. Some survive
        in modern editors; others persist in our interfaces as invisible defaults.
      </p>
    </header>
    <GlossaryContent />
  </article>
</template>

<style scoped>
.glossary-page {
  padding: var(--space-3xl) var(--space-2xl);
}

.glossary-header {
  border-bottom: var(--stroke-medium) solid var(--ink-900);
  padding-bottom: var(--space-2xl);
  margin-bottom: var(--space-2xl);
  position: relative;
  overflow: hidden;
}

.glossary-header__icon {
  position: absolute;
  top: -2rem;
  right: 0;
  font: var(--text-display-670);
  font-size: 240px;
  line-height: 1;
  opacity: 0.04;
  pointer-events: none;
  user-select: none;
}

.glossary-header__title {
  font: var(--text-display-670);
  margin-bottom: var(--space-md);
}

.glossary-header__intro {
  font: var(--text-body-640);
  color: var(--ink-500);
  max-width: 65ch;
}
</style>
