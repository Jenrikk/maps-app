<template>
  <ul class="list-group mt-3">
    <li class="list-group-item list-group-item-action">
      <h5>Place name</h5>
      <div align="right">
        <button class="btn btn-outline-primary">Directions</button>
      </div>
    </li>
    <li class="list-group-item list-group-item-action">
      <h5>Place name</h5>
      <div align="right">
        <button class="btn btn-outline-primary">Directions</button>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchResults",
  setup() {
    return {};
  },
});
</script>


<style scoped>
li{
    cursor: pointer;
}
</style>