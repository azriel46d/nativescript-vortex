import { createApp } from 'vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import App from './App.vue'

import './assets/main.css'
import './index.css'

const app = createApp(App)

app.use(VueGoogleMaps, {
    load: {
        key: '',
    },
})
app.mount('#app')
