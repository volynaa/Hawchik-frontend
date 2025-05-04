import { createApp } from 'vue'
import App from './App.vue'
import '@/config/css/index.css'
import {createPinia} from "pinia"
const pinia = createPinia()
import router from '@/config/router/router.js'

const app = createApp(App)
app
    .use(pinia)
    .use(router)
    .mount('#app')