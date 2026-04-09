<script setup lang="ts">
defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div class="hf-drawer">
    <div class="hf-drawer__header">
      <h2 class="hf-drawer__title">About</h2>
      <button class="hf-drawer__close" @click="$emit('close')">&#x2715;</button>
    </div>

    <div class="hf-drawer__body">
      <!-- Portrait -->
      <div class="hf-about-portrait">
        <div class="hf-about-portrait__img">Photo</div>
        <div class="hf-about-portrait__text">
          <p class="hf-about__name">Andrew McConville</p>
          <p class="hf-about__role">Exhibit Designer &amp; Curator</p>
          <p class="hf-about__bio">
            Graphic design instructor at UW&ndash;Milwaukee exploring how physical tools shaped
            the digital interfaces we use every day.
          </p>
        </div>
      </div>

      <!-- Project overview -->
      <div>
        <p class="hf-about__section-title">The Exhibit</p>
        <p class="hf-about__bio">
          <strong>Before the Prompt</strong> invites visitors to explore twenty evolutionary
          artifacts across four rooms. Each room traces a single skeuomorph from its physical
          origin to its digital descendant.
        </p>
      </div>

      <!-- Sources -->
      <div>
        <p class="hf-about__section-title">Sources</p>
        <p class="hf-about__source">
          Bringhurst, Robert. <em>The Elements of Typographic Style</em>. 4th ed. 2012.
        </p>
        <p class="hf-about__source">
          Houston, Keith. <em>Shady Characters</em>. W. W. Norton, 2013.
        </p>
        <p class="hf-about__source">
          Letterform Archive &mdash; letterformarchive.org
        </p>
        <p class="hf-about__source">
          Computer History Museum &mdash; computerhistory.org
        </p>
        <p class="hf-about__source">
          Parkes, M. B. <em>Pause and Effect</em>. UC Press, 1993.
        </p>
      </div>

      <!-- Contact -->
      <div>
        <p class="hf-about__section-title">Contact</p>
        <p class="hf-about__bio">andrew@example.edu</p>
      </div>
    </div>
  </div>
</template>
