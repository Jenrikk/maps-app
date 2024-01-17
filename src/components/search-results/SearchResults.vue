<template>
  <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
    <h5>Loading...</h5>
    <span>Please wait</span>
  </div>

  <ul class="list-group mt-3" v-else-if="places.length > 0">
    <li v-for="place in places" :key="place.id" class="list-group-item list-group-item-action">
      <h5>{{ place.text }}</h5>
      <h6>{{ place.place_name }}</h6>
      <div align="right">
        <button class="btn btn-outline-primary btn-sm">Directions</button>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePlacesStore } from "@/composables";

export default defineComponent({
  name: "SearchResults",
  setup() {

    const {places, isLoadingPlaces} = usePlacesStore()

    return {
      places,
      isLoadingPlaces
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