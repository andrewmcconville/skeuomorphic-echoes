<script setup lang="ts">
import { computed } from 'vue'
import { findRoom } from '@shared/data/rooms'
import { useCollection } from '@shared/composables/useCollection'

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
  <div v-if="room" class="hf-room">
    <!-- Close -->
    <button class="hf-room__close" @click="emit('close')">&#x2715;</button>

    <!-- Dark hero band -->
    <div class="hf-room__hero">
      <p class="hf-room__label">Skeuomorph Room</p>
      <h2 class="hf-room__title">{{ room.name }}</h2>
      <p class="hf-room__thesis">{{ room.thesis }}</p>
    </div>

    <!-- Progress strip -->
    <div class="hf-room__progress">
      <div class="hf-room__progress-dots">
        <span
          v-for="artifact in room.artifacts"
          :key="artifact.id"
          class="hf-room__progress-dot"
          :class="{ 'hf-room__progress-dot--filled': isCollected(artifact.id) }"
        ></span>
      </div>
      <span class="hf-room__progress-text">
        {{ progress.collected }} / {{ progress.total }}
      </span>
    </div>

    <!-- Timeline -->
    <div class="hf-timeline">
      <div class="hf-timeline__line"></div>

      <div
        v-for="(artifact, i) in room.artifacts"
        :key="artifact.id"
        class="hf-timeline__node"
        :class="{
          'hf-timeline__node--right': i % 2 !== 0,
          'hf-timeline__node--collected': isCollected(artifact.id),
        }"
        :style="{ animationDelay: (i * 0.1) + 's' }"
      >
        <!-- Connector dot -->
        <div
          class="hf-timeline__dot"
          role="button"
          :tabindex="0"
          @click="(e: MouseEvent) => {
            const card = (e.currentTarget as HTMLElement).parentElement!.querySelector('.hf-timeline__card') as HTMLElement
            emit('open-artifact', artifact.id, card.getBoundingClientRect())
          }"
          @keydown.enter="(e: KeyboardEvent) => {
            const card = (e.currentTarget as HTMLElement).parentElement!.querySelector('.hf-timeline__card') as HTMLElement
            emit('open-artifact', artifact.id, card.getBoundingClientRect())
          }"
        >
          <span v-if="isCollected(artifact.id)">&#x2713;</span>
          <span v-else>{{ i + 1 }}</span>
        </div>

        <!-- Card -->
        <div
          class="hf-timeline__card"
          role="button"
          :tabindex="0"
          @click="(e: MouseEvent) => {
            emit('open-artifact', artifact.id, (e.currentTarget as HTMLElement).getBoundingClientRect())
          }"
          @keydown.enter="(e: KeyboardEvent) => {
            emit('open-artifact', artifact.id, (e.currentTarget as HTMLElement).getBoundingClientRect())
          }"
        >
          <div class="hf-timeline__card-img">
            {{ isCollected(artifact.id) ? '\u2713' : 'IMG' }}
          </div>
          <div class="hf-timeline__card-body">
            <span class="hf-timeline__era">{{ artifact.era }}</span>
            <span class="hf-timeline__name">{{ artifact.name }}</span>
            <span class="hf-timeline__summary">{{ artifact.summary }}</span>
          </div>
          <span class="hf-timeline__arrow">&rarr;</span>
        </div>
      </div>
    </div>

    <!-- Room description footer -->
    <p class="hf-room__desc">{{ room.description }}</p>
  </div>
</template>
