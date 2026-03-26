<script setup lang="ts">
import { glossaryEntries } from '@shared/data/glossary'

defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div class="wf-drawer">
    <div class="wf-drawer__header">
      <h2 class="wf-drawer__title">Typographic Icons</h2>
      <button class="wf-drawer__close" @click="$emit('close')">✕</button>
    </div>

    <div class="wf-drawer__body">
      <div
        v-for="entry in glossaryEntries"
        :key="entry.id"
        class="wf-glyph"
      >
        <div class="wf-glyph__char">{{ entry.char }}</div>
        <div class="wf-glyph__info">
          <p class="wf-glyph__name">{{ entry.name }}</p>
          <p class="wf-glyph__code">{{ entry.unicode }}</p>
          <p class="wf-glyph__desc">{{ entry.familiar }}</p>
          <span class="wf-glyph__status">{{ entry.function.status }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
