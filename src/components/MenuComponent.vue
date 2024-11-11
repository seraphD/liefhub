<template>
  <div :class="['menu-container', darkMode ? 'dark-mode' : '']">
    <PrimeButton icon="pi pi-bars" class="toggle-button" @click="toggleMenu" />
    <transition name="slide">
      <div v-if="visible" class="custom-sidebar">
        <h2>Menu</h2>
        <ul class="menu-items">
          <router-link to="/" class="menu-link">Home</router-link>
          <router-link to="/jira" class="menu-link">Jira</router-link>
          <router-link to="/finance" class="menu-link">Finance</router-link>
          <router-link to="/fitness" class="menu-link">Fitness</router-link>
        </ul>
        <PrimeButton
          label="Toggle Dark Mode"
          class="p-button-outlined mt-3"
          @click="$emit('toggle-dark-mode')"
        />
        <PrimeButton label="Close" class="p-button mt-3" @click="toggleMenu" />
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from 'vue'
import PrimeVueButton from 'primevue/button'

export default {
  components: {
    PrimeButton: PrimeVueButton
  },
  props: ['darkMode'],
  setup() {
    const visible = ref(false)

    const toggleMenu = () => {
      visible.value = !visible.value
    }

    return {
      visible,
      toggleMenu
    }
  }
}
</script>

<style scoped>
.menu-container {
  height: 100vh;
}

.custom-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: #f4f4f4;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  padding: 1rem;
  overflow-y: auto;
}

.dark-mode .custom-sidebar {
  background-color: #333;
  color: #fff;
}

.menu-items {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

.menu-link {
  margin-bottom: 1rem;
  text-decoration: none;
  color: inherit;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background 0.2s;
}

.menu-link:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.toggle-button {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 1100;
}

/* 添加简单的侧边栏动画 */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .custom-sidebar {
    width: 100%;
  }
}
</style>
