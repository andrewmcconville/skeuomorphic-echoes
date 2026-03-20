<template>
  <div class="placeholder">
    <h1>Museum Kiosk Prototype</h1>
    <p>1440 &times; 2560 px</p>
    <p class="note">Prototype views will be built here.</p>
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

h1 {
  font: var(--text-display-title);
}

p {
  font: var(--text-body-default);
  color: var(--gray-500);
}

.note {
  font: var(--text-meta-era);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--orange-500);
}
</style>
