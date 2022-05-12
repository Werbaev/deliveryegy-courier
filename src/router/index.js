import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info/:id',
    name: 'Indo-definition',
    component: () => import('../views/home/components/Definition.vue')
  },
  {
    path: '/my-orders',
    name: 'my-orders',
    component: () => import('../views/orders/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
