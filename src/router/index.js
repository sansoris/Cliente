import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Vinculate from '@/views/Vinculate.vue'
import Servicios from '@/views/Servicios.vue'
import Calificar from '@/views/Calificar.vue'
import Quienes from '@/views/Quienes.vue'
import Contactenos from '@/views/Contactenos.vue'
import Terminos from '@/views/Terminos.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/vinculate',
    name: 'Vinculate',
    component: Vinculate
  },
   {
    path: '/servicios',
    name: 'Servicios',
    component: Servicios
  },
   {
    path: '/calificar',
    name: 'Calificar',
    component: Calificar
  },
    {
    path: 'quienes',
    name: 'Quienes',
    component: Quienes
    },
    {
    path: '/contactenos',
    name: 'Contactenos',
    component: Contactenos
  },
  {
    path: '/terminos',
    name: 'Terminos',
    component: Terminos
  },
  {
    path: '/condicionesUso',
    name: 'CondicionesUso',
    component: CondicionesUso
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
