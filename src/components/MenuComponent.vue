<template>
  <div :class="['menu-container', darkMode ? 'dark-mode' : '']">
    <div :class="['custom-sidebar', visible ? 'open' : 'closed']">
      <div class="header" v-if="visible">
        <h2>LifeHub</h2>
        <i
          :class="['toggle-icon', 'pi', visible ? 'pi-angle-left' : 'pi-angle-right']"
          @click="toggleMenu"
        ></i>
      </div>
      <i v-else :class="['toggle-icon', 'pi', 'pi-angle-right']" @click="toggleMenu"></i>
      <template v-if="visible">
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
  overflow-y: hidden; /* 默认隐藏滚动条 */
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.custom-sidebar.open {
  width: 300px;
  overflow-y: auto; /* 菜单展开时允许滚动 */
}

.custom-sidebar.closed {
  width: 40px; /* 只显示箭头按钮的宽度 */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 收起时完全隐藏滚动条 */
}

.dark-mode .custom-sidebar {
  background-color: #333;
  color: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.toggle-icon {
  cursor: pointer;
  font-size: 1.5rem;
  color: inherit;
}

/* 调整收起状态下的箭头位置 */
.custom-sidebar.closed .toggle-icon {
  position: relative;
  font-size: 2rem;
}

/* 菜单内容 */
.menu-items {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 1rem 0 0;
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

/* 响应式设计 */
@media (max-width: 768px) {
  .custom-sidebar.open {
    width: 100%;
  }
}
</style>
