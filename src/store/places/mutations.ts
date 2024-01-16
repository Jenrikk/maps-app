import { MutationTree } from 'vuex';
import { PlacesStateInterface } from './state';
import { Feature } from './../../interfaces/places';


const mutation: MutationTree<PlacesStateInterface> = {
    setLngLat(state: PlacesStateInterface, coords) {
        const {lng, lat} = coords;
        state.userLocation = [lng, lat];
        state.isLoading = false;
    },

    setIsLoadingPlaces(state) {
        state.isLoadingPlaces = true;
    },

    setPlaces(state, places: Feature[]){
        state.places = places;
        state.isLoadingPlaces = false;

    }
}


export default mutation;