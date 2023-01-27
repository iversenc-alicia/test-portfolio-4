import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../pages/HomeView.vue'

import ProjetsView from '../pages/ProjetsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/projets', name: 'projets', component: ProjetsView },
  ]
})

export default router
