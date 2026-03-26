<script setup lang="ts">
defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div class="wf-drawer">
    <div class="wf-drawer__header">
      <h2 class="wf-drawer__title">About</h2>
      <button class="wf-drawer__close" @click="$emit('close')">✕</button>
    </div>

    <div class="wf-drawer__body">
      <!-- Portrait -->
      <div class="wf-about-portrait">
        <div class="wf-about-portrait__img">Photo</div>
        <div class="wf-about-portrait__text">
          <p class="wf-about__name">Andrew McConville</p>
          <p class="wf-about__role">Exhibit Designer &amp; Curator</p>
          <p class="wf-about__bio">
            Graphic design instructor at UW–Milwaukee exploring how physical tools shaped
            the digital interfaces we use every day.
          </p>
        </div>
      </div>

      <!-- Project overview -->
      <div>
        <p class="wf-about__section-title">The Exhibit</p>
        <p class="wf-about__bio">
          <strong>Before the Prompt</strong> invites visitors to explore twenty evolutionary
          artifacts across four rooms. Each room traces a single skeuomorph from its physical
          origin to its digital descendant.
        </p>
      </div>

      <!-- Sources -->
      <div>
        <p class="wf-about__section-title">Sources</p>
        <p class="wf-about__source">
          Bringhurst, Robert. <em>The Elements of Typographic Style</em>. 4th ed. 2012.
        </p>
        <p class="wf-about__source">
          Houston, Keith. <em>Shady Characters</em>. W. W. Norton, 2013.
        </p>
        <p class="wf-about__source">
          Letterform Archive — letterformarchive.org
        </p>
        <p class="wf-about__source">
          Computer History Museum — computerhistory.org
        </p>
        <p class="wf-about__source">
          Parkes, M. B. <em>Pause and Effect</em>. UC Press, 1993.
        </p>
      </div>

      <!-- Contact -->
      <div>
        <p class="wf-about__section-title">Contact</p>
        <p class="wf-about__bio">andrew@example.edu</p>
      </div>
    </div>
  </div>
</template>
