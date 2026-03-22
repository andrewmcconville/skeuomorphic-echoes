<script setup lang="ts">
import { glossaryEntries, type SourcePart } from '@shared/data/glossary'

function isCite(part: SourcePart): part is { cite: string } {
  return typeof part === 'object'
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const statusLabel: Record<string, string> = {
  active: 'Active',
  vestigial: 'Vestigial',
  extinct: 'Extinct',
  repurposed: 'Repurposed',
}
</script>

<template>
  <article class="glossary-page">
    <header class="glossary-header">
      <span class="header-ghost">§</span>
      <h1>Glossary of<br />Typographic Ghosts</h1>
      <p class="header-intro">
        Thirteen marks that once organized the written word by hand. Some survive
        in modern editors; others haunt our interfaces as invisible defaults.
      </p>
    </header>

    <!-- Table of contents -->
    <nav class="glossary-toc">
      <div class="toc-label">13 Entries</div>
      <div class="toc-grid">
        <a
          v-for="entry in glossaryEntries"
          :key="entry.id"
          href="#"
          class="toc-item"
          @click.prevent="scrollTo(entry.id)"
        >
          <span class="toc-char">{{ entry.char }}</span>
          <span>{{ entry.name }}</span>
        </a>
      </div>
    </nav>

    <!-- Entries -->
    <section
      v-for="entry in glossaryEntries"
      :key="entry.id"
      :id="entry.id"
      class="glyph-entry"
    >
      <div class="glyph-display">
        <span class="glyph-char">{{ entry.char }}</span>
        <span class="glyph-code">{{ entry.unicode }}</span>
      </div>

      <div class="glyph-body">
        <h2>{{ entry.name }}</h2>
        <div class="glyph-aliases">{{ entry.aliases.join(' · ') }}</div>
        <p class="glyph-familiar">{{ entry.familiar }}</p>

        <div class="glyph-section">
          <h3>Origin</h3>
          <dl>
            <dt>Era</dt>
            <dd>{{ entry.origin.era }}</dd>
            <dt>Context</dt>
            <dd>{{ entry.origin.context }}</dd>
            <dt>Etymology</dt>
            <dd>{{ entry.origin.etymology }}</dd>
          </dl>
        </div>

        <div class="glyph-section">
          <h3>Function</h3>
          <dl>
            <dt>Original</dt>
            <dd>{{ entry.function.original }}</dd>
            <dt>Modern</dt>
            <dd>{{ entry.function.modern }}</dd>
            <dt>Status</dt>
            <dd>
              <span :class="['status', `status--${entry.function.status}`]">
                {{ statusLabel[entry.function.status] }}
              </span>
              — {{ entry.function.statusNote }}
            </dd>
          </dl>
        </div>

        <div class="glyph-section">
          <h3>Presentational</h3>
          <dl>
            <dt>Best face</dt>
            <dd>{{ entry.presentational.bestFace }}</dd>
            <dt>Decorative use</dt>
            <dd>{{ entry.presentational.decorativeUse }}</dd>
          </dl>
        </div>

        <div class="glyph-section glyph-section--sources">
          <h3>Sources</h3>
          <ol>
            <li
              v-for="(src, i) in entry.sources"
              :key="i"
              :class="{ 'is-note': src.note }"
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
.glossary-page {
  padding: var(--space-3xl) var(--space-2xl);
}

/* ---- Header ---- */
.glossary-header {
  border-bottom: var(--stroke-medium) solid var(--ink-900);
  padding-bottom: var(--space-2xl);
  margin-bottom: var(--space-2xl);
  position: relative;
  overflow: hidden;
}

.header-ghost {
  position: absolute;
  top: -2rem;
  right: 0;
  font: var(--text-display-title);
  font-size: 240px;
  line-height: 1;
  opacity: 0.04;
  pointer-events: none;
  user-select: none;
}

.glossary-header h1 {
  font: var(--text-display-title);
  margin-bottom: var(--space-md);
}

.header-intro {
  font: var(--text-body-default);
  color: var(--gray-500);
  max-width: 65ch;
}

/* ---- TOC ---- */
.glossary-toc {
  margin-bottom: var(--space-2xl);
  padding: var(--space-xl);
  background: var(--surface-200);
  border: var(--stroke-thin) solid var(--surface-300);
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
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-sm) var(--space-xl);
}

.toc-item {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  font: var(--text-body-default);
  color: var(--ink-900);
  transition: color 0.15s;
}

.toc-item:hover {
  color: var(--orange-500);
}

.toc-char {
  font: var(--text-display-h2);
  font-size: 28px;
  width: 2.5rem;
  text-align: center;
  flex-shrink: 0;
}

/* ---- Entry ---- */
.glyph-entry {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 0 var(--space-2xl);
  padding: var(--space-2xl) 0;
  border-bottom: var(--stroke-thin) solid var(--surface-300);
}

.glyph-entry:last-of-type {
  border-bottom: var(--stroke-medium) solid var(--ink-900);
}

/* Glyph display */
.glyph-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
  position: sticky;
  top: var(--space-xl);
  align-self: start;
  padding-top: var(--space-sm);
}

.glyph-char {
  font: var(--text-display-title);
  font-weight: 100;
  font-size: 120px;
  line-height: 1.2;
}

.glyph-code {
  font: var(--text-meta-field-value);
  color: var(--gray-400);
  letter-spacing: 0.05em;
}

/* Body */
.glyph-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.glyph-body h2 {
  font: var(--text-display-h1);
  font-size: 36px;
  margin: 0;
}

.glyph-aliases {
  font: var(--text-body-default);
  font-style: italic;
  color: var(--gray-500);
  margin-top: calc(-1 * var(--space-md));
}

.glyph-familiar {
  font: var(--text-body-default);
  color: var(--ink-900);
  border-left: var(--stroke-medium) solid var(--orange-500);
  padding-left: var(--space-lg);
}

/* Sections */
.glyph-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.glyph-section h3 {
  font: var(--text-meta-field-label);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--orange-500);
}

.glyph-section dl {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: var(--space-xs) var(--space-lg);
}

.glyph-section dt {
  font: var(--text-body-default);
  font-weight: 500;
  color: var(--gray-500);
  white-space: nowrap;
}

.glyph-section dd {
  font: var(--text-body-default);
  line-height: 1.55;
}

/* Status */
.status {
  display: inline-block;
  font: var(--text-meta-field-value);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.2em 0.6em;
  border-radius: 2px;
  vertical-align: middle;
}

.status--active {
  background: oklch(0.55 0.1 145 / 0.1);
  color: oklch(0.55 0.1 145);
}

.status--vestigial {
  background: oklch(0.5 0.1 25 / 0.1);
  color: oklch(0.5 0.1 25);
}

.status--extinct {
  background: oklch(0 0 0 / 0.05);
  color: var(--gray-500);
}

.status--repurposed {
  background: oklch(0.5 0.1 260 / 0.1);
  color: oklch(0.5 0.1 260);
}

/* Sources */
.glyph-section--sources {
  padding-top: var(--space-md);
  border-top: 1px dashed var(--surface-300);
}

.glyph-section ol {
  list-style: none;
  counter-reset: source;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.glyph-section ol li {
  counter-increment: source;
  font: var(--text-body-small);
  color: var(--gray-500);
  line-height: 1.5;
  padding-left: var(--space-xl);
  position: relative;
}

.glyph-section ol li::before {
  content: counter(source) '.';
  position: absolute;
  left: 0;
  font: var(--text-meta-field-value);
  color: var(--orange-500);
}

.glyph-section ol cite {
  font-family: var(--font-display);
  font-style: italic;
}

.is-note {
  font-style: italic;
}
</style>
