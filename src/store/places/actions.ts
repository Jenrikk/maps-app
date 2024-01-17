import { ActionTree } from 'vuex';
import { PlacesStateInterface } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/apis';
import { PlacesResponse, Feature } from './../../interfaces/places';


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
    
    async searchPlacesByTerm({commit, state}, query: string): Promise<Feature[]>{
        if(query.length === 0) {
            commit('setPlaces', [])
            return [];
        }
        if(!state.userLocation) {
            throw new Error('there is not user location set')
        }

        commit('setIsLoadingPlaces');


        const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
            params: {
                proximity: state.userLocation.join(',')
            }
        })

        commit('setPlaces', resp.data.features);

        return resp.data.features;
    }
}



export default actions;