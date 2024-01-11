import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiY2FybGVzbWFycm9uIiwiYSI6ImNscjlvb29mdTAyeGYyc3Mwc3RjZnh1ZjcifQ.4APlGO0dV3jjlOXkeHc32A';

if(!navigator.geolocation){
    alert('Your browser does not support geolocation')
    throw new Error('Your browser does not support geolocation')
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
