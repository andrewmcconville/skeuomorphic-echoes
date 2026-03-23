<script setup lang="ts">
import HeroHeader from '../components/HeroHeader.vue'
import { glossaryEntries, isCite, scrollToEntry, statusLabel } from '@shared/composables/useGlossary'
</script>

<template>
  <article class="step-page">
    <!-- ===== HERO ===== -->
    <HeroHeader badge="§" lead="Thirteen marks that once organized the written word by hand. Some survive in modern editors; others haunt our interfaces as invisible defaults.">
      Glossary of<br />Typographic Ghosts
    </HeroHeader>

    <!-- ===== TABLE OF CONTENTS ===== -->
    <nav class="toc-band">
      <div class="toc-label">13 Entries</div>
      <div class="toc-grid">
        <a
          v-for="entry in glossaryEntries"
          :key="entry.id"
          href="#"
          class="toc-link"
          @click.prevent="scrollToEntry(entry.id)"
        >
          <span class="toc-char">{{ entry.char }}</span>
          <span class="toc-name">{{ entry.name }}</span>
        </a>
      </div>
    </nav>

    <!-- ===== ENTRIES ===== -->
    <section
      v-for="entry in glossaryEntries"
      :key="entry.id"
      :id="entry.id"
      class="entry"
    >
      <div class="entry-glyph">
        <span class="glyph-char">{{ entry.char }}</span>
        <span class="glyph-unicode">{{ entry.unicode }}</span>
      </div>

      <div class="entry-body">
        <h2 class="entry-name">{{ entry.name }}</h2>
        <div class="entry-aliases">{{ entry.aliases.join(' · ') }}</div>
        <p class="entry-familiar">{{ entry.familiar }}</p>

        <!-- Origin -->
        <div class="field-group">
          <div class="field-group-label">Origin</div>
          <dl class="field-list">
            <dt>Era</dt>
            <dd>{{ entry.origin.era }}</dd>
            <dt>Context</dt>
            <dd>{{ entry.origin.context }}</dd>
            <dt>Etymology</dt>
            <dd>{{ entry.origin.etymology }}</dd>
          </dl>
        </div>

        <!-- Function -->
        <div class="field-group">
          <div class="field-group-label">Function</div>
          <dl class="field-list">
            <dt>Original</dt>
            <dd>{{ entry.function.original }}</dd>
            <dt>Modern</dt>
            <dd>{{ entry.function.modern }}</dd>
            <dt>Status</dt>
            <dd>
              <span :class="['status-badge', `status-badge--${entry.function.status}`]">
                {{ statusLabel[entry.function.status] }}
              </span>
              — {{ entry.function.statusNote }}
            </dd>
          </dl>
        </div>

        <!-- Presentational -->
        <div class="field-group">
          <div class="field-group-label">Presentational</div>
          <dl class="field-list">
            <dt>Best face</dt>
            <dd>{{ entry.presentational.bestFace }}</dd>
            <dt>Decorative use</dt>
            <dd>{{ entry.presentational.decorativeUse }}</dd>
          </dl>
        </div>

        <!-- Sources -->
        <div class="field-group field-group--sources">
          <div class="field-group-label">Sources</div>
          <ol class="source-list">
            <li
              v-for="(src, i) in entry.sources"
              :key="i"
              :class="{ 'source-note': src.note }"
            >
              <template v-for="(part, j) in src.parts" :key="j">
                <cite v-if="isCite(part)">{{ part.cite }}</cite>
                <template v-else>{{ part }}</template>
              </template>
            </li>
          </ol>
        </div>
      </div>
    </section>
  </article>
</template>

<style scoped>
/* ---- TOC ---- */
.toc-band {
  padding: var(--space-xl) 0;
  margin-bottom: var(--space-lg);
  border-bottom: var(--stroke-thin) solid var(--surface-400);
}

.toc-label {
  font: var(--text-meta-field-label);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--gray-400);
  margin-bottom: var(--space-md);
}

.toc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: var(--space-xs) var(--space-xl);
}

.toc-link {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  font: var(--text-body-small);
  color: var(--ink-900);
  transition: color 0.15s;
}

.toc-link:hover {
  color: var(--orange-500);
}

.toc-char {
  font: var(--text-display-h2);
  font-size: 18px;
  width: 1.5rem;
  text-align: center;
  flex-shrink: 0;
}

.toc-name {
  font: var(--text-body-small);
}

/* ---- Entry ---- */
.entry {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 0 var(--space-2xl);
  padding: var(--space-2xl) 0;
  border-bottom: var(--stroke-thin) solid var(--surface-400);
}

.entry:last-of-type {
  border-bottom: var(--stroke-medium) solid var(--ink-900);
}

/* Glyph column */
.entry-glyph {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  position: sticky;
  top: var(--space-xl);
  align-self: start;
  padding-top: var(--space-sm);
}

.glyph-char {
  font: var(--text-display-title);
  font-weight: 100;
  font-size: 72px;
  line-height: 1.2;
}

.glyph-unicode {
  font: var(--text-meta-field-value);
  color: var(--gray-400);
  letter-spacing: 0.05em;
}

/* Body column */
.entry-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.entry-name {
  font: var(--text-display-h1);
  margin: 0;
}

.entry-aliases {
  font: var(--text-body-small);
  font-style: italic;
  color: var(--gray-500);
  margin-top: calc(-1 * var(--space-sm));
}

.entry-familiar {
  font: var(--text-body-small);
  color: var(--ink-900);
  border-left: var(--stroke-medium) solid var(--orange-500);
  padding-left: var(--space-md);
}

/* Field groups */
.field-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.field-group-label {
  font: var(--text-meta-field-label);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--orange-500);
}

.field-list {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: var(--space-xs) var(--space-md);
}

.field-list dt {
  font: var(--text-body-small);
  font-weight: 500;
  color: var(--gray-500);
  white-space: nowrap;
}

.field-list dd {
  font: var(--text-body-small);
  line-height: 1.55;
}

/* Status badges */
.status-badge {
  display: inline-block;
  font: var(--text-meta-field-value);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.15em 0.5em;
  border-radius: var(--radius-xs);
  vertical-align: middle;
}

.status-badge--active {
  background: var(--status-active-bg);
  color: var(--status-active);
}

.status-badge--vestigial {
  background: var(--status-vestigial-bg);
  color: var(--status-vestigial);
}

.status-badge--extinct {
  background: var(--status-extinct-bg);
  color: var(--gray-500);
}

.status-badge--repurposed {
  background: var(--status-repurposed-bg);
  color: var(--status-repurposed);
}

/* Sources */
.field-group--sources {
  padding-top: var(--space-sm);
  border-top: var(--stroke-thin) dashed var(--surface-400);
}

.source-list {
  list-style: none;
  counter-reset: source;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.source-list li {
  counter-increment: source;
  font: var(--text-body-small);
  font-size: 13px;
  color: var(--gray-500);
  line-height: 1.5;
  padding-left: var(--space-xl);
  position: relative;
}

.source-list li::before {
  content: counter(source) '.';
  position: absolute;
  left: 0;
  font: var(--text-meta-field-value);
  color: var(--orange-500);
}

.source-list cite {
  font-family: var(--font-display);
  font-style: italic;
}

.source-note {
  font-style: italic;
}
</style>
