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
      path: '/step/:id',
      name: 'step',
      component: () => import('./views/StepView.vue'),
    },
    {
      path: '/design-system',
      name: 'design-system',
      component: () => import('./views/DesignSystemView.vue'),
    },
  ],
})

export default router
