<script setup lang="ts">
import { rooms } from '@shared/data/rooms'
import { useCollection } from '@shared/composables/useCollection'

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'open-artifact', roomId: string, artifactId: string): void
}>()

const { isCollected, roomProgress, totalCollected, totalArtifacts } = useCollection()
</script>

<template>
  <div class="hf-drawer">
    <div class="hf-drawer__header">
      <h2 class="hf-drawer__title">Artifact Collection</h2>
      <button class="hf-drawer__close" @click="emit('close')">&#x2715;</button>
    </div>

    <div class="hf-drawer__body">
      <!-- Overall progress -->
      <div class="hf-coll-summary">
        <p class="hf-coll-summary__count">
          {{ totalCollected }} / {{ totalArtifacts }}
        </p>
        <p class="hf-coll-summary__label">
          artifacts collected
        </p>
      </div>

      <!-- Room groups -->
      <div v-for="room in rooms" :key="room.id">
        <p class="hf-coll-group__title">{{ room.name }}</p>
        <p class="hf-coll-group__progress">
          {{ roomProgress(room.id).collected }} / {{ roomProgress(room.id).total }}
        </p>

        <div
          v-for="artifact in room.artifacts"
          :key="artifact.id"
          class="hf-coll-item"
          :class="{
            'hf-coll-item--locked': !isCollected(artifact.id),
            'hf-coll-item--collected': isCollected(artifact.id),
          }"
          role="button"
          :tabindex="isCollected(artifact.id) ? 0 : -1"
          @click="isCollected(artifact.id) && emit('open-artifact', room.id, artifact.id)"
          @keydown.enter="isCollected(artifact.id) && emit('open-artifact', room.id, artifact.id)"
        >
          <div class="hf-coll-item__icon">
            {{ isCollected(artifact.id) ? '\u2713' : '?' }}
          </div>
          <span class="hf-coll-item__name">
            {{ isCollected(artifact.id) ? artifact.name : '???' }}
          </span>
          <span class="hf-coll-item__badge">
            {{ isCollected(artifact.id) ? 'Collected' : 'Locked' }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
