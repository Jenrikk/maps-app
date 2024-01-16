<script lang="ts" src="./SearchBar.ts" />

<template>
  <div class="searchbar-container">
    <input type="text" class="form-control" placeholder="Madrid..." v-model="searchTerm">

    <SearchResults />
    
  </div>
</template>

<style scoped>
.searchbar-container {
    position: fixed; 
    top: 30px; 
    left: 30px; 
    background-color: #fff;
    z-index: 999;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
    width: 230px;
    border-radius: 10px !important;
    overflow: hidden;
    padding: 5px;
}


</style>