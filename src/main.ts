import './assets/main.css'
import './assets/liquid-glass.css' /* Import the new global styles */

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Tres from '@tresjs/core'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(Tres)
app.use(router)

app.mount('#app')
