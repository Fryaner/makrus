import { createWebHistory, createRouter } from 'vue-router'

const MainPage = () => import('@/pages/mainPage.vue');
const AboutPage = () => import('@/pages/aboutPage.vue');
const ContactsPage = () => import('@/pages/contactsPage.vue');
const DeliveryPage = () => import('@/pages/deliveryPage.vue');

const routes = [
  {path: '/', component: MainPage},
  {path: '/about', component: AboutPage},
  {path: '/contacts', component: ContactsPage},
  {path: '/delivery', component: DeliveryPage},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router