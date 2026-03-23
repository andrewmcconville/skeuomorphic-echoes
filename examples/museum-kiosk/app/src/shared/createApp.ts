import { createApp, type Component } from 'vue'
import type { Router } from 'vue-router'

import '@shared/tokens/colors.css'
import '@shared/tokens/typography.css'
import '@shared/tokens/spacing.css'
import '@shared/styles/reset.css'

export function mountApp(rootComponent: Component, router: Router) {
  const app = createApp(rootComponent)
  app.use(router)
  app.mount('#app')
}
