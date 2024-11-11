<template>
  <div :class="['main-container', darkMode ? 'dark-mode' : '']">
    <MenuComponent @toggle-dark-mode="toggleDarkMode" class="menu-container" />
    <RouterView :darkMode="darkMode" class="main-view-container" />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import MenuComponent from './components/MenuComponent.vue'
import { ref } from 'vue'

export default {
  components: {
    MenuComponent
  },
  setup() {
    const darkMode = ref(false)

    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value
    }

    return {
      darkMode,
      toggleDarkMode
    }
  }
}
</script>

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

.dark-mode {
  background-color: #333;
  color: #fff;
}
</style>
