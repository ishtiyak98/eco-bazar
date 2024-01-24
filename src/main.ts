import './styles/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// splide js
import VueSplide from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

const vuetify = createVuetify({
  components,
  directives
})

app.use(vuetify).use(VueSplide).mount('#app')
