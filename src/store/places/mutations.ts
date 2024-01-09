import { MutationTree } from 'vuex';
import { PlacesStateInterface } from './state';


const mutation: MutationTree<PlacesStateInterface> = {
    setLngLat(state: PlacesStateInterface, coords) {
        const {lng, lat} = coords;
        state.userLocation = [lng, lat];
        state.isLoading = false;
    }
}


export default mutation;