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
        <button class="btn btn-outline-primary btn-sm" :class="(place.id === activePlace) ? 'btn-outline-light' : 'btn-outline-primary'">
          Directions
        </button>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { usePlacesStore } from "@/composables";
import { Feature } from "@/interfaces/places";

export default defineComponent({
  name: "SearchResults",
  setup() {

    const {places, isLoadingPlaces} = usePlacesStore()
    const activePlace = ref('');

    return {
      places,
      isLoadingPlaces,
      activePlace,

      onPlaceClicked: (place: Feature) => {
        activePlace.value = place.id;
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