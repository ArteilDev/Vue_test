import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Skeleton from 'vue-loading-skeleton';
import "vue-loading-skeleton/dist/style.css"

import './assets/sass/style.sass'

createApp(App).use(store).use(router).use(Skeleton).mount('#app')
