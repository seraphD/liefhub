import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JiraView from '@/views/JiraView.vue'
import FitnessView from '@/views/FitnessView.vue'
import FinanceView from '@/views/FinanceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/jira',
      name: 'Jira',
      component: JiraView
    },
    {
      path: '/fitness',
      name: 'Fitness',
      component: FitnessView
    },
    {
      path: '/finance',
      name: 'Finance',
      component: FinanceView
    }
  ]
})

export default router
