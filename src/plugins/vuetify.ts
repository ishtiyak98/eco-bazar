import { createVuetify } from 'vuetify'

import colors from 'vuetify/util/colors'

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#00B207', // #E53935
          secondary: colors.red.lighten4, // #FFCDD2
        }
      },
    },
  },
})