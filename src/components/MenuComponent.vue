<template>
  <div :class="['menu-container', darkMode ? 'dark-mode' : '']">
    <div :class="['custom-sidebar', visible ? 'open' : 'closed']" @click="toggleMenu">
      <template v-if="visible">
        <h2>Menu</h2>
        <nav class="menu-items">
          <router-link to="/" class="menu-link">Home</router-link>
          <router-link to="/jira" class="menu-link">Jira</router-link>
          <router-link to="/finance" class="menu-link">Finance</router-link>
          <router-link to="/fitness" class="menu-link">Fitness</router-link>
        </nav>
        <PrimeButton
          label="Toggle Dark Mode"
          class="p-button-outlined mt-3"
          @click="$emit('toggle-dark-mode')"
        />
      </template>
      <!-- 显示箭头图标 -->
      <i :class="['toggle-icon', visible ? 'pi pi-angle-left' : 'pi pi-angle-right']"></i>
    </div>
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
  height: 100vh;
  background-color: #f4f4f4;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  padding: 1rem;
  overflow-y: auto;
  transition:
    width 0.3s ease,
    transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.custom-sidebar.open {
  width: 300px;
}

.custom-sidebar.closed {
  width: 40px; /* 只显示箭头按钮的宽度 */
}

.dark-mode .custom-sidebar {
  background-color: #333;
  color: #fff;
}

.menu-items {
  display: flex;
  flex-direction: column;
  width: 100%;
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

.toggle-icon {
  position: absolute;
  bottom: 20px;
  cursor: pointer;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  color: inherit;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .custom-sidebar.open {
    width: 100%;
  }
}
</style>
