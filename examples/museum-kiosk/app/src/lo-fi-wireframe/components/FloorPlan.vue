<script setup lang="ts">
import { rooms } from '../data/rooms'
import { useCollection } from '../composables/useCollection'

const { roomProgress } = useCollection()

defineEmits<{
  (e: 'open-room', roomId: string): void
}>()

const positions = ['wf-zone--tl', 'wf-zone--tr', 'wf-zone--bl', 'wf-zone--br'] as const
</script>

<template>
  <div class="wf-map__title">Before<br />the Prompt</div>
  <p class="wf-map__subtitle">
    The Rise &amp; Fall of Digital Icons — tap a room to begin your expedition.
  </p>
  <div class="wf-map__grid">
    <!-- Corridors -->
    <div class="wf-map__corridor"></div>
    <div class="wf-map__corridor wf-map__corridor--h"></div>

    <!-- Room zones -->
    <div
      v-for="(room, i) in rooms"
      :key="room.id"
      class="wf-zone"
      :class="[
        positions[i],
        { 'wf-zone--complete': roomProgress(room.id).collected === roomProgress(room.id).total },
      ]"
      role="button"
      :tabindex="0"
      @click="$emit('open-room', room.id)"
      @keydown.enter="$emit('open-room', room.id)"
    >
      <span class="wf-zone__name">{{ room.name }}</span>
      <span class="wf-zone__count">
        {{ roomProgress(room.id).collected }} / {{ roomProgress(room.id).total }} collected
      </span>
      <span class="wf-zone__progress">
        <span
          class="wf-zone__progress-fill"
          :style="{
            width:
              (roomProgress(room.id).collected / roomProgress(room.id).total) * 100 + '%',
          }"
        ></span>
      </span>
    </div>
  </div>
</template>
