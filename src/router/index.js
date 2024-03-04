import { createRouter, createWebHistory } from "vue-router";
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('../views/JoinView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: () => import('../views/MypageView.vue')
    },
    {
      path: '/edit',
      name: 'mypageedit',
      component: () => import('../views/MypageEditView.vue')
    },
  ]
})

export default router
