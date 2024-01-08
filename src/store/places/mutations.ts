import { MutationTree } from 'vuex';
import { PlacesStateInterface } from './state';


const mutation: MutationTree<PlacesStateInterface> = {
    setLngLat(state: PlacesStateInterface, coords) {
        state.userLocation = coords;
        state.isLoading = false;
    }
}


export default mutation;