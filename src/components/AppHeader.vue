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
            <v-list-item v-for="item in interestedMenu" :key="item.to" :to="item.to" :title="item.label">
              <template #prepend>
                <v-img v-if="item.image" :src="item.image" alt="" width="28" height="28" contain class="mr-2 rounded" />
                <v-icon v-else>{{ item.icon }}</v-icon>
              </template>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!-- Center: Inicio -->
      <div class="nav-cell nav-center">
        <v-btn to="/" variant="text" color="white" size="large" class="font-weight-bold d-flex align-center">
          <v-img src="/images/gallery/logoAdarugoma.png" alt="Logo Adarugoma" width="32" height="32" contain
            class="mr-3 rounded" />
          <span>Adarugoma Kendo Club</span>
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
            <v-list-item v-for="item in aboutMenu" :key="item.to" :to="item.to" :title="item.label">
              <template #prepend>
                <v-img v-if="item.image" :src="item.image" alt="" width="28" height="28" contain class="mr-2 rounded" />
                <v-icon v-else>{{ item.icon }}</v-icon>
              </template>
            </v-list-item>
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
      <v-list-item v-for="item in interestedMenu" :key="item.to" :title="item.label" :to="item.to"
        @click="drawer = false">
        <template #prepend>
          <v-img v-if="item.image" :src="item.image" alt="" width="28" height="28" contain class="mr-2 rounded" />
          <v-icon v-else>{{ item.icon }}</v-icon>
        </template>
      </v-list-item>
      <v-divider class="my-1" />
      <v-list-subheader>Acerca de nosotros</v-list-subheader>
      <v-list-item v-for="item in aboutMenu" :key="item.to" :title="item.label" :to="item.to" @click="drawer = false">
        <template #prepend>
          <v-img v-if="item.image" :src="item.image" alt="" width="28" height="28" contain class="mr-2 rounded" />
          <v-icon v-else>{{ item.icon }}</v-icon>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type MenuItem = { to: string; label: string; icon?: string; image?: string }

const drawer = ref(false)

const interestedMenu: MenuItem[] = [
  { to: '/entrenamientos', label: 'Entrenamientos y horarios', icon: 'mdi-calendar-clock', image: '/images/gallery/iconoKendo.png' },
  { to: '/noticias', label: 'Noticias y Eventos', icon: 'mdi-newspaper', image: '/images/gallery/calendarioKendo.png' },
  { to: '/que-es-el-kendo', label: '¿Qué es el Kendo?', icon: 'mdi-sword', image: '/images/gallery/espadaMadera.png' },
]

const aboutMenu: MenuItem[] = [
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
