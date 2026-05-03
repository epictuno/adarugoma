import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
//import './styles/global.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#C62828',
          secondary: '#B71C1C',
          accent: '#E53935',
          background: '#FAFAFA',
          surface: '#FFFFFF',
          'on-primary': '#FFFFFF',
        },
      },
    },
  },
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')
