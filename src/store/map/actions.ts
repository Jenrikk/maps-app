import { ActionTree } from 'vuex';
import { MapStateInterface } from './state';
import { StateInterface } from '../index';
import { directionsApi } from '@/apis';
import { DirectionsResponse } from '@/interfaces/directions';

export type LngLat = [number, number];

const actions: ActionTree<MapStateInterface, StateInterface> = {

    async getRouteBetweenPoints( { commit }, {start, end}: {start:LngLat, end:LngLat}  ) {

        const resp = await directionsApi.get<DirectionsResponse>(`/${ start.join(',') };${ end.join(',') }`);
    
        //TODO: distance and duration

        commit('setRoutePolyline', resp.data.routes[0].geometry.coordinates)
    }
}



export default actions;