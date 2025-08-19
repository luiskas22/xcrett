import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Renting from '../views/Renting.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/servicios', name: 'Services', component: Services },
  { path: '/quienes-somos', name: 'About', component: About },
  { path: '/contacto', name: 'Contact', component: Contact },
  { path: '/renting', name: 'Renting', component: Renting },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
