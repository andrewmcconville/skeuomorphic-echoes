<script setup lang="ts">
import { pairs } from '../data/step-2-4'
</script>

<template>
  <article class="step-page">
    <!-- ===== HERO — warm dark band ===== -->
    <header class="hero">
      <div class="hero-badge">
        <span class="badge-label">2.4</span>
      </div>
      <h1 class="hero-title">Happy Paths &amp;<br />User Tasks</h1>
      <p class="hero-lead">
        Two primary paths through the kiosk, each paired with a
        scripted user task for think-aloud testing.
      </p>
    </header>

    <template v-for="(pair, i) in pairs" :key="i">
      <!-- ===== HAPPY PATH ===== -->
      <section class="section">
        <div class="section-panel"></div>
        <header class="section-header">
          <div class="section-label">
            <h2 class="section-heading">Happy Path {{ i + 1 }}</h2>
          </div>
        </header>
        <div class="section-body">
          <div class="section-row section-row--nested">
            <div class="section-label section-label--nested">
              <h3 class="subsection-heading">{{ pair.happyPath.title }}</h3>
            </div>
            <div class="section-content">
              <ol class="path-list">
                <li
                  v-for="(step, j) in pair.happyPath.steps"
                  :key="j"
                  class="path-list__item"
                >
                  <span class="path-action">{{ step.action }}:</span>
                  <span class="path-element">"{{ step.element }}"</span>
                  <span class="path-type">{{ step.elementType }}</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== USER TASK — warm band ===== -->
      <section class="section section--full-width section--warm">
        <header class="section-header">
          <div class="section-label">
            <h2 class="section-heading">User Task {{ i + 1 }}</h2>
          </div>
        </header>
        <div class="section-body">
          <div class="section-row section-row--nested">
            <div class="section-label section-label--nested">
              <h3 class="subsection-heading">{{ pair.userTask.title }}</h3>
            </div>
            <div class="section-content">
              <div class="task-fields">
                <div class="task-field">
                  <span class="task-field__label">Context</span>
                  <p class="task-field__text">{{ pair.userTask.context }}</p>
                </div>
                <div class="task-field">
                  <span class="task-field__label">Scenario</span>
                  <p class="task-field__text">{{ pair.userTask.scenario }}</p>
                </div>
              </div>
              <div class="task-card">
                <span class="task-field__label">Task</span>
                <p class="task-field__text">{{ pair.userTask.task }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </article>
</template>

<style scoped>
/* ---- Happy path list ---- */
.path-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.path-list__item {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  padding: var(--space-sm) 0;
  border-bottom: var(--stroke-thin) solid var(--surface-400);
}

.path-list__item:last-child {
  border-bottom: none;
}

.path-action {
  font: var(--text-body-small);
  font-weight: 600;
  white-space: nowrap;
}

.path-element {
  font: var(--text-body-small);
  font-weight: 500;
}

.path-type {
  font: var(--text-meta-field-value);
  color: var(--gray-500);
  white-space: nowrap;
}

/* ---- User task fields ---- */
.task-fields {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
}

/* ---- User task card ---- */
.task-card {
  padding: var(--space-xl);
  border: var(--stroke-medium) solid var(--ink-900);
  background: var(--surface-200);
}

.task-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.task-field__label {
  font: var(--text-meta-era);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--gray-500);
}

.task-field__text {
  font: var(--text-body-default);
  margin: 0;
}
</style>
