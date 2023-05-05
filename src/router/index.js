import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/2-2',
    name: 'axios请求方法',
    component: () => import(/* webpackChunkName: "about" */ '../views/2-2.vue')
  },
  {
    path: '/2-3',
    name: '并发请求',
    component: () => import(/* webpackChunkName: "about" */ '../views/2-3.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
