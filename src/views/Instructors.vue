<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <!-- Page Header -->
        <div class="text-center mb-10">
          <v-icon color="primary" size="64" class="mb-4">mdi-account-star</v-icon>
          <h1 class="text-h3 font-weight-bold text-primary mb-3">Instructores</h1>
          <p class="text-body-1 text-grey-darken-1">
            Conoce al equipo docente de Adarugoma
          </p>
          <v-divider class="mx-auto mt-4" style="max-width: 80px; border-color: #1A237E; border-width: 3px;" />
        </div>

        <!-- Instructor Cards -->
        <v-row>
          <v-col v-for="instructor in instructors" :key="instructor.name" cols="12" sm="6" md="4">
            <v-card class="h-100" elevation="3" rounded="lg">
              <v-sheet :color="instructor.color" class="d-flex align-center justify-center" height="180">
                <v-icon size="96" color="white">mdi-account-circle</v-icon>
              </v-sheet>
              <v-card-title class="pt-4 text-h6 font-weight-bold">
                {{ instructor.name }}
              </v-card-title>
              <v-card-subtitle class="text-primary font-weight-medium">
                {{ instructor.role }}
              </v-card-subtitle>
              <v-card-text>
                <div class="d-flex align-center mb-2">
                  <v-icon size="18" color="amber" class="mr-1">mdi-star</v-icon>
                  <span class="text-body-2 font-weight-medium">{{ instructor.rank }}</span>
                </div>
                <p class="text-body-2 text-grey-darken-1 mb-3">{{ instructor.bio }}</p>
                <v-chip v-for="spec in instructor.specialties" :key="spec" size="small" color="primary" variant="tonal"
                  class="mr-1 mb-1">
                  {{ spec }}
                </v-chip>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const instructors = [
  {
    name: 'Sensei Fernando Mujica Déniz',
    role: 'Instructor Principal / Fundador',
    rank: '5.º Dan – Kendo Renshi',
    color: 'primary',
    bio: 'Con más de 20 años de experiencia en Kendo, Sensei Fernando Mujica Déniz fundó Adarugoma con el objetivo de compartir su pasión y conocimiento por las artes marciales japonesas.',
    specialties: ['Kata', 'Competición', 'Nito'],
  },
  {
    name: 'Senpai Naira Sánchez Vadillo',
    role: 'Monitora - Kyus',
    rank: '2.º Dan – Kendo',
    color: 'secondary',
    bio: 'Bronce en equipos del campeonato de España 2025-2026, demostrando que el kendo no tiene edad.',
    specialties: ['Juvenil', 'Shiai'],
  },
  {
    name: 'Senpai Iván Tacoronte Déniz',
    role: '',
    rank: '2.º Dan – Kendo',
    color: 'accent',
    bio: 'Miembro del club desde sus inicios, Iván compagina su práctica avanzada con la ayuda en los entrenamientos de iniciación, transmitiendo los valores del dojo.',
    specialties: ['Keiko libre'],
  },
]
</script>
