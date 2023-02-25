import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/first',
      name: 'first',
      component: () => import('../views/FirstView.vue')
    },
    {
      path: '/second',
      name: 'second',
      component: () => import('../views/SecondView.vue')
    },
    {
      path: '/third',
      name: 'third',
      component: () => import('../views/ThirdView.vue')
    },
    {
      path: '/fourth',
      name: 'fourth',
      component: () => import('../views/FourthView.vue')
    },
  ]
})

export default router
