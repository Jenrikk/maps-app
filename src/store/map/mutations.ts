import { MutationTree } from 'vuex';
import { MapStateInterface } from './state';
import Mapboxgl from 'mapbox-gl';
import { Feature } from '@/interfaces/places';


const mutation: MutationTree<MapStateInterface> = {
    setMap(state, map: Mapboxgl.Map) {
        state.map = map;
    },

    setPlacesMarkers(state, places: Feature[]){
        
        // Delete markers from the map and from the store:
        state.markers.forEach( marker => marker.remove())
        state.markers = [];
        
        if(!state.map) return;

        // Create new markers:
        for(const place of places){

            const [lng, lat] = place.center;

            const popUp = new Mapboxgl.Popup()
                .setLngLat([lng, lat])
                .setHTML(`
                    <h4>${place.text}</h4>
                `)

            const customMarker = new Mapboxgl.Marker()
                .setLngLat([lng, lat])
                .setPopup(popUp)
                .addTo(state.map);
            
            state.markers.push(customMarker);
        }
    }
}


export default mutation;