import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery'
window.jQuery = $
window.$ = $
import router from './router'
import store from './store'


createApp(App).use(store).use(router).mount('#app')




