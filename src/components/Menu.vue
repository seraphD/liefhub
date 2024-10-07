<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="menu-list">
        <RouterLink class="menu-item" to="/">Home</RouterLink>
        <RouterLink class="menu-item" to="/jira">Jira</RouterLink>
        <RouterLink class="menu-item" to="/Finance">Finance</RouterLink>
        <RouterLink class="menu-item" to="/Fitness">Fitness</RouterLink>
    </nav>
</template>

<style scoped>
.menu-list {
    display: flex;
    flex-direction: column;
    padding: 0px 20px;
}

.menu-item {
    margin: 5px 0;
}
</style>