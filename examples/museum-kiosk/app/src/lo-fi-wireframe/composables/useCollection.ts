import { reactive, computed } from 'vue'
import { rooms, type Artifact } from '../data/rooms'

/** Reactive set of collected artifact IDs — persists across overlay changes */
const collected = reactive(new Set<string>())

export function useCollection() {
  const totalArtifacts = rooms.reduce((sum, r) => sum + r.artifacts.length, 0)

  function collect(artifact: Artifact): boolean {
    if (collected.has(artifact.id)) return false
    collected.add(artifact.id)
    return true
  }

  function isCollected(id: string): boolean {
    return collected.has(id)
  }

  function roomProgress(roomId: string): { collected: number; total: number } {
    const room = rooms.find((r) => r.id === roomId)
    if (!room) return { collected: 0, total: 0 }
    const count = room.artifacts.filter((a) => collected.has(a.id)).length
    return { collected: count, total: room.artifacts.length }
  }

  const totalCollected = computed(() => collected.size)
  const allCollected = computed(() => collected.size === totalArtifacts)

  return {
    collect,
    isCollected,
    roomProgress,
    totalCollected,
    totalArtifacts,
    allCollected,
  }
}
