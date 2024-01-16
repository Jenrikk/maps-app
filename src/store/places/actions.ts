import { ActionTree } from 'vuex';
import { PlacesStateInterface } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<PlacesStateInterface, StateInterface> = {
    setInitialLocation( {commit}) {
        // TODO: set loading
        navigator.geolocation.getCurrentPosition(
            (position) => commit('setLngLat', {lng: position.coords.longitude, lat: position.coords.latitude}),
            (error) => {
                console.error(error);
                throw new Error('No geolocation :(');
            },
        );
    },
    //TODO: set <return value>
    async searchPlacesByTerm({commit, state}, query: string){
        console.log('Vuex: ', query);
    }
}



export default actions;