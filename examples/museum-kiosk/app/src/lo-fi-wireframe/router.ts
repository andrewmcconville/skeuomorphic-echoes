import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * Routes drive the overlay state machine in App.vue.
 * Every overlay has a URL so the back button works and artifacts are linkable.
 */
const EmptyView = { template: '' }

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: EmptyView },
    { path: '/room/:roomId', name: 'room', component: EmptyView },
    { path: '/room/:roomId/artifact/:artifactId', name: 'artifact', component: EmptyView },
    { path: '/collection', name: 'collection', component: EmptyView },
    { path: '/about', name: 'about', component: EmptyView },
    { path: '/glossary', name: 'glossary', component: EmptyView },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

export default router
