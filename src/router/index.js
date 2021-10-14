// import { createRouter, createWebHashHistory } from 'vue-router';

import { createRouter, createWebHistory } from 'vue-router'

import Home from  '../views/Home.vue'    
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Vinculate from '../views/Vinculate.vue'
import Servicios from '../views/Servicios.vue'
import Calificar from '../views/Calificar.vue'
import Quienes from '../views/Quienes.vue'
import Contactenos from '../views/Contactenos.vue'
import Terminos from '../views/Terminos.vue'
import Lista from '../views/Lista.vue'
import Dashboard from '../views/Dashboard.vue'
import Recomendados from '../views/Recomendados.vue'
import Comentarios from '../views/Comentarios.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    // component: () => import('../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
    // component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
    // component: () => import('../views/Register.vue'),
  },
  {
    path: '/vinculate',
    name: 'Vinculate',
    component: Vinculate
    // component: () => import('../views/Vinculate.vue'),
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: Servicios
    // component: () => import('../views/Servicios.vue'),
  },
  {
    path: '/calificar',
    name: 'Calificar',
    component: Calificar
    // component: () => import('../views/Calificar.vue'),
  },
  {
    path: '/quienes',
    name: 'Quienes',
    component: Quienes
    // component: () => import('../views/Quienes.vue'),
  },
  {
    path: '/contactenos',
    name: 'Contactenos',
    component: Contactenos
    // component: () => import('../views/Contactenos.vue'),
  },
  {
    path: '/terminos',
    name: 'Terminos',
    component: Terminos
    // component: () => import('../views/Terminos.vue'),
  },
  {
    path: '/lista',
    name: 'Lista',
    component: Lista
    // component: () => import('../views/List.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
    // component: () => import('../views/List.vue'),
  },
   {
    path: '/recomendados',
    name: 'Recomendados',
    component: Recomendados
    // component: () => import('../views/Recomendados.vue'),
  },
   ,
  {
    methods: 'POST',
    path: '/comentarios',
    name: 'Comentarios',
    component: Comentarios
    // component: () => import('../views/Comentarios.vue'),
  }

 ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// const router = createRouter({
//   history: createWebHashHistory(),
//   linkActiveClass: 'active',
//   routes,
// });

export default router
