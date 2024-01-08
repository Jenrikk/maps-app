import { createStore } from 'vuex';

// My custom modules
import placesModule from './places';
import { PlacesStateInterface } from './places/state';



export interface StateInterface {
  places: PlacesStateInterface,
}

export default createStore<StateInterface>({
  modules: {
    places: placesModule
  }
  
});
