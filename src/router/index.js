import { createWebHistory, createRouter } from 'vue-router'

const MainPage = () => import('@/pages/mainPage.vue');
const AboutPage = () => import('@/pages/aboutPage.vue');

const routes = [
  {path: '/', component: MainPage},
  {path: '/about', component: AboutPage},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router