<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const steps = [
  { id: '2.1', title: 'Skeuomorph Selection' },
  { id: '2.2', title: 'Persona' },
  { id: '2.3', title: 'Sitemap & Content Inventory' },
  { id: '2.4', title: 'Happy Path & User Task' },
  { id: '2.5', title: 'Lo-fi Wireframe on Paper' },
  { id: '2.6', title: 'Lo-fi Wireframe in Figma' },
  { id: '2.7', title: 'Think-Aloud & Task Analysis' },
  { id: '2.8', title: 'Design System' },
  { id: '2.9', title: 'Hi-fi Home & Primary Skeuomorph' },
]
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
          :to="`/step/${s.id}`"
          class="nav-step"
        >
          <span class="nav-step-id">{{ s.id }}</span>
          <span class="nav-step-title">{{ s.title }}</span>
        </RouterLink>
      </nav>

      <nav class="sidebar-nav">
        <span class="nav-label">Reference</span>
        <RouterLink to="/design-system" class="nav-step">
          <span class="nav-step-title">Design System</span>
        </RouterLink>
      </nav>
    </aside>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<!-- Override kiosk-scale typography for web -->
<style>
.research-app {
  --text-display-title: 700 48px/56px var(--font-display);
  --text-display-specimen: 700 36px/44px var(--font-display);
  --text-display-h1: 700 28px/36px var(--font-display);
  --text-display-h2: 300 22px/28px var(--font-display);

  --text-body-default: 400 18px/28px var(--font-body);
  --text-body-small: 400 14px/20px var(--font-body);
  --text-ui-button: 500 14px/14px var(--font-body);
  --text-ui-nav: 500 13px/16px var(--font-body);
  --text-ui-caption: 400 13px/20px var(--font-body);

  --text-meta-era: 400 13px/18px var(--font-meta);
  --text-meta-field-label: 400 12px/16px var(--font-meta);
  --text-meta-field-value: 300 12px/16px var(--font-meta);
  --text-meta-progress: 400 13px/16px var(--font-meta);

  --sidebar-width: 240px;
}
</style>

<style scoped>
.research-app {
  min-height: 100vh;
  display: flex;
}

/* ---- Sidebar ---- */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: var(--sidebar-width);
  height: 100vh;
  overflow-y: auto;
  padding: var(--space-xl) var(--space-lg);
  border-right: var(--stroke-medium) solid var(--ink-900);
  background: var(--surface-100);
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.logo {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-bottom: var(--space-lg);
  border-bottom: var(--stroke-thin) solid var(--surface-300);
}

.logo-title {
  font: var(--text-display-h2);
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
}

.logo-sub {
  font: var(--text-meta-field-label);
  color: var(--gray-500);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.nav-label {
  font: var(--text-meta-field-label);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--gray-400);
  padding: var(--space-sm) var(--space-sm);
  margin-bottom: var(--space-xs);
}

.nav-step {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  padding: 6px var(--space-sm);
  border-radius: var(--radius-sm);
  font: var(--text-ui-nav);
  color: var(--gray-500);
  transition: background 0.15s, color 0.15s;
}

.nav-step:hover {
  background: var(--surface-200);
  color: var(--ink-900);
}

.nav-step.router-link-exact-active {
  background: var(--ink-900);
  color: var(--surface-100);
}

.nav-step-id {
  font: var(--text-meta-field-value);
  min-width: 24px;
  color: inherit;
  opacity: 0.6;
}

.nav-step.router-link-exact-active .nav-step-id {
  opacity: 0.5;
}

.nav-step-title {
  color: inherit;
}

/* ---- Main ---- */
main {
  flex: 1;
  margin-left: var(--sidebar-width);
  padding: var(--space-2xl) var(--space-2xl);
  min-height: 100vh;
}
</style>
