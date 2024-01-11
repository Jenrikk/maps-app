import { usePlacesStore } from '@/composables';
import { defineComponent, onMounted, ref, watch } from 'vue';
import Mapboxgl from 'mapbox-gl';


export default defineComponent({
    name: 'MapView',
    setup() {
        
        const mapElement = ref<HTMLDivElement>();
        const {userLocation, isUserLocationReady} = usePlacesStore()

        const initMap = async() => {
            if( !mapElement.value) throw new Error('Div element does not exist');
            if( !userLocation.value) throw new Error('User location does not exist');

            await Promise.resolve(); // to let finish the sincronus processes above

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 14, // starting zoom
            });
        }

        onMounted(() =>{
            if ( isUserLocationReady.value) return initMap()
        })
        watch( isUserLocationReady, (newVal) => {
            if( isUserLocationReady.value ) return initMap()
        });

        return {
            
            isUserLocationReady,
            mapElement
        }
    }
});