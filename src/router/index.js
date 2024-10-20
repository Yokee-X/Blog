import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BasicLayout from '@/layout/BasicLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BasicLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/technology',
          name: 'technology',
          component: () => import('../views/Technology/index.vue')
        }
      ]
    },
    {
      path: '/2048',
      name: '2048',
      component: () => import('../views/2048/index.vue')
    }
  ]
})

export default router
