<script setup lang="ts">
import type { LabelValue } from '../data/types'

const demographics: LabelValue[] = [
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

const goals = [
  'Discover the history behind familiar interface icons, sounds, and language.',
  'Save/collect references (artifacts, favorites, achievements) to revisit later.',
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
    <!-- ===== HERO — warm dark band ===== -->
    <header class="hero">
      <div class="hero-badge">
        <span class="badge-label">2.2</span>
      </div>
      <h1 class="hero-title">Persona</h1>
      <p class="hero-lead">
        Defining the target visitor — their goals, frustrations, and the
        experience they expect from a museum kiosk.
      </p>
    </header>


    <!-- ===== IDENTITY ===== -->
    <section class="section">
      <div class="section-panel"></div>
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading">Identity</h2>
        </div>
      </header>
      <div class="section-body">
        <div class="section-row">
          <div class="section-label">
            <h3 class="subsection-heading">Card</h3>
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
        </div>

        <div class="section-row">
          <div class="section-label">
            <h3 class="subsection-heading">Bio</h3>
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
        </div>
      </div>

    </section>

    <!-- ===== DEMOGRAPHICS ===== -->
    <section class="section">
      <div class="section-panel"></div>
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading">Demographics</h2>
        </div>
      </header>
      <div class="section-body">
        <div class="section-row">
          <div class="section-label">
            <h3 class="subsection-heading">Profile</h3>
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
        </div>
      </div>
    </section>

    <!-- ===== PSYCHOGRAPHICS ===== -->
    <section class="section">
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading">Psychographics</h2>
        </div>
      </header>
      <div class="section-body">
        <div class="section-row">
          <div class="section-label">
            <h3 class="subsection-heading">Interests</h3>
          </div>
          <div class="section-content">
            <div class="tags">
              <span v-for="t in interests" :key="t" class="tag">{{ t }}</span>
            </div>
          </div>
        </div>

        <div class="section-row">
          <div class="section-label">
            <h3 class="subsection-heading">Personality</h3>
          </div>
          <div class="section-content">
            <div class="tags">
              <span v-for="t in traits" :key="t" class="tag">{{ t }}</span>
            </div>
          </div>
        </div>

        <div class="section-row">
          <div class="section-label">
            <h3 class="subsection-heading">Brands</h3>
          </div>
          <div class="section-content">
            <div class="tags">
              <span v-for="b in brands" :key="b" class="tag tag--outline">{{ b }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== MOTIVATIONS ===== -->
    <section class="section">
      <div class="section-panel"></div>
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading">Motivations</h2>
        </div>
      </header>
      <div class="section-body">
        <div class="section-row">
          <div class="section-label">
            <h3 class="subsection-heading">Goals</h3>
          </div>
          <div class="section-content">
            <ol class="numbered-list">
              <li v-for="(g, i) in goals" :key="g">
                <span class="list-number">{{ i + 1 }}</span>
                <span>{{ g }}</span>
              </li>
            </ol>
          </div>
        </div>

        <div class="section-row">
          <div class="section-label">
            <h3 class="subsection-heading">Drivers</h3>
          </div>
          <div class="section-content">
            <ol class="numbered-list">
              <li v-for="(m, i) in motivations" :key="m">
                <span class="list-number">{{ i + 1 }}</span>
                <span>{{ m }}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== FRUSTRATIONS ===== -->
    <section class="section">
      <div class="section-panel"></div>
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading">Frustrations</h2>
        </div>
      </header>
      <div class="section-body">
        <div class="section-row">
          <div class="section-label">
            <h3 class="subsection-heading">Pain Points</h3>
          </div>
          <div class="section-content">
            <ol class="numbered-list">
              <li v-for="(f, i) in frustrations" :key="f">
                <span class="list-number">{{ i + 1 }}</span>
                <span>{{ f }}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== UX NEEDS ===== -->
    <section class="section">
      <header class="section-header">
        <div class="section-label">
          <h2 class="section-heading">UX Needs</h2>
        </div>
      </header>
      <div class="section-body">
        <div class="section-row">
          <div class="section-label">
            <h3 class="subsection-heading">Requirements</h3>
          </div>
          <div class="section-content">
            <div class="needs-grid">
              <div v-for="(n, i) in needs" :key="n" class="need-card">
                <span class="need-number">{{ i + 1 }}</span>
                <p>{{ n }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
/* ---- Divider ---- */
.divider-thin {
  height: var(--stroke-thin);
  background: var(--surface-300);
  margin: var(--space-lg) 0;
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
  margin-bottom: var(--space-2xs);
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
  gap: var(--space-2xs);
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

/* ---- Specs overrides ---- */
.spec-dots {
  min-width: 20px;
}

.spec-value {
  font-size: 14px;
  white-space: normal;
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

/* ---- Numbered lists ---- */
.numbered-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.numbered-list li {
  display: flex;
  align-items: baseline;
  gap: var(--space-md);
  font: var(--text-body-default);
}

.list-number {
  font: var(--text-display-h1);
  font-size: 28px;
  line-height: 1;
  color: var(--surface-400);
  min-width: 24px;
  flex-shrink: 0;
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
