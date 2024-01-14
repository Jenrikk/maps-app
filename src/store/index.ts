import { createStore } from 'vuex';

// My custom modules
import placesModule from './places';
import { PlacesStateInterface } from './places/state';

import mapModule from './map';
import { MapStateInterface } from './map/state';



export interface StateInterface {
  places: PlacesStateInterface;
  map: MapStateInterface;
}

export default createStore<StateInterface>({
  modules: {
    places: placesModule,
    map: mapModule
  }
  
});
