<script setup lang="ts">
defineProps<{
  badge: string
  lead: string
}>()
</script>

<template>
  <header class="hero">
    <div class="hero-container">
      <div class="hero-badge"></div>
      <div class="badge-label">{{ badge }}</div>
      <h1 class="hero-title"><slot /></h1>
      <div class="hero-badge__gradient"></div>
      <div class="hero-badge__mask"></div>
    </div>
    <p class="hero-lead">{{ lead }}</p>
  </header>
</template>
