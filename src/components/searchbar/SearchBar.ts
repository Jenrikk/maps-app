import { usePlacesStore } from '@/composables';
import { computed, defineComponent, ref} from 'vue';
import SearchResults from '../search-results/SearchResults.vue'


export default defineComponent({
    name: 'SearchBar',
    components: {
        SearchResults   
      },
    setup() {
        
        const debauncedTimeout = ref()
        const debauncedValue = ref('')

       const {searchPlacesByTerm} = usePlacesStore()
        
        
        return {
            debauncedValue,
            searchTerm: computed({
                get() {
                    return debauncedValue.value
                },
                set(val: string){
                    // evry time we type this is executed
                    if(debauncedTimeout.value) clearTimeout(debauncedTimeout.value);

                    debauncedTimeout.value = setTimeout(() => {
                        debauncedValue.value = val
                        searchPlacesByTerm(val)
                    }, 500);
                }
            })
        }
    },
})
