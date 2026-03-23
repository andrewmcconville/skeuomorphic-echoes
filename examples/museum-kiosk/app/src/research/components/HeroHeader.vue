<script setup lang="ts">
defineProps<{
  badge: string
  lead: string
}>()
</script>

<template>
  <header class="hero">
    <div class="hero-badge">
      <span class="badge-label">{{ badge }}</span>
    </div>
    <h1 class="hero-title"><slot /></h1>
    <p class="hero-lead">{{ lead }}</p>
  </header>
</template>
