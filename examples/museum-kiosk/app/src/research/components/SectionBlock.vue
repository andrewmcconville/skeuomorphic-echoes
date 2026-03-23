<script setup lang="ts">
withDefaults(defineProps<{
  heading: string
  panel?: boolean
  variant?: 'default' | 'dark' | 'warm' | 'title'
}>(), {
  panel: true,
  variant: 'default',
})
</script>

<template>
  <section
    :class="[
      'section',
      variant !== 'default' && 'section--full-width',
      variant !== 'default' && `section--${variant}`,
    ]"
  >
    <div v-if="panel && variant === 'default'" class="section-panel"></div>
    <header class="section-header">
      <div class="section-label">
        <h2
          :class="[
            'section-heading',
            { 'section-heading--light': variant === 'dark' || variant === 'title' },
          ]"
        >
          {{ heading }}
        </h2>
      </div>
      <div v-if="$slots.headerContent" class="section-content">
        <slot name="headerContent" />
      </div>
    </header>
    <div v-if="$slots.default" class="section-body">
      <slot />
    </div>
  </section>
</template>
