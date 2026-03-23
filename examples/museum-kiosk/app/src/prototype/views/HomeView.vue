<template>
  <div class="placeholder">
    <h1 class="placeholder__title">Museum Kiosk Prototype</h1>
    <p class="placeholder__text">1440 &times; 2560 px</p>
    <p class="placeholder__note">Prototype views will be built here.</p>
  </div>
</template>

<style scoped>
.placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 2560px;
  gap: var(--space-lg);
  text-align: center;
}

.placeholder__title {
  font: var(--text-display-670);
}

.placeholder__text {
  font: var(--text-body-640);
  color: var(--ink-500);
}

.placeholder__note {
  font: var(--text-meta-640);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--secondary-500);
}
</style>
