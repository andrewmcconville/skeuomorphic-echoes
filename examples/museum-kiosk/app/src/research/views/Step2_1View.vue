<script setup lang="ts">
import HeroHeader from '../components/HeroHeader.vue'
import SectionBlock from '../components/SectionBlock.vue'
import SubsectionRow from '../components/SubsectionRow.vue'
import SpecsGrid from '../components/SpecsGrid.vue'
import { evolutionStages, secondarySkeuomorphs, inspirationSites, formFactors } from '../data/step-2-1'
</script>

<template>
  <article class="step-page">
    <!-- ===== HERO — warm dark band ===== -->
    <HeroHeader badge="2.1" lead="Identifying the physical artifacts that persist as metaphors in digital interfaces — and choosing which evolution to trace.">
      Skeuomorph<br />Selection
    </HeroHeader>

    <!-- ===== GOALS ===== -->
    <SectionBlock heading="Goals">
      <SubsectionRow>
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
      </SubsectionRow>
    </SectionBlock>

    <!-- ===== PRIMARY — warm dark band ===== -->
    <SectionBlock heading="Primary Skeuomorph" variant="dark">
      <template #headerContent>
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
      </template>
    </SectionBlock>

    <!-- ===== SECONDARY ===== -->
    <SectionBlock heading="Secondary Skeuomorphs">
      <SubsectionRow>
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
      </SubsectionRow>
    </SectionBlock>

    <!-- ===== FORMAT ===== -->
    <SectionBlock heading="UX Format">
      <SubsectionRow>
        <div class="prose-group">
          <div class="prose-block">
            <h3 class="prose-block__heading">UX Pattern</h3>
            <p class="prose-block__text">Museum kiosk with wayfinding and collecting</p>
          </div>
          <div class="prose-block">
            <h3 class="prose-block__heading">Media</h3>
            <p class="prose-block__text">Typographic primary, supported by historical photography, diagrams, and floor-plan maps</p>
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
      </SubsectionRow>
    </SectionBlock>

    <!-- ===== SOURCES ===== -->
    <SectionBlock heading="Sources">
      <SubsectionRow>
        <div class="prose-group">
          <div class="prose-block">
            <h3 class="prose-block__heading">Informational</h3>
            <p class="prose-block__text">
              Bringhurst's <em>The Elements of Typographic Style</em>, the
              Letterform Archive's online collection, and the Computer History
              Museum's desktop publishing archives.
            </p>
          </div>
          <div class="prose-block">
            <h3 class="prose-block__heading">Visual</h3>
            <p class="prose-block__text">
              The Letterform Archive's digitized type specimens, the Computer
              History Museum's early DTP screenshots, and archive.org for
              scanned specimen books and software documentation.
            </p>
          </div>
        </div>
        <p class="rationale">
          Each provides verifiable primary-source material. Bringhurst is the
          canonical typographic reference, the Letterform Archive holds over
          100,000 original design objects, and the Computer History Museum
          documented the DTP revolution firsthand.
        </p>
      </SubsectionRow>
    </SectionBlock>

    <!-- ===== INSPIRATION — warm band ===== -->
    <SectionBlock heading="Inspiration" variant="warm">
      <template #headerContent>
        <div class="inspiration-grid">
          <a
            v-for="site in inspirationSites"
            :key="site.url"
            :href="site.url"
            target="_blank"
            rel="noopener"
            class="inspiration-card"
          >
            <span class="inspiration-name">{{ site.name }}</span>
            <span class="inspiration-arrow">↗</span>
            <p class="inspiration-note">{{ site.note }}</p>
          </a>
        </div>
      </template>
    </SectionBlock>

    <!-- ===== FORM FACTOR ===== -->
    <SectionBlock heading="Form Factor">
      <SubsectionRow>
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
      </SubsectionRow>
    </SectionBlock>

    <!-- ===== TITLE — warm dark band ===== -->
    <SectionBlock heading="Title" variant="dark" class="section--title">
      <template #headerContent>
        <div class="title-lockup">
          <em>Before the Prompt:<br />The Rise and Fall of Digital Icons</em>
        </div>
      </template>
    </SectionBlock>
  </article>
</template>

<style scoped>
/* ---- Section variant: title ---- */
.section--title {
  background: var(--warm-dark);
  position: relative;
  overflow: hidden;
}

/* ---- Primary — warm dark band content ---- */
.primary-title {
  font: var(--text-display-title);
  color: var(--surface-200);
  margin: 0;
}

.evolution-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  border-left: var(--stroke-medium) solid var(--orange-500);
  margin-left: var(--space-sm);
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
  background: var(--orange-500);
  border-radius: 50%;
  transform: translateY(-50%);
}

.evo-marker {
  font: var(--text-meta-field-value);
  color: var(--surface-500);
  min-width: 20px;
}

.evo-name {
  font: var(--text-body-default);
  color: var(--surface-200);
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
  font: var(--text-ui-nav);
  font-size: 14px;
}

.mapping-term {
  font-weight: 500;
  color: var(--ink-900);
}

.mapping-arrow {
  color: var(--orange-500);
}

.card-body__text {
  font: var(--text-body-small);
  color: var(--gray-500);
}

/* ---- Inspiration cards (on warm band) ---- */
.inspiration-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
}

.inspiration-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  padding: var(--space-lg);
  border: var(--stroke-medium) solid var(--ink-900);
  background: var(--surface-100);
  position: relative;
  box-shadow: var(--shadow-card-sm) var(--surface-400);
  transition: transform 0.15s, box-shadow 0.15s;
}

.inspiration-card:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-card-hover) var(--surface-500);
}

.inspiration-name {
  font: var(--text-ui-nav);
  font-size: 14px;
  font-weight: 500;
}

.inspiration-arrow {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  font-size: 14px;
  color: var(--gray-400);
  transition: color 0.15s;
}

.inspiration-card:hover .inspiration-arrow {
  color: var(--orange-500);
}

.inspiration-note {
  font: var(--text-body-small);
  font-size: 13px;
  color: var(--gray-500);
}

/* ---- Title lockup — warm dark band ---- */
.title-lockup {
  font: var(--text-display-h1);
  font-size: 36px;
  line-height: 44px;
  color: var(--surface-200);
  position: relative;
  padding-left: var(--space-2xl);
}
</style>
