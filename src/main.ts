import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

if(!navigator.geolocation){
    alert('Your browser does not support geolocation')
    throw new Error('Your browser does not support geolocation')
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
