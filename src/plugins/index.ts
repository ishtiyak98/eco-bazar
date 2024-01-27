import router from '@/router'
import type { App } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import vuetify from './vuetify'

// splide js
import VueSplide from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'


export function registerPlugins(app: App) {
  app.use(router).use(createPinia()).use(vuetify).use(VueSplide)
}
