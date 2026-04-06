<script setup lang="ts">
import Hero from '../components/Hero.vue'
import Section from '../components/Section.vue'
import SectionRow from '../components/SectionRow.vue'
import SpecsGrid from '../components/SpecsGrid.vue'
import { evolutionStages, secondarySkeuomorphs, inspirationSites, formFactors } from '../data/step-2-1'
</script>

<template>
  <article class="step-page">
    <!-- ===== HERO — warm dark band ===== -->
    <Hero part="2.1" intro="Identifying the physical artifacts that persist as metaphors in digital interfaces — and choosing which evolution to trace.">
      Project<br />Overview
    </Hero>

    <!-- ===== GOALS ===== -->
    <Section heading="Goals">
      <SectionRow>
        <div class="prose-group">
          <div class="prose-block">
            <h3 class="prose-block__heading">What do you hope to make?</h3>
            <p class="prose-block__text">
              A museum kiosk interface that serves as both wayfinding guide and
              collectible-driven exploration tool, greeting visitors at each
              exhibit entrance and inviting them to collect evolutionary stages as
              they explore.
            </p>
          </div>
          <div class="prose-block">
            <h3 class="prose-block__heading">Why does this project matter to you?</h3>
            <p class="prose-block__text">
              AI prompting is replacing the toolbars, rulers, and drop-down menus
              of traditional editors. If natural-language interaction removes the
              need for visual metaphors altogether, skeuomorphs may become
              artifacts themselves.
            </p>
          </div>
        </div>
      </SectionRow>
    </Section>

    <!-- ===== PRIMARY — warm dark band ===== -->
    <Section heading="Primary Skeuomorph" variant="dark">
      <SectionRow>
        <h3 class="primary-title">The WYSIWYG<br />Page Editor</h3>
        <div class="evolution-timeline">
          <div
            v-for="(stage, i) in evolutionStages"
            :key="stage"
            class="evo-stage"
          >
            <span class="evo-marker">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="evo-name">{{ stage }}</span>
          </div>
        </div>
        <p class="rationale rationale--light">
          The most popular and taken-for-granted skeuomorph in daily digital
          life — virtual pages mimic paper, clipboards reference paste-up
          boards, and font menus appear as mini type specimen books.
        </p>
      </SectionRow>
    </Section>

    <!-- ===== SECONDARY ===== -->
    <Section heading="Secondary Skeuomorphs">
      <SectionRow>
        <div class="secondary-grid">
          <div
            v-for="(s, i) in secondarySkeuomorphs"
            :key="s.name"
            class="card card--secondary"
          >
            <span class="card-number">{{ i + 1 }}</span>
            <div class="card-body">
              <div class="card-mapping">
                <span class="mapping-term">{{ s.name }}</span>
                <span class="mapping-arrow">→</span>
                <span class="mapping-term">{{ s.maps }}</span>
              </div>
              <p class="card-body__text">{{ s.description }}</p>
            </div>
          </div>
        </div>
        <p class="rationale">
          Each preserves a physical object — a shutter, an envelope, a handset —
          as a sound, icon, or gesture in software that no longer needs the
          original thing to function.
        </p>
      </SectionRow>
    </Section>

    <!-- ===== FORMAT ===== -->
    <Section heading="UX Format">
      <SectionRow>
        <div class="prose-group">
          <div class="prose-block">
            <h3 class="prose-block__heading">UX Pattern</h3>
            <p class="prose-block__text">Museum kiosk with wayfinding and collecting.</p>
          </div>
          <div class="prose-block">
            <h3 class="prose-block__heading">Media</h3>
            <p class="prose-block__text">Typography heavy; supporting design elements, shapes, gradients; icons and glyphs.</p>
          </div>
          <div class="prose-block">
            <h3 class="prose-block__heading">Why this format?</h3>
            <p class="prose-block__text">
              Each kiosk orients visitors to the room they're entering while
              offering collectible evolutionary stages, turning a passive gallery
              walk into an active scavenger hunt through design history.
            </p>
          </div>
        </div>
      </SectionRow>
    </Section>

    <!-- ===== SOURCES ===== -->
    <Section heading="Sources">
      <SectionRow>
        <div class="prose-group">
          <div class="prose-block">
            <h3 class="prose-block__heading">Informational</h3>
            <p class="prose-block__text">
              Letterform Archive<br />
              https://oa.letterformarchive.org/
            </p>
            <p class="prose-block__text">
              Computer History Museum<br />
              https://www.computerhistory.org/collections/catalog
            </p>
          </div>
          <div class="prose-block">
            <h3 class="prose-block__heading">Visual</h3>
            <p class="prose-block__text">
              I'm thinking I'll attempt to generate visuals with AI. I don't
              plan on having many images, but keeping them all consistent in
              visual style will be important to deliver a consistent user
              experience.
            </p>
          </div>
        </div>
        <p class="rationale">
          Each provides verifiable primary-source material. They also have
          discrete pieces of information, such as date, weight, creator,
          origin, category, make, model, serial numbers, and more
        </p>
      </SectionRow>
    </Section>

    <!-- ===== INSPIRATION — warm band ===== -->
    <Section heading="Inspiration" variant="warm">
      <SectionRow>
        <div class="inspiration-grid">
          <div
            v-for="site in inspirationSites"
            :key="site.name"
            class="card card--vertical"
          >
            <span class="inspiration-name">{{ site.name }}</span>
            <p class="inspiration-description">{{ site.description }}</p>
            <img :src="site.image" :alt="site.name" class="inspiration-image" />
          </div>
        </div>
      </SectionRow>
    </Section>

    <!-- ===== FORM FACTOR ===== -->
    <Section heading="Form Factor">
      <SectionRow>
        <SpecsGrid :items="formFactors" />
        <div class="prose-group">
          <div class="prose-block">
            <h3 class="prose-block__heading">Why portrait?</h3>
            <p class="prose-block__text">
              Portrait mirrors the vertical proportions of a physical page, the
              central artifact of the WYSIWYG skeuomorph. The fixed resolution
              allows precise positioning like a typeset museum placard.
            </p>
          </div>
          <div class="prose-block">
            <h3 class="prose-block__heading">Why a web app?</h3>
            <p class="prose-block__text">
              The kiosk needs room-specific content, collectible tracking, touch
              navigation without browser chrome, and inactivity resets — all
              requiring app-level state management.
            </p>
          </div>
          <div class="prose-block">
            <h3 class="prose-block__heading">Why coarse input?</h3>
            <p class="prose-block__text">
              Museum visitors expect to walk up and interact immediately with
              generously sized touch targets, echoing the tactile history of
              compositors physically handling type.
            </p>
          </div>
        </div>
      </SectionRow>
    </Section>

    <!-- ===== TITLE — warm dark band ===== -->
    <Section heading="Title" variant="title">
      <SectionRow>
        <div class="title-lockup">
          Before the Prompt:
          <br>
          <span class="sub-title">The Rise and Fall of Digital Icons</span>
        </div>
      </SectionRow>
    </Section>
  </article>
</template>

<style scoped>
/* ---- Primary — warm dark band content ---- */
.primary-title {
  font: var(--text-heading-670);
  color: var(--ink-100);
  margin: 0;
}

.evolution-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  border-left: var(--stroke-medium) solid var(--secondary-500);
  padding: var(--space-sm) 0;
  background: linear-gradient(
    to right,
    oklch(0 0 0 / 0.12) 0px,
    transparent 40px
  );
}

.evo-stage {
  display: flex;
  align-items: baseline;
  gap: var(--space-md);
  padding: var(--space-sm) 0 var(--space-sm) var(--space-lg);
  position: relative;
}

.evo-stage::before {
  content: '';
  position: absolute;
  left: -5px;
  top: 50%;
  width: var(--space-sm);
  height: var(--space-sm);
  background: var(--secondary-500);
  border-radius: 50%;
  transform: translateY(-50%);
}

.evo-marker {
  font: var(--text-meta-430);
  color: var(--ink-300);
  min-width: 20px;
}

.evo-name {
  font: var(--text-body-640);
  color: var(--ink-200);
}

/* ---- Secondary ---- */
.secondary-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.card-mapping {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  margin-bottom: var(--space-sm);
  font: var(--text-body-450);
}

.mapping-term {
  color: var(--ink-900);
}

.mapping-arrow {
  color: var(--secondary-500);
}

.card-body__text {
  font: var(--text-body-440);
  color: var(--ink-500);
}

/* ---- Inspiration cards (on warm band) ---- */
.inspiration-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);
}

.inspiration-name {
  font: var(--text-body-450);
}

.inspiration-description {
  font: var(--text-body-640);
}

.inspiration-image {
  width: 100%;
  display: block;
}

/* ---- Title lockup — warm dark band ---- */
.title-lockup {
  font: var(--text-heading-670);
  font-style: italic;
}

.sub-title {
  font: var(--text-heading-620);
  font-style: italic;
}

@media (max-width: 768px) {
  .inspiration-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .primary-title {
    font-size: 36px;
    line-height: 40px;
  }

  .title-lockup {
    font-size: 36px;
    line-height: 44px;
  }

  .sub-title {
    font-size: 28px;
  }
}
</style>
