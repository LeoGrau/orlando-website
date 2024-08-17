import { createApp } from 'vue'

import VueRouter from './router'
import PrimeVue from 'primevue/config'

import './style.css'
import App from './App.vue'

// Primevue Components
import Button from 'primevue/button'
import Carousel from 'primevue/carousel';

// Primevue Icons
import 'primeicons/primeicons.css'

// Primevue Theme
import Lara from "@primevue/themes/lara"
import { updatePreset } from '@primevue/themes'


const app = createApp(App)

app.use(VueRouter)
app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: Lara,
    options: {
      cssLayer: {
        name: 'primeui',
        order: 'tailwind-base, bora-components, primeui, tailwind-utilities'
      },
      prefix: 'p',
      darkModeSelector: '.p-dark'
    }
  }
})

updatePreset({
  semantic: {
    primary: {
      50: '{surface.50}',
      100: '{surface.100}',
      200: '{surface.200}',
      300: '{surface.300}',
      400: '{surface.400}',
      500: '{surface.500}',
      600: '{surface.600}',
      700: '{surface.700}',
      800: '{surface.800}',
      900: '{surface.900}',
      950: '{surface.950}'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{primary.500}',
          contrastColor: '#ffffff',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}'
        },
        highlight: {
          background: '{primary.50}',
          focusBackground: '{primary.100}',
          color: '{primary.700}',
          focusColor: '{primary.800}'
        }
      },
      dark: {
        primary: {
          color: '{primary.400}',
          contrastColor: '{surface.900}',
          hoverColor: '{primary.300}',
          activeColor: '{primary.200}'
        },
        highlight: {
          background: 'color-mix(in srgb, {primary.400}, transparent 84%)',
          focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)'
        }
      }
    }
  }
})

app.component('pv-button', Button)
app.component('pv-carousel', Carousel)

app.mount("#app")
