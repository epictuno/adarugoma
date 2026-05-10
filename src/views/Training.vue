<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <!-- Page Header -->
        <div class="text-center mb-10">
          <v-img src="/images/gallery/iconoKendo.png" alt="Adarugoma" width="64" height="64" contain
            class="mb-4 mx-auto" />
          <h1 class="text-h3 font-weight-bold text-primary mb-3">Entrenamientos</h1>
          <p class="text-body-1 text-grey-darken-1">
            Consulta nuestros horarios y modalidades de entrenamiento
          </p>
          <v-divider class="mx-auto mt-4" style="max-width: 80px; border-color: #1A237E; border-width: 3px;" />
        </div>

        <!-- Info Cards -->
        <v-row class="mb-8">
          <v-col v-for="info in infoCards" :key="info.title" cols="12" sm="4">
            <v-card class="text-center pa-4 h-100" :color="info.color" theme="dark" elevation="3" rounded="lg">
              <v-icon size="40" class="mb-2">{{ info.icon }}</v-icon>
              <v-card-title class="justify-center text-h6">{{ info.title }}</v-card-title>
              <v-card-text>{{ info.text }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Schedule Table -->
        <v-card class="mb-8" elevation="2" rounded="lg">
          <v-card-title class="bg-primary text-white pa-4 text-h5">
            <v-icon class="mr-2">mdi-table</v-icon>
            Horario Semanal
          </v-card-title>
          <v-table>
            <thead>
              <tr class="bg-grey-lighten-3">
                <th class="text-left font-weight-bold">Día</th>
                <th class="text-left font-weight-bold">Hora</th>
                <th class="text-left font-weight-bold">Grupo</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="session in schedule" :key="session.id">
                <td class="font-weight-medium">{{ session.day }}</td>
                <td>{{ session.time }}</td>
                <td>
                  <v-chip :color="session.color" size="small" variant="tonal">
                    {{ session.group }}
                  </v-chip>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>

        <!-- What to bring -->
        <v-card elevation="2" rounded="lg">
          <v-card-title class="bg-primary text-white pa-4 text-h5">
            <v-icon class="mr-2">mdi-bag-personal</v-icon>
            ¿Qué traer al dojo?
          </v-card-title>
          <v-card-text class="pa-6">
            <v-row>
              <v-col v-for="item in whatToBring" :key="item.title" cols="12" sm="6" md="4">
                <div class="d-flex align-center mb-3">
                  <v-img v-if="item.image" :src="item.image" width="28" height="28" contain class="mr-3 flex-grow-0" />
                  <v-icon v-else color="primary" class="mr-2">
                    {{ item.icon }}
                  </v-icon>
                  <div>
                    <div class="font-weight-medium">{{ item.title }}</div>
                    <div class="text-body-2 text-grey-darken-1">{{ item.desc }}</div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const infoCards = [
  { icon: 'mdi-map-marker', title: 'Ubicación', text: 'Centro comercial de Tafira', color: 'primary' },
  { icon: 'mdi-currency-eur', title: 'Cuota mensual', text: '45€/mes', color: 'secondary' },
  { icon: 'mdi-phone', title: 'Información', text: 'Contactanos para tu primera clase gratuita tras un test.', color: 'accent' },
]

const schedule = [
  { id: 1, day: 'Lunes', time: '19:30 – 21:00', group: 'General', color: 'blue' },
  { id: 2, day: 'Miércoles', time: '19:30 – 21:00', group: 'Avanzado', color: 'orange' },
  { id: 3, day: 'Viernes', time: '19:30 – 21:00', group: 'General', color: 'blue' },
  { id: 4, day: 'Sábado', time: '10:00 – 11:30', group: 'Avanzado', color: 'orange' },
]

const whatToBring = [
  {
    icon: 'mdi-tshirt-crew',
    image: '/images/gallery/training/ropa.png',
    title: 'Ropa cómoda',
    desc: 'Para las primeras clases, ropa deportiva holgada',
  },
  {
    icon: 'mdi-water',
    image: '/images/gallery/training/agua.png',
    title: 'Agua',
    desc: 'Botella de agua para mantenerse hidratado',
  },
  {
    icon: 'mdi-shoe-sneaker',
    title: 'Pies descalzos',
    image: '/images/gallery/training/pies.png',
    desc: 'No se usa calzado en el tatami',
  },
  {
    icon: 'mdi-sword',
    image: '/images/gallery/training/espadaMadera.png',
    title: 'Shinai',
    desc: 'Lo proporcionamos durante las primeras sesiones',
  },
  {
    icon: 'mdi-head-cog',
    title: 'Actitud positiva',
    image: '/images/gallery/training/actitud.png',
    desc: 'Lo más importante es la disposición para aprender',
  },
  {
    icon: 'mdi-medical-bag',
    image: '/images/gallery/training/placa.png',
    title: 'Equipo (bogu)',
    desc: 'Se adquiere una vez superado el período de iniciación',
  },
]
</script>
