<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <!-- Page Header -->
        <div class="text-center mb-10">
          <v-icon color="primary" size="64" class="mb-4">mdi-newspaper</v-icon>
          <h1 class="text-h3 font-weight-bold text-primary mb-3">Noticias y Eventos</h1>
          <p class="text-body-1 text-grey-darken-1">
            Mantente al día con las últimas novedades del club
          </p>
          <v-divider class="mx-auto mt-4" style="max-width: 80px; border-color: #1A237E; border-width: 3px;" />
        </div>

        <!-- Featured News -->
        <v-card class="mb-8" elevation="3" rounded="lg">
          <v-row no-gutters>
            <v-col cols="12" md="5">
              <v-sheet
                color="primary"
                class="d-flex align-center justify-center"
                :height="$vuetify.display.mdAndUp ? '100%' : '200px'"
                min-height="200"
              >
                <v-icon size="80" color="white" opacity="0.6">mdi-newspaper-variant-outline</v-icon>
              </v-sheet>
            </v-col>
            <v-col cols="12" md="7">
              <v-card-title class="d-flex align-center justify-space-between pt-4 px-4 flex-wrap">
                <v-chip color="red" size="small" variant="elevated">Destacado</v-chip>
              </v-card-title>
              <v-card-text class="px-4">
                <h2 class="text-h5 font-weight-bold text-primary mb-2">
                  Adarugoma consigue tres medallas en el Campeonato Autonómico 2024
                </h2>
                <p class="text-caption text-grey mb-3">
                  <v-icon size="14">mdi-calendar</v-icon> 15 de marzo de 2024
                </p>
                <p class="text-body-2 text-grey-darken-1">
                  Nuestros competidores brillaron en el Campeonato Autonómico de Kendo celebrado
                  este fin de semana. Con un total de tres medallas (1 oro, 1 plata y 1 bronce),
                  el club afianza su posición entre los mejores de la región...
                </p>
              </v-card-text>
              <v-card-actions class="px-4 pb-4">
                <v-btn color="primary" variant="tonal" append-icon="mdi-arrow-right">
                  Leer más
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>

        <!-- News Grid -->
        <v-row>
          <v-col
            v-for="news in newsList"
            :key="news.id"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card class="h-100" elevation="2" rounded="lg">
              <v-sheet
                :color="news.color"
                class="d-flex align-center justify-center"
                height="160"
              >
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

        <!-- Upcoming Events -->
        <h2 class="text-h5 font-weight-bold text-primary mt-12 mb-6">Próximos Eventos</h2>
        <v-timeline side="end" density="compact">
          <v-timeline-item
            v-for="event in upcomingEvents"
            :key="event.id"
            :dot-color="event.color"
            size="small"
          >
            <v-card elevation="1" rounded="lg">
              <v-card-title class="text-body-1 font-weight-bold">{{ event.title }}</v-card-title>
              <v-card-subtitle>{{ event.date }} · {{ event.place }}</v-card-subtitle>
              <v-card-text class="text-body-2">{{ event.description }}</v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const newsList = [
  {
    id: 1,
    title: 'Nuevo seminario de Kata con Sensei Nakamura',
    date: '5 de abril de 2024',
    summary: 'Tenemos el placer de anunciar un seminario especial de Nihon Kendo Kata a cargo del reconocido Sensei Nakamura, 6.º Dan.',
    tag: 'Seminario',
    tagColor: 'blue',
    color: 'secondary',
    icon: 'mdi-school',
  },
  {
    id: 2,
    title: 'Incorporación de nuevos horarios juveniles',
    date: '20 de marzo de 2024',
    summary: 'A partir del próximo mes ampliamos nuestra oferta para menores con un nuevo grupo los viernes por la tarde.',
    tag: 'Club',
    tagColor: 'green',
    color: 'green-darken-2',
    icon: 'mdi-calendar-plus',
  },
  {
    id: 3,
    title: 'Resultados del torneo invernal',
    date: '10 de febrero de 2024',
    summary: 'Resumen de la participación de Adarugoma en el torneo invernal: grandes actuaciones de todos nuestros competidores.',
    tag: 'Competición',
    tagColor: 'red',
    color: 'red-darken-2',
    icon: 'mdi-trophy',
  },
  {
    id: 4,
    title: 'Apertura del plazo de matrícula 2024–2025',
    date: '1 de febrero de 2024',
    summary: 'Ya está abierto el plazo para inscribirse en el nuevo curso. ¡Plazas limitadas! Reserva la tuya antes de que se agoten.',
    tag: 'Club',
    tagColor: 'orange',
    color: 'orange-darken-2',
    icon: 'mdi-clipboard-text',
  },
  {
    id: 5,
    title: 'Colaboración con la Federación Española de Kendo',
    date: '15 de enero de 2024',
    summary: 'Adarugoma ha firmado un acuerdo de colaboración con la Federación Española de Kendo para la formación de árbitros.',
    tag: 'Federación',
    tagColor: 'purple',
    color: 'purple-darken-1',
    icon: 'mdi-handshake',
  },
  {
    id: 6,
    title: 'Balance de fin de año 2023',
    date: '28 de diciembre de 2023',
    summary: 'Repasamos los hitos más importantes del club durante el año 2023: medallas, seminarios, nuevos miembros y proyectos futuros.',
    tag: 'Club',
    tagColor: 'teal',
    color: 'teal-darken-2',
    icon: 'mdi-chart-bar',
  },
]

const upcomingEvents = [
  { id: 1, title: 'Seminario de Kata', date: '20 abril 2024', place: 'Dojo Adarugoma', description: 'Jornada de 8 horas dedicada a los Nihon Kendo Kata.', color: 'primary' },
  { id: 2, title: 'Campeonato Nacional', date: '11 mayo 2024', place: 'Madrid', description: 'Varios miembros representarán al club en el campeonato nacional.', color: 'red' },
  { id: 3, title: 'Exámenes de grado', date: '8 junio 2024', place: 'Federación Regional', description: 'Convocatoria de exámenes de ascenso para los miembros que cumplan los requisitos.', color: 'orange' },
  { id: 4, title: 'Campamento de verano', date: 'Agosto 2024', place: 'Centro deportivo Serra de Tramuntana', description: 'Campamento intensivo de kendo de 5 días para todos los niveles.', color: 'green' },
]
</script>
