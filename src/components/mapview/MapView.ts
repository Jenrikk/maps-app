import { defineComponent, onMounted, ref, watch } from 'vue';
import Mapboxgl from 'mapbox-gl';
import { useMapStore, usePlacesStore } from '@/composables';


export default defineComponent({
    name: 'MapView',
    setup() {
        
        const mapElement = ref<HTMLDivElement>();
        const {userLocation, isUserLocationReady} = usePlacesStore()
        const {setMap} = useMapStore()


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

            const myLocationPopUp = new Mapboxgl.Popup()
                .setLngLat(userLocation.value)
                .setHTML(`
                    <h4>Here I am</h4>
                `)

            const myLocationMarker = new Mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(myLocationPopUp)
                .addTo(map);

            //TODO: set map in vuex
            setMap(map)

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