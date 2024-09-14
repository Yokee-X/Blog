import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const html = document.querySelector('html')
html.setAttribute('data-theme', 'light')

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
