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
      path: '/project',
      name: 'project',
      component: () => import('../views/PortfolioView.vue')
    },
    {
      path: '/opensource',
      name: 'opensource',
      component: () => import('../views/OpenSourceView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
  ],
  // 添加scrollBehavior函数，控制页面切换时的滚动行为
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  }
})

export default router
