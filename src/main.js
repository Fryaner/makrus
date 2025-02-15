import './assets/styles/global.scss'
import router from '@/router'
import { createPinia } from 'pinia'
import Title from '@/components/title/index.vue'
import popup from '@/components/form/index.vue'

import { createApp } from 'vue'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.component('Title', Title)
app.component('Form', popup)
app.mount('#app')
