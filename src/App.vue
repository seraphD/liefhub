<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from './components/Menu.vue';
</script>

<template>
  <div class="main-container">
    <Menu class="menu-container" />
    <RouterView class="main-view-container" />
  </div>
</template>

<style scoped>
.main-container {
  margin: 0;
  padding: 0;
  width: 100vw;
  display: flex;
}

.menu-container {
  flex: 0 0 20%;
}

.main-view-container {
  flex: 0 0 80%;
}
</style>
