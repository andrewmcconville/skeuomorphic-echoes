<script setup lang="ts">
import { glossaryEntries } from '@shared/data/glossary'
import { statusLabel } from '@shared/composables/useGlossary'

defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div class="hf-drawer">
    <div class="hf-drawer__header">
      <h2 class="hf-drawer__title">Typographic Icons</h2>
      <button class="hf-drawer__close" @click="$emit('close')">&#x2715;</button>
    </div>

    <div class="hf-drawer__body">
      <div
        v-for="entry in glossaryEntries"
        :key="entry.id"
        class="hf-glyph"
      >
        <div class="hf-glyph__char">{{ entry.char }}</div>
        <div class="hf-glyph__info">
          <p class="hf-glyph__name">{{ entry.name }}</p>
          <p class="hf-glyph__code">{{ entry.unicode }}</p>
          <p class="hf-glyph__desc">{{ entry.familiar }}</p>
          <span
            class="hf-glyph__status"
            :class="`hf-glyph__status--${entry.function.status}`"
          >{{ statusLabel[entry.function.status] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
