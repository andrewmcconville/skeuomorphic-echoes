<script setup lang="ts">
import { glossaryEntries, isCite, scrollToEntry, statusLabel } from '@shared/composables/useGlossary'

withDefaults(defineProps<{
  compact?: boolean
}>(), {
  compact: false,
})
</script>

<template>
  <div :class="['glossary-content', { 'glossary-content--compact': compact }]">
    <!-- ===== TABLE OF CONTENTS ===== -->
    <nav class="glossary-toc">
      <div class="glossary-toc__label">13 Entries</div>
      <div class="glossary-toc__grid">
        <a
          v-for="entry in glossaryEntries"
          :key="entry.id"
          href="#"
          class="glossary-toc__link"
          @click.prevent="scrollToEntry(entry.id)"
        >
          <span class="glossary-toc__char">{{ entry.char }}</span>
          <span class="glossary-toc__name">{{ entry.name }}</span>
        </a>
      </div>
    </nav>

    <!-- ===== ENTRIES ===== -->
    <section
      v-for="entry in glossaryEntries"
      :key="entry.id"
      :id="entry.id"
      class="glossary-entry"
    >
      <div class="glossary-entry__glyph">
        <span class="glossary-entry__char">{{ entry.char }}</span>
        <span class="glossary-entry__unicode">{{ entry.unicode }}</span>
      </div>

      <div class="glossary-entry__body">
        <h2 class="glossary-entry__name">{{ entry.name }}</h2>
        <div class="glossary-entry__aliases">{{ entry.aliases.join(' · ') }}</div>
        <p class="glossary-entry__familiar">{{ entry.familiar }}</p>

        <!-- Origin -->
        <div class="glossary-field">
          <div class="glossary-field__label">Origin</div>
          <dl class="glossary-field__list">
            <dt class="glossary-field__term">Era</dt>
            <dd class="glossary-field__def">{{ entry.origin.era }}</dd>
            <dt class="glossary-field__term">Context</dt>
            <dd class="glossary-field__def">{{ entry.origin.context }}</dd>
            <dt class="glossary-field__term">Etymology</dt>
            <dd class="glossary-field__def">{{ entry.origin.etymology }}</dd>
          </dl>
        </div>

        <!-- Function -->
        <div class="glossary-field">
          <div class="glossary-field__label">Function</div>
          <dl class="glossary-field__list">
            <dt class="glossary-field__term">Original</dt>
            <dd class="glossary-field__def">{{ entry.function.original }}</dd>
            <dt class="glossary-field__term">Modern</dt>
            <dd class="glossary-field__def">{{ entry.function.modern }}</dd>
            <dt class="glossary-field__term">Status</dt>
            <dd class="glossary-field__def">
              <span :class="['glossary-status', `glossary-status--${entry.function.status}`]">
                {{ statusLabel[entry.function.status] }}
              </span>
              — {{ entry.function.statusNote }}
            </dd>
          </dl>
        </div>

        <!-- Sources -->
        <div class="glossary-field glossary-field--sources">
          <div class="glossary-field__label">Sources</div>
          <ol class="glossary-sources">
            <li
              v-for="(src, i) in entry.sources"
              :key="i"
              :class="['glossary-sources__item', { 'glossary-sources__item--note': src.note }]"
            >
              <template v-for="(part, j) in src.parts" :key="j">
                <cite v-if="isCite(part)" class="glossary-sources__cite">{{ part.cite }}</cite>
                <template v-else>{{ part }}</template>
              </template>
            </li>
          </ol>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ---- Sizing tokens (full by default, compact overrides) ---- */
.glossary-content {
  --_glyph-col: 200px;
  --_char-size: 120px;
  --_field-col: 140px;
  --_toc-char-size: 28px;
  --_toc-char-width: 2.5rem;
  --_toc-cols: repeat(3, 1fr);
  --_toc-bg: var(--surface-light-300);
  --_toc-border: var(--stroke-thin) solid var(--ink-200);
  --_toc-padding: var(--space-xl);
  --_toc-margin: var(--space-2xl);
  --_toc-link-font: var(--text-body-640);
  --_body-gap: var(--space-xl);
  --_familiar-font: var(--text-body-640);
  --_familiar-padding: var(--space-lg);
  --_aliases-font: var(--text-body-640);
  --_aliases-offset: calc(-1 * var(--space-md));
  --_field-font: var(--text-body-640);
  --_entry-name-size: 36px;
}

.glossary-content--compact {
  --_glyph-col: 120px;
  --_char-size: 72px;
  --_field-col: 100px;
  --_toc-char-size: 18px;
  --_toc-char-width: 1.5rem;
  --_toc-cols: repeat(auto-fill, minmax(180px, 1fr));
  --_toc-bg: transparent;
  --_toc-border: none;
  --_toc-padding: var(--space-xl) 0;
  --_toc-margin: var(--space-lg);
  --_toc-link-font: var(--text-body-440);
  --_body-gap: var(--space-lg);
  --_familiar-font: var(--text-body-440);
  --_familiar-padding: var(--space-md);
  --_aliases-font: var(--text-body-440);
  --_aliases-offset: calc(-1 * var(--space-sm));
  --_field-font: var(--text-body-440);
  --_entry-name-size: 28px;
}

/* ---- TOC ---- */
.glossary-toc {
  padding: var(--_toc-padding);
  margin-bottom: var(--_toc-margin);
  background: var(--_toc-bg);
  border: var(--_toc-border);
  border-bottom: var(--stroke-thin) solid var(--ink-200);
}

.glossary-toc__label {
  font: var(--text-meta-440);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-400);
  margin-bottom: var(--space-md);
}

.glossary-toc__grid {
  display: grid;
  grid-template-columns: var(--_toc-cols);
  gap: var(--space-xs) var(--space-xl);
}

.glossary-toc__link {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  font: var(--_toc-link-font);
  color: var(--ink-900);
  transition: color 0.15s;
}

.glossary-toc__link:hover {
  color: var(--secondary-500);
}

.glossary-toc__char {
  font: var(--text-display-230);
  font-size: var(--_toc-char-size);
  width: var(--_toc-char-width);
  text-align: center;
  flex-shrink: 0;
}

.glossary-toc__name {
  font: var(--_toc-link-font);
}

/* ---- Entry ---- */
.glossary-entry {
  display: grid;
  grid-template-columns: var(--_glyph-col) 1fr;
  gap: 0 var(--space-2xl);
  padding: var(--space-2xl) 0;
  border-bottom: var(--stroke-thin) solid var(--ink-200);
}

.glossary-entry:last-of-type {
  border-bottom: var(--stroke-medium) solid var(--ink-900);
}

/* Glyph column */
.glossary-entry__glyph {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  position: sticky;
  top: var(--space-xl);
  align-self: start;
  padding-top: var(--space-sm);
}

.glossary-entry__char {
  font: var(--text-display-670);
  font-weight: 100;
  font-size: var(--_char-size);
  line-height: 1.2;
}

.glossary-entry__unicode {
  font: var(--text-meta-230);
  color: var(--ink-400);
  letter-spacing: 0.05em;
}

/* Body column */
.glossary-entry__body {
  display: flex;
  flex-direction: column;
  gap: var(--_body-gap);
}

.glossary-entry__name {
  font: var(--text-display-470);
  font-size: var(--_entry-name-size);
  margin: 0;
}

.glossary-entry__aliases {
  font: var(--_aliases-font);
  font-style: italic;
  color: var(--ink-500);
  margin-top: var(--_aliases-offset);
}

.glossary-entry__familiar {
  font: var(--_familiar-font);
  color: var(--ink-900);
  border-left: var(--stroke-medium) solid var(--secondary-500);
  padding-left: var(--_familiar-padding);
}

/* Field groups */
.glossary-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.glossary-field__label {
  font: var(--text-meta-440);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--secondary-500);
}

.glossary-field__list {
  display: grid;
  grid-template-columns: var(--_field-col) 1fr;
  gap: var(--space-xs) var(--space-md);
}

.glossary-field__term {
  font: var(--_field-font);
  font-weight: 500;
  color: var(--ink-500);
  white-space: nowrap;
}

.glossary-field__def {
  font: var(--_field-font);
  line-height: 1.55;
}

/* Status badges */
.glossary-status {
  display: inline-block;
  font: var(--text-meta-230);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.15em 0.5em;
  border-radius: var(--radius-xs);
  vertical-align: middle;
}

.glossary-status--thriving {
  background: oklch(0.76 0.14 75 / 0.1);
  color: var(--primary-500);
}

.glossary-status--adapted {
  background: oklch(0.76 0.14 75 / 0.1);
  color: var(--primary-500);
}

.glossary-status--endangered {
  background: oklch(0.63 0.15 50 / 0.1);
  color: var(--secondary-500);
}

.glossary-status--extinct {
  background: oklch(0 0 0 / 0.05);
  color: var(--ink-500);
}

/* Sources */
.glossary-field--sources {
  padding-top: var(--space-sm);
  border-top: var(--stroke-thin) dashed var(--ink-200);
}

.glossary-sources {
  list-style: none;
  counter-reset: source;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.glossary-sources__item {
  counter-increment: source;
  font: var(--text-body-440);
  color: var(--ink-500);
  line-height: 1.5;
  padding-left: var(--space-xl);
  position: relative;
}

.glossary-sources__item::before {
  content: counter(source) '.';
  position: absolute;
  left: 0;
  top: var(--space-xs);
  font: var(--text-meta-230);
  color: var(--secondary-500);
}

.glossary-sources__cite {
  font-family: var(--font-display);
  font-style: italic;
}

.glossary-sources__item--note {
  font-style: italic;
}
</style>
