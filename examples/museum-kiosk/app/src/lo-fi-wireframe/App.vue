<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="lofi-app">
    <RouterView />
  </div>
</template>

<style scoped>
.lofi-app {
  width: 1440px;
  min-height: 2560px;
  margin: 0 auto;
  background: var(--surface-light-200);
}
</style>
