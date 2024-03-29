import { computed } from 'vue';
import { StateInterface } from '@/store';
import { useStore } from 'vuex';
import Mapboxgl from 'mapbox-gl';
import { LngLat } from './../store/map/actions';
import { Feature } from './../interfaces/places';


export const useMapStore = () => {

    const store = useStore<StateInterface>()



    return {
        // State
        map: computed(() => store.state.map.map),
        distance: computed(() => store.state.map.distance),
        duration: computed(() => store.state.map.duration),

        // Getters:
        isMapReady: computed<boolean>(() => store.getters['map/isMapReady']),

        // Mutations
        setMap: (map: Mapboxgl.Map) => store.commit('map/setMap', map),
        setPlacesMarkers: (places: Feature[]) => store.commit('map/setPlacesMarkers', places),

        // Actions
        getRouteBetweenPoints: (start: LngLat, end: LngLat) => store.dispatch('map/getRouteBetweenPoints', {start, end}),

    }
}