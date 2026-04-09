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
  <div v-if="artifact && room" class="hf-modal">
    <!-- Top bar -->
    <div class="hf-modal__topbar">
      <div class="hf-modal__topbar-left">
        <button class="hf-modal__back" @click="emit('close')">&larr;</button>
        <span class="hf-modal__breadcrumb">{{ room.name }}</span>
      </div>
      <span class="hf-modal__position">{{ artifact.stagePosition }}</span>
      <button class="hf-modal__close" @click="emit('close')">&#x2715;</button>
    </div>

    <!-- Scrollable body -->
    <div class="hf-modal__body">
      <!-- Dark hero band -->
      <div class="hf-modal__hero">
        <span class="hf-modal__era">{{ artifact.era }}</span>
        <h1 class="hf-modal__name">{{ artifact.name }}</h1>
        <p class="hf-modal__summary">{{ artifact.summary }}</p>
        <div class="hf-modal__hero-img">Hero specimen illustration</div>
      </div>

      <!-- Content sections -->
      <div class="hf-modal__content">
        <!-- Skeuomorphic echo callout -->
        <div class="hf-echo">
          <p class="hf-echo__label">Skeuomorphic Echo</p>
          <p class="hf-echo__text">{{ artifact.echo }}</p>
        </div>

        <hr class="hf-modal__divider hf-modal__divider--bold" />

        <!-- Catalog metadata -->
        <div>
          <p class="hf-modal__section-label">Catalog Fields</p>
          <div class="hf-meta-grid">
            <div class="hf-meta-row">
              <span class="hf-meta-row__label">Era</span>
              <span class="hf-meta-row__value">{{ artifact.era }}</span>
            </div>
            <div class="hf-meta-row">
              <span class="hf-meta-row__label">Date Range</span>
              <span class="hf-meta-row__value">{{ artifact.dateRange }}</span>
            </div>
            <div class="hf-meta-row">
              <span class="hf-meta-row__label">Stage</span>
              <span class="hf-meta-row__value">{{ artifact.stagePosition }}</span>
            </div>
            <div class="hf-meta-row">
              <span class="hf-meta-row__label">Medium / Material</span>
              <span class="hf-meta-row__value hf-meta-row__value--placeholder">
                [Specimen-specific]
              </span>
            </div>
            <div class="hf-meta-row">
              <span class="hf-meta-row__label">Input Method</span>
              <span class="hf-meta-row__value hf-meta-row__value--placeholder">
                [Specimen-specific]
              </span>
            </div>
            <div class="hf-meta-row">
              <span class="hf-meta-row__label">Innovation</span>
              <span class="hf-meta-row__value hf-meta-row__value--placeholder">
                [Specimen-specific]
              </span>
            </div>
            <div class="hf-meta-row">
              <span class="hf-meta-row__label">Preceded By</span>
              <span class="hf-meta-row__value">
                <span
                  v-if="adjacent.prev"
                  class="hf-meta-row__link"
                  @click="emit('navigate', adjacent.prev.id)"
                >
                  &larr; {{ adjacent.prev.name }}
                </span>
                <span v-else class="hf-meta-row__value--placeholder">&mdash; Origin point</span>
              </span>
            </div>
            <div class="hf-meta-row">
              <span class="hf-meta-row__label">Succeeded By</span>
              <span class="hf-meta-row__value">
                <span
                  v-if="adjacent.next"
                  class="hf-meta-row__link"
                  @click="emit('navigate', adjacent.next.id)"
                >
                  {{ adjacent.next.name }} &rarr;
                </span>
                <span v-else class="hf-meta-row__value--placeholder">&mdash; Present day</span>
              </span>
            </div>
          </div>
        </div>

        <hr class="hf-modal__divider" />

        <!-- Collect -->
        <div class="hf-collect">
          <button
            class="hf-collect__btn"
            :class="{ 'hf-collect__btn--done': isCollected(artifact.id) }"
            @click="handleCollect"
          >
            {{ isCollected(artifact.id) ? '\u2713  Collected' : '\uff0b  Collect This Artifact' }}
          </button>

          <!-- Burst particles -->
          <div
            v-for="p in burstParticles"
            :key="p.id"
            class="hf-burst__particle"
            :style="{ '--dx': p.dx, '--dy': p.dy, left: '50%', top: '50%' }"
          ></div>
        </div>

        <hr class="hf-modal__divider" />

        <!-- Prev / Next -->
        <div class="hf-artifact-nav">
          <button
            v-if="adjacent.prev"
            class="hf-artifact-nav__btn hf-artifact-nav__btn--prev"
            @click="emit('navigate', adjacent.prev.id)"
          >
            <span>&larr;</span>
            <div>
              <span class="hf-artifact-nav__btn-label">Previous</span><br />
              {{ adjacent.prev.name }}
            </div>
          </button>
          <span v-else></span>

          <button
            v-if="adjacent.next"
            class="hf-artifact-nav__btn"
            @click="emit('navigate', adjacent.next.id)"
          >
            <div class="hf-artifact-nav__btn-text--right">
              <span class="hf-artifact-nav__btn-label">Next</span><br />
              {{ adjacent.next.name }}
            </div>
            <span>&rarr;</span>
          </button>
          <span v-else></span>
        </div>
      </div>
    </div>

    <!-- Toast -->
    <Transition name="toast">
      <div v-if="showToast" class="hf-toast">
        <span class="hf-toast__check">&#x2713;</span> {{ artifact.name }} collected!
      </div>
    </Transition>
  </div>
</template>
