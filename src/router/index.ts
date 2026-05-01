import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import AboutUs from '@/views/AboutUs.vue'
import Training from '@/views/Training.vue'
import Instructors from '@/views/Instructors.vue'
import Gallery from '@/views/Gallery.vue'
import News from '@/views/News.vue'
import Contact from '@/views/Contact.vue'
import WhatIsKendo from '@/views/WhatIsKendo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'inicio', component: Home },
    { path: '/sobre-nosotros', name: 'sobre-nosotros', component: AboutUs },
    { path: '/entrenamientos', name: 'entrenamientos', component: Training },
    { path: '/instructores', name: 'instructores', component: Instructors },
    { path: '/galeria', name: 'galeria', component: Gallery },
    { path: '/noticias', name: 'noticias', component: News },
    { path: '/contacto', name: 'contacto', component: Contact },
    { path: '/que-es-el-kendo', name: 'que-es-el-kendo', component: WhatIsKendo },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
