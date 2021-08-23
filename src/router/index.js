import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/home')
  }
]

const router = new VueRouter({ routes })

export default router
