import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@shared/tokens/colors.css'
import '@shared/tokens/typography.css'
import '@shared/tokens/spacing.css'
import '@shared/styles/reset.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
