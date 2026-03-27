<script setup lang="ts">
import HeroHeader from '../components/HeroHeader.vue'
import SectionBlock from '../components/SectionBlock.vue'
import SubsectionRow from '../components/SubsectionRow.vue'
import { pairs } from '../data/step-2-4'
</script>

<template>
  <article class="step-page">
    <!-- ===== HERO — warm dark band ===== -->
    <HeroHeader badge="2.4" lead="Two primary paths through the kiosk, each paired with a scripted user task for think-aloud testing.">
      Happy Paths &amp;<br />User Tasks
    </HeroHeader>

    <template v-for="(pair, i) in pairs" :key="i">
      <!-- ===== HAPPY PATH ===== -->
      <SectionBlock :heading="`Happy Path ${i + 1}`">
        <SubsectionRow>
          <div class="prose-block">
            <h3 class="prose-block__heading">{{ pair.happyPath.title }}</h3>
          </div>
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
        </SubsectionRow>
      </SectionBlock>

      <!-- ===== USER TASK — warm band ===== -->
      <SectionBlock :heading="`User Task ${i + 1}`" variant="warm">
        <SubsectionRow>
          <div class="prose-block">
            <h3 class="prose-block__heading">{{ pair.userTask.title }}</h3>
          </div>
          <div class="prose-group">
            <div class="prose-block">
              <h3 class="prose-block__heading">Context</h3>
              <p class="prose-block__text">{{ pair.userTask.context }}</p>
            </div>
            <div class="prose-block">
              <h3 class="prose-block__heading">Scenario</h3>
              <p class="prose-block__text">{{ pair.userTask.scenario }}</p>
            </div>
          </div>
          <div class="task-card">
            <h3 class="prose-block__heading">Task</h3>
            <p class="prose-block__text">{{ pair.userTask.task }}</p>
          </div>
        </SubsectionRow>
      </SectionBlock>
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
  border-bottom: var(--stroke-thin) solid var(--ink-200);
}

.path-list__item:last-child {
  border-bottom: none;
}

.path-action {
  font: var(--text-body-440);
  font-weight: 600;
  white-space: nowrap;
}

.path-element {
  font: var(--text-body-440);
  font-weight: 500;
}

.path-type {
  font: var(--text-meta-430);
  color: var(--ink-500);
  white-space: nowrap;
}

/* ---- User task card ---- */
.task-card {
  padding: var(--space-xl);
  border: var(--stroke-medium) solid var(--ink-900);
  background: var(--surface-light-200);
}

@media (max-width: 600px) {
  .path-list__item {
    flex-wrap: wrap;
  }

  .task-card {
    padding: var(--space-lg);
  }
}
</style>
