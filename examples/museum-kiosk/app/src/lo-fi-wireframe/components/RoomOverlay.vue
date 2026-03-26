<script setup lang="ts">
import { computed } from 'vue'
import { findRoom } from '../data/rooms'
import { useCollection } from '../composables/useCollection'

const props = defineProps<{ roomId: string }>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'open-artifact', artifactId: string, cardRect: DOMRect): void
}>()

const room = computed(() => findRoom(props.roomId))
const { roomProgress, isCollected } = useCollection()
const progress = computed(() => roomProgress(props.roomId))
</script>

<template>
  <div v-if="room" class="wf-room">
    <!-- Close -->
    <button class="wf-room__close" @click="emit('close')">✕</button>

    <!-- Big typographic header -->
    <div class="wf-room__hero">
      <p class="wf-room__label">Skeuomorph Room</p>
      <h2 class="wf-room__title">{{ room.name }}</h2>
      <p class="wf-room__thesis">{{ room.thesis }}</p>
    </div>

    <!-- Progress strip -->
    <div class="wf-room__progress">
      <div class="wf-room__progress-dots">
        <span
          v-for="artifact in room.artifacts"
          :key="artifact.id"
          class="wf-room__progress-dot"
          :class="{ 'wf-room__progress-dot--filled': isCollected(artifact.id) }"
        ></span>
      </div>
      <span class="wf-room__progress-text">
        {{ progress.collected }} / {{ progress.total }}
      </span>
    </div>

    <!-- Timeline -->
    <div class="wf-timeline">
      <div class="wf-timeline__line"></div>

      <div
        v-for="(artifact, i) in room.artifacts"
        :key="artifact.id"
        class="wf-timeline__node"
        :class="{
          'wf-timeline__node--right': i % 2 !== 0,
          'wf-timeline__node--collected': isCollected(artifact.id),
        }"
        :style="{ animationDelay: (i * 0.1) + 's' }"
      >
        <!-- Connector dot on the timeline -->
        <div
          class="wf-timeline__dot"
          role="button"
          :tabindex="0"
          @click="(e: MouseEvent) => {
            const card = (e.currentTarget as HTMLElement).parentElement!.querySelector('.wf-timeline__card') as HTMLElement
            emit('open-artifact', artifact.id, card.getBoundingClientRect())
          }"
          @keydown.enter="(e: KeyboardEvent) => {
            const card = (e.currentTarget as HTMLElement).parentElement!.querySelector('.wf-timeline__card') as HTMLElement
            emit('open-artifact', artifact.id, card.getBoundingClientRect())
          }"
        >
          <span v-if="isCollected(artifact.id)">✓</span>
          <span v-else>{{ i + 1 }}</span>
        </div>

        <!-- Card -->
        <div
          class="wf-timeline__card"
          role="button"
          :tabindex="0"
          @click="(e: MouseEvent) => {
            emit('open-artifact', artifact.id, (e.currentTarget as HTMLElement).getBoundingClientRect())
          }"
          @keydown.enter="(e: KeyboardEvent) => {
            emit('open-artifact', artifact.id, (e.currentTarget as HTMLElement).getBoundingClientRect())
          }"
        >
          <div class="wf-timeline__card-img">
            {{ isCollected(artifact.id) ? '✓' : 'IMG' }}
          </div>
          <div class="wf-timeline__card-body">
            <span class="wf-timeline__era">{{ artifact.era }}</span>
            <span class="wf-timeline__name">{{ artifact.name }}</span>
            <span class="wf-timeline__summary">{{ artifact.summary }}</span>
          </div>
          <span class="wf-timeline__arrow">→</span>
        </div>
      </div>
    </div>

    <!-- Room description at the bottom -->
    <p class="wf-room__desc">{{ room.description }}</p>
  </div>
</template>
