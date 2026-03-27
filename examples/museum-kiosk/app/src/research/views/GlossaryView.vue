<script setup lang="ts">
import HeroHeader from '../components/HeroHeader.vue'
import GlossaryContent from '@shared/components/GlossaryContent.vue'
</script>

<template>
  <article class="step-page">
    <HeroHeader badge="§" lead="Thirteen marks that once organized the written word by hand. Some survive in modern editors; others persist in our interfaces as invisible defaults.">
      Glossary of<br />Typographic Icons
    </HeroHeader>
    <div class="glossary-wrap">
      <GlossaryContent compact />
    </div>
  </article>
</template>

<style scoped>
.glossary-wrap {
  padding: var(--space-4xl);
}
</style>
