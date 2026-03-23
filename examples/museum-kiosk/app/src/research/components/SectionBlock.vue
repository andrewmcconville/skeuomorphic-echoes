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
      variant !== 'default' && `section--${variant}`,
    ]"
  >
    <div class="section__inner">
      <div v-if="panel && variant === 'default'" class="section__panel"></div>
      <header class="section__header">
        <h2
          :class="[
            'section__heading',
            { 'section__heading--light': variant === 'dark' || variant === 'title' },
          ]"
        >
          {{ heading }}
        </h2>
      </header>
      <slot />
    </div>
  </section>
</template>
