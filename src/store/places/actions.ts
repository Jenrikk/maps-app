import { ActionTree } from 'vuex';
import { PlacesStateInterface } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<PlacesStateInterface, StateInterface> = {
    setInitialLocation( {commit}) {
        // TODO: set loading
        navigator.geolocation.getCurrentPosition(
            (position) => commit('setLngLat', position.coords),
            (error) => {
                console.error(error);
                throw new Error('No geolocation :(');
            }
        );
    }
}



export default actions;