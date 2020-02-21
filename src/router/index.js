import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: 'main' */ '@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: 'main' */ '@/views/About.vue')
  },
  {
    path: '/status',
    name: 'Status',
    component: () => import(/* webpackChunkName: 'main' */ '@/views/Status.vue')
  }
]

/* global USE_HISTORY */

const router = new VueRouter({
  routes,
  mode: USE_HISTORY ? 'history' : 'hash'
})

export default router
