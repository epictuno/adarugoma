import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import SobreNosotros from '@/views/SobreNosotros.vue'
import Entrenamientos from '@/views/Entrenamientos.vue'
import Instructores from '@/views/Instructores.vue'
import Galeria from '@/views/Galeria.vue'
import Noticias from '@/views/Noticias.vue'
import Contacto from '@/views/Contacto.vue'
import QueEsElKendo from '@/views/QueEsElKendo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'inicio', component: Inicio },
    { path: '/sobre-nosotros', name: 'sobre-nosotros', component: SobreNosotros },
    { path: '/entrenamientos', name: 'entrenamientos', component: Entrenamientos },
    { path: '/instructores', name: 'instructores', component: Instructores },
    { path: '/galeria', name: 'galeria', component: Galeria },
    { path: '/noticias', name: 'noticias', component: Noticias },
    { path: '/contacto', name: 'contacto', component: Contacto },
    { path: '/que-es-el-kendo', name: 'que-es-el-kendo', component: QueEsElKendo },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
