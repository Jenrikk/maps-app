import { GetterTree } from 'vuex';
import { MapStateInterface } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<MapStateInterface, StateInterface> = {
    isMapReady( state) {
        return !!state.map; // return either false (!!undefined) or true (!!mapInstance)
    }
}



export default getters;