<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { steps } from './data/steps'
</script>

<template>
  <div class="research-app">
    <aside class="sidebar">
      <RouterLink to="/" class="logo">
        <span class="logo-title">Before the Prompt</span>
        <span class="logo-sub">Museum Kiosk</span>
      </RouterLink>

      <nav class="sidebar-nav">
        <span class="nav-label">Process</span>
        <RouterLink
          v-for="s in steps"
          :key="s.id"
          :to="s.to"
          class="nav-step"
        >
          <span class="nav-step-id">{{ s.id }}</span>
          <span class="nav-step-title">{{ s.title }}</span>
        </RouterLink>
      </nav>

      <nav class="sidebar-nav sidebar-nav--reference">
        <span class="nav-label">Reference</span>
        <RouterLink to="/glossary" class="nav-step">
          <span class="nav-step-id">§</span>
          <span class="nav-step-title">Glossary</span>
        </RouterLink>
      </nav>
    </aside>

    <main class="research-app__main">
      <RouterView />
    </main>
  </div>
</template>

<style>
@import './step-shared.css';
</style>

<style>
.research-app {
  --grid-column: 120px;
  --grid-columns: 12;
  --sidebar-width: calc(2 * var(--grid-column));
}
</style>

<style scoped>
.research-app {
  --_app-width: calc(var(--grid-columns) * var(--grid-column));
  min-height: 100vh;
  max-width: var(--_app-width);
  margin: 0 auto;
  display: flex;
  position: relative;
}

/* ---- Swiss grid overlay ---- */
.research-app::after {
  content: '';
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: calc(var(--_app-width) + 1px);
  height: 100vh;
  background: repeating-linear-gradient(
    to right,
    var(--ink-300) 0px,
    var(--ink-300) 1px,
    transparent 1px,
    transparent var(--grid-column)
  );
  opacity: 0.12;
  pointer-events: none;
  z-index: 9999;
}

/* ---- Sidebar ---- */
.sidebar {
  position: fixed;
  top: 0;
  left: calc(50% - var(--_app-width) / 2);
  width: var(--sidebar-width);
  height: 100vh;
  overflow-y: auto;
  padding: var(--space-xl) var(--space-lg);
  border-right: var(--stroke-medium) solid var(--ink-900);
  background: var(--surface-light-200);
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.logo {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
  padding-bottom: var(--space-lg);
  border-bottom: var(--stroke-thin) solid var(--ink-200);
}

.logo-title {
  font: var(--text-display-230);
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
}

.logo-sub {
  font: var(--text-meta-440);
  color: var(--ink-500);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
}

.nav-label {
  font: var(--text-meta-440);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink-400);
  padding: var(--space-sm) var(--space-sm);
  margin-bottom: var(--space-xs);
}

.nav-step {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
  font: var(--text-body-350);
  color: var(--ink-500);
  transition: background 0.15s, color 0.15s;
}

.nav-step:hover {
  background: var(--surface-light-300);
  color: var(--ink-900);
}

.nav-step.router-link-exact-active {
  background: var(--ink-900);
  color: var(--ink-100);
}

.nav-step-id {
  font: var(--text-meta-430);
  min-width: 24px;
  color: inherit;
  opacity: var(--opacity-muted);
}

.nav-step.router-link-exact-active .nav-step-id {
  opacity: var(--opacity-panel);
}

.nav-step-title {
  color: inherit;
}

.sidebar-nav--reference {
  padding-top: var(--space-md);
  margin-top: var(--space-md);
  border-top: var(--stroke-thin) solid var(--ink-200);
}

/* ---- Main ---- */
.research-app__main {
  flex: 1;
  margin-left: var(--sidebar-width);
  padding: 0;
  min-height: 100vh;
}
</style>
