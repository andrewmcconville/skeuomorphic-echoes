<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCollection } from './composables/useCollection'
import FloorPlan from './components/FloorPlan.vue'
import RoomOverlay from './components/RoomOverlay.vue'
import ArtifactModal from './components/ArtifactModal.vue'
import CollectionDrawer from './components/CollectionDrawer.vue'
import AboutDrawer from './components/AboutDrawer.vue'
import GlossaryDrawer from './components/GlossaryDrawer.vue'

/* ── Route-driven overlay state ────────────
   The route is the single source of truth.
   Overlay visibility is computed from it.
   ──────────────────────────────────────── */

const route = useRoute()
const router = useRouter()

const activeRoomId = computed(() => {
  const name = route.name
  if (name === 'room' || name === 'artifact') return route.params.roomId as string
  return null
})

const activeArtifactId = computed(() => {
  if (route.name === 'artifact') return route.params.artifactId as string
  return null
})

type Drawer = 'collection' | 'about' | 'glossary'
const drawers: readonly string[] = ['collection', 'about', 'glossary']

const activeDrawer = computed<Drawer | null>(() => {
  const name = route.name as string
  return drawers.includes(name) ? (name as Drawer) : null
})

const hasOverlay = computed(
  () => !!activeRoomId.value || !!activeDrawer.value,
)

/* ── FLIP origin rect for artifact modal ── */

const canvasRef = ref<HTMLElement | null>(null)
const originRect = ref<{ top: number; left: number; width: number; height: number } | null>(null)

/* ── Navigation helpers (push routes) ── */

function openRoom(roomId: string) {
  router.push(`/room/${roomId}`)
}

function closeRoom() {
  router.push('/')
}

function openArtifact(artifactId: string, cardRect?: DOMRect) {
  if (cardRect && canvasRef.value) {
    const canvasRect = canvasRef.value.getBoundingClientRect()
    originRect.value = {
      top: cardRect.top - canvasRect.top,
      left: cardRect.left - canvasRect.left,
      width: cardRect.width,
      height: cardRect.height,
    }
  } else {
    originRect.value = null
  }
  router.push(`/room/${activeRoomId.value}/artifact/${artifactId}`)
}

function closeArtifact() {
  if (activeRoomId.value) {
    router.push(`/room/${activeRoomId.value}`)
  } else {
    router.push('/')
  }
}

function navigateArtifact(artifactId: string) {
  originRect.value = null
  router.replace(`/room/${activeRoomId.value}/artifact/${artifactId}`)
}

function openDrawer(drawer: Drawer) {
  router.push(`/${drawer}`)
}

function closeDrawer() {
  router.push('/')
}

function openArtifactFromCollection(roomId: string, artifactId: string) {
  originRect.value = null
  router.push(`/room/${roomId}/artifact/${artifactId}`)
}

/* ── FLIP transition hooks for artifact modal ──
   The modal always renders at its natural CSS size (centered, 1200px wide,
   auto height). We use transform to visually place it at the card's
   position, then animate the transform back to identity.
   ──────────────────────────────────────────────── */

function flipTransform(el: HTMLElement): string | null {
  if (!originRect.value || !canvasRef.value) return null

  const canvasRect = canvasRef.value.getBoundingClientRect()
  const finalRect = el.getBoundingClientRect()
  const o = originRect.value

  const finalCX = finalRect.left - canvasRect.left + finalRect.width / 2
  const finalCY = finalRect.top - canvasRect.top + finalRect.height / 2
  const originCX = o.left + o.width / 2
  const originCY = o.top + o.height / 2

  const dx = originCX - finalCX
  const dy = originCY - finalCY
  const sx = o.width / finalRect.width
  const sy = o.height / finalRect.height

  return `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(${sx}, ${sy})`
}

function onModalBeforeEnter(el: Element) {
  const htmlEl = el as HTMLElement
  htmlEl.style.opacity = '0'
}

function onModalEnter(el: Element, done: () => void) {
  const htmlEl = el as HTMLElement
  void htmlEl.offsetHeight

  const inverse = flipTransform(htmlEl)

  if (inverse) {
    htmlEl.style.transition = 'none'
    htmlEl.style.transform = inverse
    htmlEl.style.opacity = '1'
    htmlEl.style.overflow = 'hidden'
    void htmlEl.offsetHeight

    htmlEl.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.15s ease'
    htmlEl.style.transform = 'translate(-50%, -50%)'
  } else {
    htmlEl.style.transition = 'none'
    htmlEl.style.transform = 'translate(-50%, -50%) scale(0.92)'
    void htmlEl.offsetHeight

    htmlEl.style.transition = 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease'
    htmlEl.style.transform = 'translate(-50%, -50%)'
    htmlEl.style.opacity = '1'
  }

  function cleanup() {
    htmlEl.style.cssText = ''
    done()
  }

  htmlEl.addEventListener('transitionend', function handler(e) {
    if (e.target !== htmlEl || e.propertyName !== 'transform') return
    htmlEl.removeEventListener('transitionend', handler)
    cleanup()
  })
  setTimeout(cleanup, 500)
}

function onModalLeave(el: Element, done: () => void) {
  const htmlEl = el as HTMLElement

  const inverse = flipTransform(htmlEl)

  if (inverse) {
    htmlEl.style.overflow = 'hidden'
    htmlEl.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.6, 1), opacity 0.25s ease'
    htmlEl.style.transform = inverse
    htmlEl.style.opacity = '0'
  } else {
    htmlEl.style.transition = 'transform 0.25s ease-in, opacity 0.2s ease'
    htmlEl.style.transform = 'translate(-50%, -50%) scale(0.92)'
    htmlEl.style.opacity = '0'
  }

  htmlEl.addEventListener('transitionend', function handler(e) {
    if (e.target !== htmlEl || e.propertyName !== 'transform') return
    htmlEl.removeEventListener('transitionend', handler)
    done()
  })
  setTimeout(done, 400)
}

/* ── HUD bounce ── */

const { totalCollected, totalArtifacts } = useCollection()
const counterBounce = ref(false)

watch(totalCollected, () => {
  counterBounce.value = true
  setTimeout(() => {
    counterBounce.value = false
  }, 500)
})

/* ── Keyboard: Escape to close top layer ── */

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    if (activeArtifactId.value) closeArtifact()
    else if (activeRoomId.value) closeRoom()
    else if (activeDrawer.value) closeDrawer()
  }
}
</script>

<template>
  <div ref="canvasRef" class="wf-canvas" @keydown="onKeydown" tabindex="-1">
    <!-- ── Always-present floor plan ── -->
    <div class="wf-map" :class="{ 'wf-map--dimmed': hasOverlay }">
      <FloorPlan @open-room="openRoom" />
    </div>

    <!-- ── Floating HUD ── -->
    <div class="wf-hud">
      <div
        class="wf-hud__counter"
        :class="{ 'wf-hud__counter--bounce': counterBounce }"
        role="button"
        tabindex="0"
        @click="openDrawer('collection')"
      >
        <span>{{ totalCollected }} / {{ totalArtifacts }}</span>
      </div>
      <div class="wf-hud__nav">
        <button class="wf-hud__btn" title="Glossary" @click="openDrawer('glossary')">G</button>
        <button class="wf-hud__btn" title="About" @click="openDrawer('about')">?</button>
      </div>
    </div>

    <!-- ── Backdrop ── -->
    <Transition name="backdrop">
      <div v-if="hasOverlay" class="wf-backdrop" @click="activeRoomId ? closeRoom() : closeDrawer()"></div>
    </Transition>

    <!-- ── Room overlay ── -->
    <Transition name="room">
      <RoomOverlay
        v-if="activeRoomId"
        :key="activeRoomId"
        :room-id="activeRoomId"
        @close="closeRoom"
        @open-artifact="openArtifact"
      />
    </Transition>

    <!-- ── Artifact modal (FLIP from card) ── -->
    <Transition
      :css="false"
      @before-enter="onModalBeforeEnter"
      @enter="onModalEnter"
      @leave="onModalLeave"
    >
      <ArtifactModal
        v-if="activeArtifactId && activeRoomId"
        :key="activeArtifactId"
        :artifact-id="activeArtifactId"
        :room-id="activeRoomId"
        @close="closeArtifact"
        @navigate="navigateArtifact"
      />
    </Transition>

    <!-- ── Drawers (slide from right) ── -->
    <Transition name="drawer">
      <CollectionDrawer
        v-if="activeDrawer === 'collection'"
        @close="closeDrawer"
        @open-artifact="openArtifactFromCollection"
      />
    </Transition>
    <Transition name="drawer">
      <AboutDrawer v-if="activeDrawer === 'about'" @close="closeDrawer" />
    </Transition>
    <Transition name="drawer">
      <GlossaryDrawer v-if="activeDrawer === 'glossary'" @close="closeDrawer" />
    </Transition>
  </div>
</template>

<style scoped>
.wf-canvas {
  outline: none;
  margin: auto;
}
</style>
