import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

import './assets/tailwind.css'

axios.defaults.baseURL = import.meta.env.WEATHER_API_URL

createApp(App).mount('#app')
