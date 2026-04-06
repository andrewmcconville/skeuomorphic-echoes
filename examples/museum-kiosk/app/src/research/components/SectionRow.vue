<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
  lightLabel?: boolean
}>(), {
  lightLabel: false,
})
</script>

<template>
  <div class="section__row">
    <div v-if="label" class="section__label">
      <h3 :class="['section__label-text', { 'section__label-text--light': lightLabel }]">
        {{ label }}
      </h3>
    </div>
    <div class="section__content">
      <slot />
    </div>
  </div>
</template>
