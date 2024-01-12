import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/HomeAposLogin/:username',
    name: 'HomeAposLogin',
    component: () => import(/* webpackChunkName: "HomeAposLogin" */ '../views/AposLogin/HomeAposLogin.vue')
  },
  {
    path: '/Contactos',
    name: 'Contactos',
    component: () => import(/* webpackChunkName: "Contactos" */ '../views/Contactos.vue')
  },
  {
    path: '/Definicoes',
    name: 'Definicoes',
    component: () => import(/* webpackChunkName: "Definicoes" */ '../views/AposLogin/Definicoes.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
