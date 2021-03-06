import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VaeUI from 'vae-ui/index.ts'
// import { Button as VaeButton } from 'vae-ui/button/index'
import Message from '../packages/message'

import './index.scss'
import 'vae-ui/theme-chalk/src/index.scss'
import 'vite-plugin-vuedoc/style.css'

const app = createApp(App)

app.use(router)
app.use(VaeUI)
app.use(Message)
// app.component('VaeButton',VaeButton)
app.mount('#app')
