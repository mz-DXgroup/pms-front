import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: () => import('../views/MypageView.vue')
    },
  ]
})

export default router