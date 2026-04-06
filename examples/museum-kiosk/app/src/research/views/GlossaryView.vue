<script setup lang="ts">
import Hero from '../components/Hero.vue'
import GlossaryContent from '@shared/components/GlossaryContent.vue'
</script>

<template>
  <article class="step-page">
    <Hero part="§" intro="Thirteen marks that once organized the written word by hand. Some survive in modern editors; others persist in our interfaces as invisible defaults.">
      Glossary of<br />Typographic Icons
    </Hero>
    <div class="glossary-wrap">
      <GlossaryContent compact />
    </div>
  </article>
</template>

<style scoped>
.glossary-wrap {
  padding: var(--space-4xl);
}

@media (max-width: 1024px) {
  .glossary-wrap {
    padding: var(--space-3xl) var(--space-2xl);
  }
}

@media (max-width: 600px) {
  .glossary-wrap {
    padding: var(--space-2xl) var(--space-lg);
  }
}
</style>
