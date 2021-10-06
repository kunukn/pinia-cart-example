import { createApp } from 'vue'
import router from './router'
import { pinia } from './store'
import App from './App.vue'

const app = createApp(App).use(router).use(pinia)

app.mount('#app')
