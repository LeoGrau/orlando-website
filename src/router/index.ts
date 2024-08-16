import { createRouter, createWebHistory } from "vue-router"

// Pages
import HomeView from "../orlando/views/home/home-view.vue"


const VueRouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default VueRouter;