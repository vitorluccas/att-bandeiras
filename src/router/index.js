import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GameView from '@/views/Game.vue'
import FimView from '@/views/Fim.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/game',
      name: 'Game-app', // Nome de rota usado em HomeView e Game.vue
      component: GameView
    },
    {
      path: '/fim',
      name: 'fim-app', // Nome de rota usado em Game.vue
      component: FimView
    }
  ]
})

export default router
