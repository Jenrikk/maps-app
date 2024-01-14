import { MutationTree } from 'vuex';
import { MapStateInterface } from './state';
import Mapboxgl from 'mapbox-gl';


const mutation: MutationTree<MapStateInterface> = {
    setMap(state, map: Mapboxgl.Map) {
        state.map = map;
    }
}


export default mutation;