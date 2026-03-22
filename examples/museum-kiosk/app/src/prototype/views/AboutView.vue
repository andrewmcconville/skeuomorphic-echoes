<template>
  <div class="placeholder">
    <h1>About</h1>
    <p class="note">About page will be built here.</p>
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

.note {
  font: var(--text-meta-era);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--orange-500);
}
</style>
