import { GetterTree } from 'vuex';
import { PlacesStateInterface } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<PlacesStateInterface, StateInterface> = {
    isUserLocationReady( state ) {
        return !!state.userLocation // !!undefined === false it will be !![23,52] === true
    }
}



export default getters;