<script setup lang="ts">
import HeroHeader from '../components/HeroHeader.vue'
import SectionBlock from '../components/SectionBlock.vue'
import SubsectionRow from '../components/SubsectionRow.vue'
import SpecsGrid from '../components/SpecsGrid.vue'
import {
  screens, modals, rooms,
  homeContent, collectionContent, aboutContent, glossaryContent,
  roomLandingContent, interiorCore, interiorActions, interiorCatalog,
} from '../data/step-2-3'
</script>

<template>
  <article class="step-page">
    <!-- ===== HERO — warm dark band ===== -->
    <HeroHeader badge="2.3" lead="Mapping every screen, overlay, and content element the kiosk needs — from the floor-plan home screen down to individual specimen catalog fields.">
      Sitemap &amp;<br />Content Inventory
    </HeroHeader>

    <!-- ===== SITEMAP ===== -->
    <SectionBlock heading="Sitemap" :panel="false">
      <SubsectionRow label="Structure">
        <div class="sitemap-tree">
          <div class="tree-level tree-level--top">
            <div class="tree-node tree-node--secondary">Artifact Collection</div>
            <div class="tree-node tree-node--secondary">About</div>
            <div class="tree-node tree-node--secondary">Glossary</div>
          </div>
          <div class="tree-connector">▲</div>
          <div class="tree-level">
            <div class="tree-node tree-node--home">Floor Plan Map<span class="node-tag">Home</span></div>
          </div>
          <div class="tree-connector">▼</div>
          <div class="tree-level tree-level--rooms">
            <div v-for="room in rooms" :key="room.name" class="tree-node tree-node--room">
              {{ room.name }}
            </div>
          </div>
          <div class="tree-connector">▼</div>
          <div class="tree-level">
            <div class="tree-node tree-node--leaf">Evolutionary Stages (×20)</div>
          </div>
        </div>
      </SubsectionRow>
    </SectionBlock>

    <!-- ===== SCREENS ===== -->
    <SectionBlock heading="Screens">
      <SubsectionRow label="Pages">
        <div class="screen-table">
          <div class="screen-header">
            <span class="col-name">Screen</span>
            <span class="col-type">Type</span>
            <span class="col-notes">Notes</span>
          </div>
          <div v-for="s in screens" :key="s.name" class="screen-row">
            <span class="col-name">{{ s.name }}</span>
            <span class="col-type">{{ s.type }}</span>
            <span class="col-notes">{{ s.notes }}</span>
          </div>
        </div>
      </SubsectionRow>
    </SectionBlock>

    <!-- ===== MODALS & OVERLAYS ===== -->
    <SectionBlock heading="Modals">
      <SubsectionRow label="Overlays">
        <div class="screen-table">
          <div class="screen-header">
            <span class="col-name">Element</span>
            <span class="col-type">Type</span>
            <span class="col-notes">Notes</span>
          </div>
          <div v-for="m in modals" :key="m.name" class="screen-row">
            <span class="col-name">{{ m.name }}</span>
            <span class="col-type">{{ m.type }}</span>
            <span class="col-notes">{{ m.notes }}</span>
          </div>
        </div>
      </SubsectionRow>
    </SectionBlock>

    <!-- ===== HOME SCREEN ===== -->
    <SectionBlock heading="Home">
      <SubsectionRow label="Fields">
        <SpecsGrid :items="homeContent" dense />
      </SubsectionRow>
    </SectionBlock>

    <!-- ===== SKEUOMORPH ROOM — warm band ===== -->
    <SectionBlock heading="Skeuomorph Room" variant="warm">
      <SubsectionRow label="Fields">
        <SpecsGrid :items="roomLandingContent" dense />
      </SubsectionRow>

      <SubsectionRow label="Skeuomorph Rooms">
        <div class="room-cards">
          <div v-for="(room, i) in rooms" :key="room.name" class="card card--vertical card--room">
            <div class="room-card-header">
              <span class="room-number">{{ i + 1 }}</span>
              <span class="room-name">{{ room.name }}</span>
            </div>
            <div class="room-stages">
              <span
                v-for="(stage, j) in room.stages"
                :key="stage"
                class="stage-chip"
              >
                <span class="stage-index">{{ j + 1 }}</span>
                {{ stage }}
              </span>
            </div>
          </div>
        </div>
      </SubsectionRow>
    </SectionBlock>

    <!-- ===== ARTIFACT — dark band ===== -->
    <SectionBlock heading="Artifact" variant="dark">
      <SubsectionRow label="Core Fields" :light-label="true">
        <SpecsGrid :items="interiorCore" dense light />
      </SubsectionRow>

      <SubsectionRow label="Catalog Fields" :light-label="true">
        <div class="catalog-groups">
          <div v-for="group in interiorCatalog" :key="group.group" class="catalog-group">
            <h4 class="catalog-group-title">{{ group.group }}</h4>
            <div class="catalog-fields">
              <span v-for="field in group.fields" :key="field" class="catalog-field">
                {{ field }}
              </span>
            </div>
          </div>
        </div>
      </SubsectionRow>

      <SubsectionRow label="Actions" :light-label="true">
        <SpecsGrid :items="interiorActions" dense light />
      </SubsectionRow>
    </SectionBlock>

    <!-- ===== ARTIFACT COLLECTION ===== -->
    <SectionBlock heading="Artifact Collection">
      <SubsectionRow label="Fields">
        <SpecsGrid :items="collectionContent" dense />
      </SubsectionRow>
    </SectionBlock>

    <!-- ===== ABOUT ===== -->
    <SectionBlock heading="About">
      <SubsectionRow label="Fields">
        <SpecsGrid :items="aboutContent" dense />
      </SubsectionRow>
    </SectionBlock>

    <!-- ===== GLOSSARY ===== -->
    <SectionBlock heading="Glossary">
      <SubsectionRow label="Fields">
        <SpecsGrid :items="glossaryContent" dense />
      </SubsectionRow>
    </SectionBlock>
  </article>
</template>

<style scoped>
/* ---- Sitemap tree ---- */
.sitemap-tree {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-xl) 0;
}

.tree-level {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
}

.tree-level--top {
  gap: var(--space-xl);
}

.tree-level--rooms {
  gap: var(--space-sm);
}

.tree-connector {
  font-size: 12px;
  color: var(--ink-300);
  line-height: 1;
}

.tree-node {
  font: var(--text-meta-540);
  font-size: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: var(--space-sm) var(--space-md);
  border: var(--stroke-medium) solid var(--ink-900);
  background: var(--surface-light-200);
  text-align: center;
  width: 140px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tree-node--home {
  background: var(--primary-500);
  color: var(--ink-900);
  font-size: 14px;
  font-weight: 600;
  width: 200px;
  flex-direction: column;
}

.node-tag {
  display: block;
  font-size: 10px;
  font-weight: 400;
  color: var(--ink-800);
  margin-top: var(--space-2xs);
}

.tree-node--room {
  background: var(--surface-light-300);
}

.tree-node--secondary {
  border-style: dashed;
  color: var(--ink-500);
}

.tree-node--leaf {
  border-style: dotted;
  color: var(--ink-500);
  font-size: 12px;
}

/* ---- Screen table ---- */
.screen-table {
  display: flex;
  flex-direction: column;
}

.screen-header,
.screen-row {
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  gap: var(--space-md);
  padding: var(--space-sm) 0;
}

.screen-header {
  border-bottom: var(--stroke-medium) solid var(--ink-900);
  font: var(--text-meta-440);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ink-500);
  padding-bottom: var(--space-sm);
}

.screen-row {
  border-bottom: var(--stroke-thin) solid var(--ink-200);
}

.col-name {
  font: var(--text-body-440);
  font-weight: 500;
}

.col-type {
  font: var(--text-meta-430);
  color: var(--ink-500);
}

.col-notes {
  font: var(--text-body-440);
  font-size: 13px;
  color: var(--ink-500);
}

/* ---- Room cards ---- */
.room-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md);
}

.card--room {
  box-shadow: var(--shadow-card-sm) var(--surface-light-400);
}

.room-card-header {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}

.room-number {
  font: var(--text-display-470);
  font-size: 28px;
  line-height: 1;
  color: var(--ink-300);
}

.room-name {
  font: var(--text-body-350);
  font-size: 14px;
  font-weight: 500;
}

.room-stages {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.stage-chip {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  font: var(--text-body-440);
  font-size: 13px;
  color: var(--ink-500);
}

.stage-index {
  font: var(--text-meta-430);
  color: var(--ink-300);
  min-width: 14px;
}

/* ---- Catalog groups ---- */
.catalog-groups {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.catalog-group-title {
  font: var(--text-meta-540);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink-300);
  margin-bottom: var(--space-xs);
}

.catalog-fields {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.catalog-field {
  font: var(--text-meta-430);
  color: var(--ink-200);
  padding: var(--space-xs) var(--space-sm);
  border: var(--stroke-thin) solid var(--ink-300);
}
</style>
