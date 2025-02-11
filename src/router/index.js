import { createWebHistory, createRouter } from 'vue-router'

const test = () => import ('@/components/WelcomeItem.vue')
const routes = [
  { path: '/home', component: test },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router