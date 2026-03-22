import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/step/2.1',
      name: 'step-2.1',
      component: () => import('./views/Step2_1View.vue'),
    },
    {
      path: '/step/2.2',
      name: 'step-2.2',
      component: () => import('./views/Step2_2View.vue'),
    },
    {
      path: '/step/2.3',
      name: 'step-2.3',
      component: () => import('./views/Step2_3View.vue'),
    },
    {
      path: '/step/2.8',
      name: 'step-2.8',
      component: () => import('./views/Step2_8View.vue'),
    },
    {
      path: '/step/:id',
      name: 'step',
      component: () => import('./views/StepView.vue'),
    },
    {
      path: '/glossary',
      name: 'glossary',
      component: () => import('./views/GlossaryView.vue'),
    },
  ],
})

export default router
