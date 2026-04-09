import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * Overlay-driven routing — the route is the single source of truth
 * for overlay state. All routes render an empty component; App.vue
 * reads route.name + route.params to decide which overlays to show.
 */

const Empty = { template: '' }

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: Empty },
    { path: '/room/:roomId', name: 'room', component: Empty },
    { path: '/room/:roomId/artifact/:artifactId', name: 'artifact', component: Empty },
    { path: '/collection', name: 'collection', component: Empty },
    { path: '/about', name: 'about', component: Empty },
    { path: '/glossary', name: 'glossary', component: Empty },
  ],
})

export default router
