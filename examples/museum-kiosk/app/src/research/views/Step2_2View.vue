<script setup lang="ts">
import Hero from '../components/Hero.vue'
import Section from '../components/Section.vue'
import SectionRow from '../components/SectionRow.vue'
import SpecsGrid from '../components/SpecsGrid.vue'
import { demographics, interests, traits, brands, goals, motivations, frustrations, needs } from '../data/step-2-2'
</script>

<template>
  <article class="step-page">
    <!-- ===== HERO — warm dark band ===== -->
    <Hero part="2.2" intro="Defining the target visitor — their goals, frustrations, and the experience they expect from a museum kiosk.">
      Persona
    </Hero>

    <!-- ===== IDENTITY ===== -->
    <Section heading="Identity">
      <SectionRow>
        <div class="identity-card">
          <div class="identity-top">
            <div class="identity-info">
              <h3 class="identity-name">Maya Rios</h3>
              <span class="pronoun">she / her</span>
            </div>
            <div class="identity-role">
              <span class="role-tag">Museum Goer</span>
            </div>
          </div>
          <div class="identity-org">
            <span class="datum-label">Organization</span>
            <span class="datum-value">Independent artist and maker</span>
          </div>
        </div>
      </SectionRow>

      <SectionRow label="Bio">
        <p class="bio">
          Maya just finished her MFA in Art &amp; Design + Technology and is
          decompressing by visiting museums and design exhibitions — part
          research, part therapy. She's obsessed with how interface conventions
          become "invisible culture," and she loves exhibits that treat everyday
          UI details like artifacts worth studying.
        </p>
      </SectionRow>

      <SectionRow label="Quote">
        <blockquote class="bio-quote">
          "I'm here for the details — show me the lineage, not just the label."
        </blockquote>
      </SectionRow>
    </Section>

    <!-- ===== DEMOGRAPHICS ===== -->
    <Section heading="Demographics">
      <SectionRow label="Profile">
        <SpecsGrid :items="demographics" dense />
      </SectionRow>
    </Section>

    <!-- ===== PSYCHOGRAPHICS ===== -->
    <Section heading="Psychographics" :panel="false">
      <SectionRow label="Interests">
        <div class="tags">
          <span v-for="t in interests" :key="t" class="tag">{{ t }}</span>
        </div>
      </SectionRow>

      <SectionRow label="Personality">
        <div class="tags">
          <span v-for="t in traits" :key="t" class="tag">{{ t }}</span>
        </div>
      </SectionRow>

      <SectionRow label="Brands">
        <div class="tags">
          <span v-for="b in brands" :key="b" class="tag tag--outline">{{ b }}</span>
        </div>
      </SectionRow>
    </Section>

    <!-- ===== MOTIVATIONS ===== -->
    <Section heading="Motivations">
      <SectionRow label="Goals">
        <ol class="numbered-list">
          <li v-for="(g, i) in goals" :key="g" class="numbered-list__item">
            <span class="list-number">{{ i + 1 }}</span>
            <span class="list-text">{{ g }}</span>
          </li>
        </ol>
      </SectionRow>

      <SectionRow label="Drivers">
        <ol class="numbered-list">
          <li v-for="(m, i) in motivations" :key="m" class="numbered-list__item">
            <span class="list-number">{{ i + 1 }}</span>
            <span class="list-text">{{ m }}</span>
          </li>
        </ol>
      </SectionRow>
    </Section>

    <!-- ===== FRUSTRATIONS ===== -->
    <Section heading="Frustrations">
      <SectionRow label="Pain Points">
        <ol class="numbered-list">
          <li v-for="(f, i) in frustrations" :key="f" class="numbered-list__item">
            <span class="list-number">{{ i + 1 }}</span>
            <span class="list-text">{{ f }}</span>
          </li>
        </ol>
      </SectionRow>
    </Section>

    <!-- ===== UX NEEDS ===== -->
    <Section heading="UX Needs" :panel="false">
      <SectionRow label="Requirements">
        <div class="needs-grid">
          <div v-for="(n, i) in needs" :key="n" class="card card--vertical">
            <span class="need-number">{{ i + 1 }}</span>
            <p class="card__text">{{ n }}</p>
          </div>
        </div>
      </SectionRow>
    </Section>
  </article>
</template>

<style scoped>
/* ---- Identity card ---- */
.identity-card {
  padding: var(--space-xl);
  border: var(--stroke-medium) solid var(--ink-900);
  background: var(--surface-light-300);
}

.identity-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: var(--space-lg);
}

.identity-name {
  font: var(--text-heading-470);
  margin-bottom: var(--space-2xs);
}

.pronoun {
  font: var(--text-meta-430);
  color: var(--ink-500);
}

.role-tag {
  font: var(--text-meta-540);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink-100);
  background: var(--ink-900);
  padding: var(--space-xs) var(--space-md);
}

.identity-org {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
}

/* ---- Bio ---- */
.bio {
  font: var(--text-body-640);
}

.bio-quote {
  font: var(--text-heading-230);
  font-style: italic;
  padding-left: var(--space-lg);
  border-left: var(--stroke-medium) solid var(--secondary-500);
  color: var(--ink-800);
}

/* ---- Needs grid ---- */
.needs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md);
}

.need-number {
  display: block;
  font: var(--text-heading-470);
  line-height: 1;
  color: var(--ink-300);
  margin-bottom: var(--space-sm);
}

.card__text {
  font: var(--text-body-440);
}

@media (max-width: 600px) {
  .needs-grid {
    grid-template-columns: 1fr;
  }
}
</style>
