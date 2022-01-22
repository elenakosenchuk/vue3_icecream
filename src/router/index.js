import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Products.vue')
  },
  {
    path: '/articles',
    name: 'Articles',  
    component: () => import('../views/Articles.vue')
  },
  {
    path: '/testimonials',
    name: 'Testimonials',  
    component: () => import('../views/Testimonials.vue')
  },
  {
    path: '/contacts',
    name: 'Contact Us',  
    component: () => import('../views/Contact.vue')
  }
]

const router = createRouter({
  base:'/vue3_icecream/',
  history: createWebHashHistory(),
  routes
})

export default router
