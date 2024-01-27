import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#00b207',
    'primary-soft': '#84d187',
    'primary-hard': '#2c742f',
    warning: '#ff8a00',
    danger: '#ea4b48',
    white: '#ffffff',
    'gray-g50': 'f2f2f2',
    'gray-g100': '#f2f2f2',
    'gray-g200': '#ccc',
    'gray-g300': '#b3b3b3',
    'gray-g400': '#999',
    'gray-g500': '#808080',
    'gray-g600': '#666',
    'gray-g700': '#4d4d4d',
    'gray-g800': '#333',
    'gray-g900': '#1a1a1a',
    'green-g50': '#edf2ee',
    'green-g100': '#dae5da',
    'green-g200': '#b4ccb4',
    'green-g300': '#96b297',
    'green-g400': '#7a997c',
    'green-g500': '#618062',
    'green-g600': '#406b42',
    'green-g700': '#2b572e',
    'green-g800': '#173b1a',
    'green-g900': '#002603'
  }
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme
    }
  }
})
