<template>
  <div class="trip-container column" v-if="distance">
    <div class="col">Distance: <strong>{{distance}} Km</strong></div>
    <div class="col">Duration: <strong>{{ (duration > 60) ? `${Math.round(duration/60)} h` : `${duration} min`}}</strong></div>
  </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import { useMapStore } from "@/composables";

export default defineComponent({
  name: "TripDetails",
  setup() {

    const {distance, duration} = useMapStore()

    return{
        distance,
        duration
    }
  },

});
</script>

<style scoped>
.trip-container{
    padding: 10px;
    position: fixed;
    bottom: 50px;
    left: 30px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
    font-size: 20px;
    width: 230px;
}
</style>