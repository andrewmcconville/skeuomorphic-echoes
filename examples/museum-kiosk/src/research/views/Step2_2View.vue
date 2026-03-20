<script setup lang="ts">
const demographics = [
  { label: 'Age', value: '27–33' },
  { label: 'Location', value: 'Chicago / Milwaukee corridor' },
  { label: 'Education', value: 'MFA (completed within the last year)' },
  { label: 'Occupation', value: 'Independent designer/artist; freelance + residencies + short contracts' },
  { label: 'Income', value: 'Variable / project-based' },
  { label: 'Tech comfort', value: 'High (creative tools, prototyping, AR/interactive exhibits)' },
  { label: 'Device habits', value: 'iPhone daily; photographs labels/screens; saves links/notes immediately' },
  { label: 'Accessibility', value: 'Mild sensory overload in crowded galleries — prefers clear UI, low-friction flow' },
  { label: 'Schedule', value: 'Visits in 30–60 minute loops; wants a satisfying "complete one chain" option' },
]

const interests = [
  'Interface archaeology',
  'Design history',
  'Archives',
  'Sound objects',
  'Interaction design',
]

const traits = [
  'Curious',
  'Critical',
  'Aesthetic-driven',
  'Systems-minded',
  'Impatient with sloppy design',
]

const brands = [
  'Teenage Engineering',
  'MUJI',
  'Braun / Dieter Rams',
  'IKEA',
  'Apple (selectively)',
]

const motivations = [
  'Builds a personal archive of design references for inspiration, talks, and fun.',
  'Enjoys systems-thinking: timelines, taxonomies, tech trees, provenance.',
  'Loves minimal, engineered aesthetics and objects that feel like instruments.',
]

const frustrations = [
  'Over-explaining and academic walls of text that kill momentum.',
  'Confusing navigation or interactions that don\'t pay off.',
  'Visual clutter, weak hierarchy, inconsistent UI patterns.',
]

const needs = [
  'A crisp intro definition + immediate "Start exploring" action.',
  'Clear orientation at all times: where am I, what era is this, what\'s next.',
  'Skimmable content with optional depth (expand/collapse, "show more context").',
  'Progress feedback (timeline position, visited states, collection status).',
]
</script>

<template>
  <article class="step-page">
    <!-- Hero -->
    <header class="hero">
      <div class="hero-meta">
        <span class="step-number">2.2</span>
        <span class="step-label">Process Step</span>
      </div>
      <h1>Persona</h1>
      <p class="hero-lead">
        Defining the target visitor — their goals, frustrations, and the
        experience they expect from a museum kiosk.
      </p>
    </header>

    <div class="divider"></div>

    <!-- Identity -->
    <section class="section-row">
      <div class="section-label">
        <h2 class="section-heading">Identity</h2>
      </div>
      <div class="section-content">
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
      </div>
    </section>

    <div class="divider"></div>

    <!-- Bio -->
    <section class="section-row">
      <div class="section-label">
        <h2 class="section-heading">Bio</h2>
      </div>
      <div class="section-content">
        <p class="bio">
          Maya just finished her MFA in Art &amp; Design + Technology and is
          decompressing by visiting museums and design exhibitions — part
          research, part therapy. She's obsessed with how interface conventions
          become "invisible culture," and she loves exhibits that treat everyday
          UI details like artifacts worth studying.
        </p>
        <blockquote>
          "I'm here for the details — show me the lineage, not just the label."
        </blockquote>
      </div>
    </section>

    <div class="divider"></div>

    <!-- Demographics -->
    <section class="section-row">
      <div class="section-label">
        <h2 class="section-heading">Demographics</h2>
      </div>
      <div class="section-content">
        <div class="specs-grid">
          <div v-for="d in demographics" :key="d.label" class="spec">
            <span class="spec-label">{{ d.label }}</span>
            <span class="spec-dots"></span>
            <span class="spec-value">{{ d.value }}</span>
          </div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- Psychographics -->
    <section class="section-row">
      <div class="section-label">
        <h2 class="section-heading">Psychographics</h2>
      </div>
      <div class="section-content">
        <div class="tag-group">
          <span class="tag-label">Interests</span>
          <div class="tags">
            <span v-for="t in interests" :key="t" class="tag">{{ t }}</span>
          </div>
        </div>
        <div class="tag-group">
          <span class="tag-label">Personality</span>
          <div class="tags">
            <span v-for="t in traits" :key="t" class="tag">{{ t }}</span>
          </div>
        </div>
        <div class="tag-group">
          <span class="tag-label">Brands</span>
          <div class="tags">
            <span v-for="b in brands" :key="b" class="tag tag--outline">{{ b }}</span>
          </div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <!-- Goals & Motivations -->
    <section class="section-row">
      <div class="section-label">
        <h2 class="section-heading">Motivations</h2>
      </div>
      <div class="section-content">
        <div class="goal-list">
          <div class="goal-item">
            <span class="goal-icon">◎</span>
            <span>Discover the history behind familiar interface icons, sounds, and language.</span>
          </div>
          <div class="goal-item">
            <span class="goal-icon">◎</span>
            <span>Save/collect references (artifacts, favorites, achievements) to revisit later.</span>
          </div>
        </div>

        <div class="divider-thin"></div>

        <ul class="detail-list">
          <li v-for="m in motivations" :key="m">{{ m }}</li>
        </ul>
      </div>
    </section>

    <div class="divider"></div>

    <!-- Frustrations -->
    <section class="section-row">
      <div class="section-label">
        <h2 class="section-heading">Frustrations</h2>
      </div>
      <div class="section-content">
        <ul class="detail-list detail-list--frustration">
          <li v-for="f in frustrations" :key="f">{{ f }}</li>
        </ul>
      </div>
    </section>

    <div class="divider"></div>

    <!-- Needs -->
    <section class="section-row">
      <div class="section-label">
        <h2 class="section-heading">UX Needs</h2>
      </div>
      <div class="section-content">
        <div class="needs-grid">
          <div v-for="(n, i) in needs" :key="n" class="need-card">
            <span class="need-number">{{ i + 1 }}</span>
            <p>{{ n }}</p>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
.step-page {
  max-width: 820px;
}

/* ---- Hero ---- */
.hero {
  margin-bottom: var(--space-2xl);
}

.hero-meta {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}

.step-number {
  font: var(--text-display-title);
  font-size: 56px;
  line-height: 1;
  color: var(--ink-900);
}

.step-label {
  font: var(--text-meta-field-label);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--gray-400);
  align-self: flex-end;
  margin-bottom: 8px;
}

h1 {
  font: var(--text-display-title);
  margin-bottom: var(--space-md);
}

.hero-lead {
  font: var(--text-body-default);
  color: var(--gray-500);
  max-width: 560px;
}

/* ---- Divider ---- */
.divider {
  height: var(--stroke-medium);
  background: var(--ink-900);
  margin: var(--space-2xl) 0;
}

.divider-thin {
  height: var(--stroke-thin);
  background: var(--surface-300);
  margin: var(--space-lg) 0;
}

/* ---- Section row ---- */
.section-row {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: var(--space-2xl);
}

.section-label {
  padding-top: 2px;
}

.section-heading {
  font: var(--text-display-h2);
  font-size: 18px;
  line-height: 24px;
  color: var(--ink-800);
  margin: 0;
}

.section-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

/* ---- Identity card ---- */
.identity-card {
  padding: var(--space-xl);
  border: var(--stroke-medium) solid var(--ink-900);
  background: var(--surface-200);
}

.identity-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: var(--space-lg);
}

.identity-name {
  font: var(--text-display-h1);
  margin-bottom: 2px;
}

.pronoun {
  font: var(--text-meta-field-value);
  color: var(--gray-500);
}

.role-tag {
  font: var(--text-meta-era);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--surface-100);
  background: var(--ink-900);
  padding: 4px 12px;
}

.identity-org {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.datum-label {
  font: var(--text-meta-field-label);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--gray-400);
}

.datum-value {
  font: var(--text-body-default);
  font-size: 16px;
}

/* ---- Bio ---- */
.bio {
  font: var(--text-body-default);
}

blockquote {
  font: var(--text-display-h2);
  font-style: italic;
  padding-left: var(--space-lg);
  border-left: var(--stroke-medium) solid var(--orange-500);
  color: var(--ink-800);
}

/* ---- Specs grid (dotted leaders) ---- */
.specs-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.spec {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
}

.spec-label {
  font: var(--text-meta-field-label);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--gray-500);
  white-space: nowrap;
}

.spec-dots {
  flex: 1;
  border-bottom: 1px dotted var(--surface-400);
  margin-bottom: 3px;
  min-width: 20px;
}

.spec-value {
  font: var(--text-body-small);
  font-size: 14px;
}

/* ---- Tags ---- */
.tag-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.tag-label {
  font: var(--text-meta-field-label);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--gray-400);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.tag {
  font: var(--text-meta-era);
  font-size: 12px;
  letter-spacing: 0.05em;
  padding: 4px 10px;
  background: var(--surface-300);
  color: var(--ink-900);
}

.tag--outline {
  background: transparent;
  border: var(--stroke-thin) solid var(--surface-400);
  color: var(--gray-500);
}

/* ---- Goals ---- */
.goal-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.goal-item {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  font: var(--text-body-default);
}

.goal-icon {
  color: var(--amber-500);
  font-size: 14px;
  flex-shrink: 0;
}

/* ---- Detail lists ---- */
.detail-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.detail-list li {
  font: var(--text-body-small);
  color: var(--gray-500);
  padding-left: var(--space-md);
  position: relative;
}

.detail-list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--surface-400);
}

.detail-list--frustration li::before {
  content: '×';
  color: var(--orange-500);
}

/* ---- Needs grid ---- */
.needs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md);
}

.need-card {
  padding: var(--space-lg);
  border: var(--stroke-thin) solid var(--surface-300);
  background: var(--surface-100);
}

.need-number {
  display: block;
  font: var(--text-display-h1);
  font-size: 28px;
  line-height: 1;
  color: var(--surface-400);
  margin-bottom: var(--space-sm);
}

.need-card p {
  font: var(--text-body-small);
}
</style>
