<script setup lang="ts">
import { rooms } from '../data/rooms'
import { useCollection } from '../composables/useCollection'

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'open-artifact', roomId: string, artifactId: string): void
}>()

const { isCollected, roomProgress, totalCollected, totalArtifacts } = useCollection()
</script>

<template>
  <div class="wf-drawer">
    <div class="wf-drawer__header">
      <h2 class="wf-drawer__title">Artifact Collection</h2>
      <button class="wf-drawer__close" @click="emit('close')">✕</button>
    </div>

    <div class="wf-drawer__body">
      <!-- Overall progress -->
      <div>
        <p style="font: 700 16px/1 'IBM Plex Mono', monospace; color: #333">
          {{ totalCollected }} / {{ totalArtifacts }}
        </p>
        <p style="font: 400 13px/1 'IBM Plex Mono', monospace; color: #aaa; margin-top: 4px">
          artifacts collected
        </p>
      </div>

      <!-- Room groups -->
      <div v-for="room in rooms" :key="room.id">
        <p class="wf-coll-group__title">{{ room.name }}</p>
        <p class="wf-coll-group__progress">
          {{ roomProgress(room.id).collected }} / {{ roomProgress(room.id).total }}
        </p>

        <div
          v-for="artifact in room.artifacts"
          :key="artifact.id"
          class="wf-coll-item"
          :class="{ 'wf-coll-item--locked': !isCollected(artifact.id) }"
          role="button"
          :tabindex="isCollected(artifact.id) ? 0 : -1"
          @click="isCollected(artifact.id) && emit('open-artifact', room.id, artifact.id)"
        >
          <div class="wf-coll-item__icon">
            {{ isCollected(artifact.id) ? '✓' : '?' }}
          </div>
          <span class="wf-coll-item__name">
            {{ isCollected(artifact.id) ? artifact.name : '???' }}
          </span>
          <span class="wf-coll-item__badge">
            {{ isCollected(artifact.id) ? 'Collected' : 'Locked' }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
