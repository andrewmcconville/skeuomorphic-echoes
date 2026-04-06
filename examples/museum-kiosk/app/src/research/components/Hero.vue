<script setup lang="ts">
defineProps<{
  part: string
  intro: string
}>()
</script>

<template>
  <header class="hero">
    <div class="hero-container">
      <div class="hero-badge"></div>
      <div class="badge-label">{{ part }}</div>
      <h1 class="hero-title">
        <div class="hero-title__content">
          <slot />
        </div>
      </h1>
      <div class="hero-badge__gradient"></div>
    </div>
    <p class="hero-lead">{{ intro }}</p>
  </header>
</template>
