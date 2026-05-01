<template>
  <v-app-bar color="primary" elevation="4" app>
    <v-app-bar-nav-icon
      class="d-flex d-md-none"
      @click="drawer = !drawer"
    />
    <v-toolbar-title class="font-weight-bold text-uppercase">
      <router-link to="/" class="text-white text-decoration-none">
        <v-icon class="mr-1">mdi-sword-cross</v-icon>
        Adarugoma
      </router-link>
    </v-toolbar-title>

    <v-spacer />

    <div class="d-none d-md-flex">
      <v-btn
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        variant="text"
        color="white"
        class="text-capitalize"
      >
        {{ link.label }}
      </v-btn>
    </div>
  </v-app-bar>

  <!-- Mobile drawer -->
  <v-navigation-drawer v-model="drawer" temporary location="left">
    <v-list-item
      prepend-icon="mdi-sword-cross"
      title="Adarugoma"
      nav
      class="py-4"
    />
    <v-divider />
    <v-list nav density="compact">
      <v-list-item
        v-for="link in navLinks"
        :key="link.to"
        :prepend-icon="link.icon"
        :title="link.label"
        :to="link.to"
        @click="drawer = false"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)

const navLinks = [
  { to: '/', label: 'Inicio', icon: 'mdi-home' },
  { to: '/que-es-el-kendo', label: '¿Qué es el Kendo?', icon: 'mdi-information' },
  { to: '/sobre-nosotros', label: 'Sobre Nosotros', icon: 'mdi-account-group' },
  { to: '/entrenamientos', label: 'Entrenamientos', icon: 'mdi-calendar' },
  { to: '/instructores', label: 'Instructores', icon: 'mdi-account-star' },
  { to: '/galeria', label: 'Galería', icon: 'mdi-image-multiple' },
  { to: '/noticias', label: 'Noticias', icon: 'mdi-newspaper' },
  { to: '/contacto', label: 'Contacto', icon: 'mdi-email' },
]
</script>
