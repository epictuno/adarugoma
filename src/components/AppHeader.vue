<template>
  <!-- Desktop app bar -->
  <v-app-bar color="primary" elevation="4">
    <!-- Mobile: hamburger only -->
    <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />

    <!-- Desktop: three-column nav -->
    <div class="d-none d-md-flex nav-row px-4">
      <!-- Left: ¿Interesado? -->
      <div class="nav-cell nav-left">
        <v-menu location="bottom start">
          <template #activator="{ props }">
            <v-btn v-bind="props" variant="text" color="white" append-icon="mdi-chevron-down">
              ¿Interesado?
            </v-btn>
          </template>
          <v-list density="compact" min-width="240">
            <v-list-item
              v-for="item in interestedMenu"
              :key="item.to"
              :to="item.to"
              :prepend-icon="item.icon"
              :title="item.label"
            />
          </v-list>
        </v-menu>
     </div>

      <!-- Center: Inicio -->
      <div class="nav-cell nav-center">
        <v-btn to="/" variant="text" color="white" size="large" class="font-weight-bold">
          Adarugoma Kendo Club
        </v-btn>
      </div>

      <!-- Right: Acerca de nosotros -->
      <div class="nav-cell nav-right">
        <v-menu location="bottom end">
          <template #activator="{ props }">
            <v-btn v-bind="props" variant="text" color="white" append-icon="mdi-chevron-down">
              Acerca de nosotros
            </v-btn>
          </template>
          <v-list density="compact" min-width="240">
            <v-list-item
              v-for="item in aboutMenu"
              :key="item.to"
              :to="item.to"
              :prepend-icon="item.icon"
              :title="item.label"
            />
          </v-list>
        </v-menu>
      </div>
    </div>
  </v-app-bar>

  <!-- Mobile navigation drawer -->
  <v-navigation-drawer v-model="drawer" temporary location="left">
    <v-list-item prepend-icon="mdi-sword-cross" title="Adarugoma" nav class="py-4" />
    <v-divider />
    <v-list nav density="compact">
      <v-list-item prepend-icon="mdi-home" title="Inicio" to="/" @click="drawer = false" />
      <v-divider class="my-1" />
      <v-list-subheader>¿Interesado?</v-list-subheader>
      <v-list-item
        v-for="item in interestedMenu"
        :key="item.to"
        :prepend-icon="item.icon"
        :title="item.label"
        :to="item.to"
        @click="drawer = false"
      />
      <v-divider class="my-1" />
      <v-list-subheader>Acerca de nosotros</v-list-subheader>
      <v-list-item
        v-for="item in aboutMenu"
        :key="item.to"
        :prepend-icon="item.icon"
        :title="item.label"
        :to="item.to"
        @click="drawer = false"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)

const interestedMenu = [
  { to: '/entrenamientos', label: 'Entrenamientos y horarios', icon: 'mdi-calendar-clock' },
  { to: '/noticias', label: 'Noticias y Eventos', icon: 'mdi-newspaper' },
  { to: '/que-es-el-kendo', label: '¿Qué es el Kendo?', icon: 'mdi-sword' },
]

const aboutMenu = [
  { to: '/sobre-nosotros', label: 'Sobre nosotros y historia', icon: 'mdi-account-group' },
  { to: '/instructores', label: 'Instructores', icon: 'mdi-account-star' },
  { to: '/galeria', label: 'Galería y Multimedia', icon: 'mdi-image-multiple' },
  { to: '/contacto', label: 'Contacto', icon: 'mdi-email' },
]
</script>

<style scoped>
.nav-row {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
}

.nav-cell {
  flex: 1;
  display: flex;
  align-items: center;
}

.nav-left {
  justify-content: flex-start;
}

.nav-center {
  justify-content: center;
}

.nav-right {
  justify-content: flex-end;
}
</style>
