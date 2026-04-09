<script setup lang="ts">
import { rooms } from '@shared/data/rooms'
import { useCollection } from '@shared/composables/useCollection'

const { roomProgress } = useCollection()

defineEmits<{
  (e: 'open-room', roomId: string): void
}>()

const positions = ['hf-zone--tl', 'hf-zone--tr', 'hf-zone--bl', 'hf-zone--br'] as const
</script>

<template>
  <div class="hf-map__title">Before<br />the Prompt</div>
  <p class="hf-map__subtitle">
    The Rise &amp; Fall of Digital Icons — tap a room to begin your expedition.
  </p>
  <div class="hf-map__grid">
    <!-- Corridors -->
    <div class="hf-map__corridor"></div>
    <div class="hf-map__corridor hf-map__corridor--h"></div>

    <!-- Room zones -->
    <div
      v-for="(room, i) in rooms"
      :key="room.id"
      class="hf-zone"
      :class="[
        positions[i],
        { 'hf-zone--complete': roomProgress(room.id).collected === roomProgress(room.id).total },
      ]"
      role="button"
      :tabindex="0"
      @click="$emit('open-room', room.id)"
      @keydown.enter="$emit('open-room', room.id)"
    >
      <span class="hf-zone__name">{{ room.name }}</span>
      <span class="hf-zone__count">
        {{ roomProgress(room.id).collected }} / {{ roomProgress(room.id).total }} collected
      </span>
      <span class="hf-zone__progress">
        <span
          class="hf-zone__progress-fill"
          :style="{
            width:
              (roomProgress(room.id).collected / roomProgress(room.id).total) * 100 + '%',
          }"
        ></span>
      </span>
    </div>
  </div>
</template>
