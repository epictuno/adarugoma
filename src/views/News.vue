<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <!-- Page Header -->
        <div class="text-center mb-10">
          <v-img src="/images/gallery/calendarioKendo.png" alt="Adarugoma" width="100" height="100" contain class="mb-4 mx-auto" />
          <h1 class="text-h3 font-weight-bold text-primary mb-3">Noticias y Eventos</h1>
          <p class="text-body-1 text-grey-darken-1">
            Mantente al día con las últimas novedades del club
          </p>
          <v-divider class="mx-auto mt-4" style="max-width: 80px; border-color: #1A237E; border-width: 3px;" />
        </div>

        <!-- News Grid -->
        <template v-if="newsList.length > 0">
          <v-row>
            <v-col v-for="news in newsList" :key="news.id" cols="12" sm="6" md="4">
              <v-card class="h-100" elevation="2" rounded="lg">
                <v-sheet :color="news.color" class="d-flex align-center justify-center" height="160">
                  <v-icon size="56" color="white" opacity="0.6">{{ news.icon }}</v-icon>
                </v-sheet>
                <v-card-item>
                  <v-chip :color="news.tagColor" size="x-small" class="mb-2">{{ news.tag }}</v-chip>
                  <v-card-title class="text-body-1 font-weight-bold pa-0 mb-1">
                    {{ news.title }}
                  </v-card-title>
                  <v-card-subtitle class="pa-0 text-caption">
                    <v-icon size="12">mdi-calendar</v-icon> {{ news.date }}
                  </v-card-subtitle>
                </v-card-item>
                <v-card-text class="text-body-2 text-grey-darken-1">{{ news.summary }}</v-card-text>
                <v-card-actions>
                  <v-btn color="primary" variant="text" size="small">Leer más</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </template>
        <template v-else>
          <div class="d-flex justify-center mb-8">
            <v-card elevation="1" rounded="lg" class="pa-6" style="min-width:320px; max-width:800px; min-height:180px; display:flex; align-items:center; justify-content:center;">
              <div class="text-center">
                <v-icon size="40" color="primary" class="mb-3">mdi-calendar-remove</v-icon>
                <div class="text-h6 font-weight-medium mb-2">No hay noticias por el momento</div>
                <div class="text-body-2 text-grey-darken-1">Puedes añadir una noticia de ejemplo desde el código o la administración.</div>
              </div>
            </v-card>
          </div>
        </template>

        <!-- Upcoming Events (this month) -->
        <template v-if="monthEvents.length > 0">
          <h2 class="text-h5 font-weight-bold text-primary mt-12 mb-6">Eventos este mes</h2>
          <div class="d-flex align-start" style="overflow-x: auto;">
            <template v-for="(event, index) in monthEvents" :key="event.id">
              <!-- Event card -->
              <div class="d-flex flex-column align-center" style="min-width: 180px; max-width: 220px;">
                <!-- Dot + date -->
                <div class="rounded-circle d-flex align-center justify-center mb-2"
                  :style="`width:44px;height:44px;background-color:rgb(var(--v-theme-${event.color}));flex-shrink:0`">
                  <v-icon color="white" size="22">mdi-calendar-check</v-icon>
                </div>
                <span class="text-caption font-weight-bold text-primary mb-1">{{ event.displayDate }}</span>
                <v-card elevation="2" rounded="lg" class="w-100 text-center pa-3">
                  <div class="text-body-2 font-weight-bold mb-1">{{ event.title }}</div>
                  <div class="text-caption text-grey">{{ event.place }}</div>
                </v-card>
              </div>
              <!-- Connector line (not after last) -->
              <div v-if="index < monthEvents.length - 1"
                style="flex: 1; height: 2px; background: #1A237E; min-width: 24px; margin-top: 21px; opacity: 0.3;" />
            </template>
          </div>
        </template>
        <template v-else>
          <h2 class="text-h5 font-weight-bold text-primary mt-12 mb-6">Eventos este mes</h2>
          <div class="d-flex justify-center mb-8">
            <v-card elevation="1" rounded="lg" class="pa-6" style="min-width:320px; max-width:800px; min-height:180px; display:flex; align-items:center; justify-content:center;">
              <div class="text-center">
                <v-icon size="40" color="primary" class="mb-3">mdi-calendar-remove</v-icon>
                <div class="text-h6 font-weight-medium mb-2">No hay eventos programados este mes</div>
                <div class="text-body-2 text-grey-darken-1">Añade eventos de ejemplo para que se muestren aquí.</div>
              </div>
            </v-card>
          </div>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
type NewsItem = {
  id: number
  title: string
  date: string
  summary: string
  tag: string
  tagColor: string
  color: string
  icon?: string
}

type EventItem = {
  id: number
  title: string
  isoDate: string
  place: string
  description?: string
  color?: string
}

// Ejemplo inicial: reemplaza o añade nuevos objetos según necesites.
const newsList: NewsItem[] = [
  /*{
    id: 100,
    title: 'Ejemplo: Seminario de introducción',
    date: '10 de mayo de 2026',
    summary: 'Sesión abierta para nuevos miembros donde se introducen las bases del kendo.',
    tag: 'Ejemplo',
    tagColor: 'blue',
    color: 'secondary',
    icon: 'mdi-school',
  },*/
]

// Ejemplo de evento: modifica la fecha ISO para probar la visualización mensual.
const upcomingEvents: EventItem[] = [
 /* {
    id: 200,
    title: 'Ejemplo: Jornada abierta',
    isoDate: new Date().toISOString().slice(0, 10),
    place: 'Dojo Adarugoma',
    description: 'Evento abierto para probar el componente de eventos.',
    color: 'primary',
  },*/
]

const today = new Date()
today.setHours(0, 0, 0, 0)
const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)
const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)
endOfMonth.setHours(23, 59, 59, 999)

const monthEvents = upcomingEvents
  .filter(e => {
    const d = new Date(e.isoDate)
    return d >= startOfMonth && d <= endOfMonth
  })
  .sort((a, b) => a.isoDate.localeCompare(b.isoDate))
  .map(e => ({
    ...e,
    displayDate: new Date(e.isoDate).toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' }),
  }))
</script>
