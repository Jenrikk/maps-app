import { ActionTree } from 'vuex';
import { PlacesStateInterface } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/apis';
import { PlacesResponse } from './../../interfaces/places';


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
        const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
            params: {
                proximity: state.userLocation?.join(',')
            }
        })
        console.log(resp.data.features);
    }
}



export default actions;