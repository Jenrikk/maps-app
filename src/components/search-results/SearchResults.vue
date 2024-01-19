<template>
  <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
    <h5>Loading...</h5>
    <span>Please wait</span>
  </div>

  <ul class="list-group mt-3" v-else-if="places.length > 0">
    <li v-for="place in places" :key="place.id" 
      class="list-group-item list-group-item-action"
      :class="{ 'active' : place.id === activePlace}"
      @click="onPlaceClicked(place)">
      <h5>{{ place.text }}</h5>
      <h6>{{ place.place_name }}</h6>
      <div align="right">
        <button class="btn btn-outline-primary " 
          :class="(place.id === activePlace) ? 'btn-outline-light' : 'btn-outline-primary'"
          @click.self="onPlaceDirections(place.center)">
          Bike
        </button>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useMapStore, usePlacesStore } from "@/composables";
import { Feature } from "@/interfaces/places";

export default defineComponent({
  name: "SearchResults",
  setup() {

    const {places, isLoadingPlaces, userLocation} = usePlacesStore()

    const activePlace = ref('');

    const {map, setPlacesMarkers, getRouteBetweenPoints} = useMapStore();

    watch(places, (newPlaces) =>{
      activePlace.value = '';
      setPlacesMarkers(newPlaces)
    })



    return {
      places,
      isLoadingPlaces,
      activePlace,

      onPlaceClicked: (place: Feature) => {
        activePlace.value = place.id;
        const [lng, lat] = place.center;

        map.value?.flyTo({
          center: [lng, lat],
          zoom: 14,
        });
      },

      onPlaceDirections: (coord: number[]) => {
        if(!userLocation.value) return;
        const [lng, lat] = coord;
        
        const start: [number, number] = userLocation.value;
        const end: [number, number] = [lng, lat];

        getRouteBetweenPoints(start,end)
      }

    };
  },

});
</script>


<style scoped>
li{
    cursor: pointer;
}
h6{
  font-size: 14px;
}
h5{
  font-size: 17px;
}
span {
  font-variant: small-caps;
}
</style>