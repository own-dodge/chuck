import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import VFocus from '@/directives/VFocus';

const app = createApp(App)

app.directive('focus', VFocus)

app.use(store).mount('#app')