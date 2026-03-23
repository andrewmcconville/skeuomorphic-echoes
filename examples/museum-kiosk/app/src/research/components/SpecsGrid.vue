<script setup lang="ts">
import type { LabelValue } from '../data/types'

withDefaults(defineProps<{
  items: LabelValue[]
  dense?: boolean
  light?: boolean
}>(), {
  dense: false,
  light: false,
})
</script>

<template>
  <div :class="['specs-grid', { 'specs-grid--dense': dense, 'specs-grid--light': light }]">
    <div v-for="item in items" :key="item.label" class="spec">
      <span class="spec-label">{{ item.label }}</span>
      <span class="spec-dots"></span>
      <span class="spec-value">{{ item.value }}</span>
    </div>
  </div>
</template>
