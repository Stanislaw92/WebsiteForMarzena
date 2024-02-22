import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/portfolio/',
      name: 'portfolio',
      component: HomeView
    },

]


const router = createRouter({
    history: createWebHistory('/'),
    routes
  })
  
  export default router