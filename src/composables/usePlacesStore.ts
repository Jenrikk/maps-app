import { computed, onMounted } from "vue"
import { useStore } from "vuex"
import { StateInterface } from "@/store"

export const usePlacesStore = () => {

    const store = useStore<StateInterface>()

     onMounted(() => {
        if (!store.getters['places/isUserLocationReady']) { // if true
            store.dispatch('places/setInitialLocation');
        }
     })
    
    return {
        // State
        isLoading: computed( () => store.state.places.isLoading),
        userLocation: computed( () => store.state.places.userLocation),

        // Getters
        isUserLocationReady: computed<boolean>(() => store.getters['places/isUserLocationReady'])
    }
}
