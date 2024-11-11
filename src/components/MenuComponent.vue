<template>
  <div :class="['menu-container', darkMode ? 'dark-mode' : '']">
    <PrimeButton icon="pi pi-bars" class="toggle-button" @click="toggleMenu" />
    <transition name="slide">
      <div v-if="visible" class="custom-sidebar">
        <h2>Menu</h2>
        <ul class="menu-items">
          <li><a href="/home">Home</a></li>
          <li><a href="/jira">Jira</a></li>
          <li><a href="/finanac">Finance</a></li>
          <li><a href="/fitness">Fitness</a></li>
        </ul>
        <PrimeButton
          label="Toggle Dark Mode"
          class="p-button-outlined mt-3"
          @click="toggleDarkMode"
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
  setup() {
    const visible = ref(false)
    const darkMode = ref(false)

    const toggleMenu = () => {
      visible.value = !visible.value
    }

    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value
    }

    return {
      visible,
      darkMode,
      toggleMenu,
      toggleDarkMode
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
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-items li {
  margin-bottom: 1rem;
}

.menu-items a {
  color: inherit;
  text-decoration: none;
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
