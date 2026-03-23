<script setup lang="ts">
import { demographics, interests, traits, brands, goals, motivations, frustrations, needs } from '../data/step-2-2'
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
        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
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

        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
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
            <blockquote class="bio-quote">
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
        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
            <h3 class="subsection-heading">Profile</h3>
          </div>
          <div class="section-content">
            <div class="specs-grid specs-grid--dense">
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
        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
            <h3 class="subsection-heading">Interests</h3>
          </div>
          <div class="section-content">
            <div class="tags">
              <span v-for="t in interests" :key="t" class="tag">{{ t }}</span>
            </div>
          </div>
        </div>

        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
            <h3 class="subsection-heading">Personality</h3>
          </div>
          <div class="section-content">
            <div class="tags">
              <span v-for="t in traits" :key="t" class="tag">{{ t }}</span>
            </div>
          </div>
        </div>

        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
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
        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
            <h3 class="subsection-heading">Goals</h3>
          </div>
          <div class="section-content">
            <ol class="numbered-list">
              <li v-for="(g, i) in goals" :key="g" class="numbered-list__item">
                <span class="list-number">{{ i + 1 }}</span>
                <span class="list-text">{{ g }}</span>
              </li>
            </ol>
          </div>
        </div>

        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
            <h3 class="subsection-heading">Drivers</h3>
          </div>
          <div class="section-content">
            <ol class="numbered-list">
              <li v-for="(m, i) in motivations" :key="m" class="numbered-list__item">
                <span class="list-number">{{ i + 1 }}</span>
                <span class="list-text">{{ m }}</span>
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
        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
            <h3 class="subsection-heading">Pain Points</h3>
          </div>
          <div class="section-content">
            <ol class="numbered-list">
              <li v-for="(f, i) in frustrations" :key="f" class="numbered-list__item">
                <span class="list-number">{{ i + 1 }}</span>
                <span class="list-text">{{ f }}</span>
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
        <div class="section-row section-row--nested">
          <div class="section-label section-label--nested">
            <h3 class="subsection-heading">Requirements</h3>
          </div>
          <div class="section-content">
            <div class="needs-grid">
              <div v-for="(n, i) in needs" :key="n" class="card card--vertical">
                <span class="need-number">{{ i + 1 }}</span>
                <p class="card__text">{{ n }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
/* ---- Identity card ---- */
.identity-card {
  padding: var(--space-xl);
  border: var(--stroke-medium) solid var(--ink-900);
  background: var(--surface-300);
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
  color: var(--surface-200);
  background: var(--ink-900);
  padding: var(--space-xs) 12px;
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

.bio-quote {
  font: var(--text-display-h2);
  font-style: italic;
  padding-left: var(--space-lg);
  border-left: var(--stroke-medium) solid var(--orange-500);
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
  font: var(--text-display-h1);
  font-size: 28px;
  line-height: 1;
  color: var(--surface-500);
  margin-bottom: var(--space-sm);
}

.card__text {
  font: var(--text-body-small);
}
</style>
