<script setup lang="ts">
import { computed, ref } from 'vue'
import { findArtifact, findRoom, getAdjacentArtifacts } from '@shared/data/rooms'
import { useCollection } from '@shared/composables/useCollection'

const props = defineProps<{ artifactId: string; roomId: string }>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'navigate', artifactId: string): void
}>()

const { collect, isCollected } = useCollection()

const artifact = computed(() => findArtifact(props.artifactId))
const room = computed(() => findRoom(props.roomId))
const adjacent = computed(() =>
  artifact.value ? getAdjacentArtifacts(artifact.value) : { prev: undefined, next: undefined },
)

const showToast = ref(false)
const burstParticles = ref<{ id: number; dx: string; dy: string }[]>([])
let burstCounter = 0

function handleCollect() {
  if (!artifact.value) return
  const justCollected = collect(artifact.value)
  if (!justCollected) return

  // Burst particles
  const particles = []
  for (let i = 0; i < 12; i++) {
    const angle = (Math.PI * 2 * i) / 12
    const dist = 60 + Math.random() * 40
    particles.push({
      id: burstCounter++,
      dx: `${Math.cos(angle) * dist}px`,
      dy: `${Math.sin(angle) * dist}px`,
    })
  }
  burstParticles.value = particles
  setTimeout(() => {
    burstParticles.value = []
  }, 800)

  // Toast
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 2500)
}
</script>

<template>
  <div v-if="artifact && room" class="wf-modal">
    <!-- Top bar -->
    <div class="wf-modal__topbar">
      <div class="wf-modal__topbar-left">
        <button class="wf-modal__back" @click="emit('close')">←</button>
        <span class="wf-modal__breadcrumb">{{ room.name }}</span>
      </div>
      <span class="wf-modal__position">{{ artifact.stagePosition }}</span>
      <button class="wf-modal__close" @click="emit('close')">✕</button>
    </div>

    <!-- Scrollable body -->
    <div class="wf-modal__body">
      <!-- Hero -->
      <div class="wf-modal__hero-area">
        <span class="wf-modal__era">{{ artifact.era }}</span>
        <h1 class="wf-modal__name">{{ artifact.name }}</h1>
        <p class="wf-modal__summary">{{ artifact.summary }}</p>
        <div class="wf-modal__hero-img">Hero specimen illustration</div>
      </div>

      <hr class="wf-modal__divider wf-modal__divider--bold" />

      <!-- Catalog metadata -->
      <div>
        <p class="wf-modal__section-label">Catalog Fields</p>
        <div class="wf-meta-grid">
          <div class="wf-meta-row">
            <span class="wf-meta-row__label">Era</span>
            <span class="wf-meta-row__value">{{ artifact.era }}</span>
          </div>
          <div class="wf-meta-row">
            <span class="wf-meta-row__label">Date Range</span>
            <span class="wf-meta-row__value">{{ artifact.dateRange }}</span>
          </div>
          <div class="wf-meta-row">
            <span class="wf-meta-row__label">Stage</span>
            <span class="wf-meta-row__value">{{ artifact.stagePosition }}</span>
          </div>
          <div class="wf-meta-row">
            <span class="wf-meta-row__label">Medium / Material</span>
            <span class="wf-meta-row__value wf-meta-row__value--placeholder">
              [Specimen-specific]
            </span>
          </div>
          <div class="wf-meta-row">
            <span class="wf-meta-row__label">Input Method</span>
            <span class="wf-meta-row__value wf-meta-row__value--placeholder">
              [Specimen-specific]
            </span>
          </div>
          <div class="wf-meta-row">
            <span class="wf-meta-row__label">Innovation</span>
            <span class="wf-meta-row__value wf-meta-row__value--placeholder">
              [Specimen-specific]
            </span>
          </div>
          <div class="wf-meta-row">
            <span class="wf-meta-row__label">Skeuomorphic Echo</span>
            <span class="wf-meta-row__value">{{ artifact.echo }}</span>
          </div>
          <div class="wf-meta-row">
            <span class="wf-meta-row__label">Preceded By</span>
            <span class="wf-meta-row__value">
              <span
                v-if="adjacent.prev"
                class="wf-meta-row__link"
                @click="emit('navigate', adjacent.prev.id)"
              >
                ← {{ adjacent.prev.name }}
              </span>
              <span v-else class="wf-meta-row__value wf-meta-row__value--muted">— Origin point</span>
            </span>
          </div>
          <div class="wf-meta-row">
            <span class="wf-meta-row__label">Succeeded By</span>
            <span class="wf-meta-row__value">
              <span
                v-if="adjacent.next"
                class="wf-meta-row__link"
                @click="emit('navigate', adjacent.next.id)"
              >
                {{ adjacent.next.name }} →
              </span>
              <span v-else class="wf-meta-row__value wf-meta-row__value--muted">— Present day</span>
            </span>
          </div>
        </div>
      </div>

      <hr class="wf-modal__divider" />

      <!-- Collect -->
      <div class="wf-collect">
        <button
          class="wf-collect__btn"
          :class="{ 'wf-collect__btn--done': isCollected(artifact.id) }"
          @click="handleCollect"
        >
          {{ isCollected(artifact.id) ? '✓  Collected' : '＋  Collect This Artifact' }}
        </button>

        <!-- Burst particles -->
        <div
          v-for="p in burstParticles"
          :key="p.id"
          class="wf-burst__particle"
          :style="{ '--dx': p.dx, '--dy': p.dy, left: '50%', top: '50%' }"
        ></div>
      </div>

      <hr class="wf-modal__divider" />

      <!-- Prev / Next -->
      <div class="wf-artifact-nav">
        <button
          v-if="adjacent.prev"
          class="wf-artifact-nav__btn wf-artifact-nav__btn--prev"
          @click="emit('navigate', adjacent.prev.id)"
        >
          <span>←</span>
          <div>
            <span class="wf-artifact-nav__btn-label">Previous</span><br />
            {{ adjacent.prev.name }}
          </div>
        </button>
        <span v-else></span>

        <button
          v-if="adjacent.next"
          class="wf-artifact-nav__btn"
          @click="emit('navigate', adjacent.next.id)"
        >
          <div class="wf-artifact-nav__btn-text--right">
            <span class="wf-artifact-nav__btn-label">Next</span><br />
            {{ adjacent.next.name }}
          </div>
          <span>→</span>
        </button>
        <span v-else></span>
      </div>
    </div>

    <!-- Toast -->
    <Transition name="toast">
      <div v-if="showToast" class="wf-toast">
        ✓ &ensp; {{ artifact.name }} collected!
      </div>
    </Transition>
  </div>
</template>
