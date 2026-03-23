<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
  lightLabel?: boolean
}>(), {
  lightLabel: false,
})
</script>

<template>
  <div class="section-row section-row--nested">
    <div v-if="label" class="section-label section-label--nested">
      <h3 :class="['subsection-heading', { 'subsection-heading--light': lightLabel }]">
        {{ label }}
      </h3>
    </div>
    <div class="section-content">
      <slot />
    </div>
  </div>
</template>
