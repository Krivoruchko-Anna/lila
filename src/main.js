import './styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from '@/content/i18n.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.config.errorHandler = (error) => {
  console.log(error)
}

app.mount('#app')
