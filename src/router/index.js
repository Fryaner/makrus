import { createWebHistory, createRouter } from 'vue-router'

const MainPage = () => import('@/components/pages/mainPage.vue');

const routes = [
  {path: '/', component: MainPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router