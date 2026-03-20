<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="prototype-app">
    <RouterView />
  </div>
</template>

<style scoped>
.prototype-app {
  width: 1440px;
  min-height: 2560px;
  margin: 0 auto;
  background: var(--surface-100);
}
</style>
