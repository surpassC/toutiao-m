import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'index',
    path: '/',
    component: () => import('@/views/layout/'),
    children: [
      {
        // 首页
        name: 'home',
        path: '',
        component: () => import('@/views/home/')
      },
      {
        // 问答
        name: 'qa',
        path: 'qa',
        component: () => import('@/views/qa/')
      },
      {
        // 视频
        name: 'video',
        path: 'video',
        component: () => import('@/views/video/')
      },
      {
        // 首页
        name: 'my',
        path: 'my',
        component: () => import('@/views/my/')
      }
    ]
  }, {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/')
  }
]

const router = new VueRouter({ routes })

export default router
