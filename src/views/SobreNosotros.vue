<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <!-- Page Header -->
        <div class="text-center mb-10">
          <v-icon color="primary" size="64" class="mb-4">mdi-account-group</v-icon>
          <h1 class="text-h3 font-weight-bold text-primary mb-3">Sobre Nosotros</h1>
          <v-divider class="mx-auto" style="max-width: 80px; border-color: #1A237E; border-width: 3px;" />
        </div>

        <!-- Historia -->
        <v-card class="mb-8" elevation="2" rounded="lg">
          <v-card-title class="bg-primary text-white pa-4 text-h5">
            <v-icon class="mr-2">mdi-history</v-icon>
            Nuestra Historia
          </v-card-title>
          <v-card-text class="pa-6 text-body-1">
            <p class="mb-4">
              El Club de Kendo <strong>Adarugoma</strong> fue fundado con el propósito de difundir las artes
              marciales japonesas y, en particular, el Kendo entre todos los amantes de la disciplina y la
              cultura oriental. Desde nuestros humildes comienzos con un pequeño grupo de entusiastas,
              hemos crecido hasta convertirnos en una de las referencias del Kendo en nuestra región.
            </p>
            <p class="mb-4">
              A lo largo de los años, nuestros miembros han participado en competiciones locales, nacionales
              e internacionales, obteniendo reconocimientos que nos llenan de orgullo. Sin embargo, lo que
              más nos enorgullece es la familia que hemos construido: un grupo unido por los valores del
              respeto, la perseverancia y el compañerismo.
            </p>
            <p>
              Hoy, Adarugoma sigue creciendo, abriendo sus puertas a personas de todas las edades y niveles,
              con el firme compromiso de transmitir el espíritu del Kendo de generación en generación.
            </p>
          </v-card-text>
        </v-card>

        <!-- Valores -->
        <v-row class="mb-8">
          <v-col cols="12">
            <h2 class="text-h5 font-weight-bold text-primary mb-6 text-center">Nuestros Valores</h2>
          </v-col>
          <v-col
            v-for="valor in valores"
            :key="valor.title"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card class="text-center pa-4 h-100" elevation="1" rounded="lg">
              <v-icon :color="valor.color" size="48" class="mb-3">{{ valor.icon }}</v-icon>
              <v-card-title class="justify-center text-h6 font-weight-bold">{{ valor.title }}</v-card-title>
              <v-card-text class="text-body-2">{{ valor.text }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Misión y Visión -->
        <v-row>
          <v-col cols="12" md="6">
            <v-card color="primary" theme="dark" elevation="3" rounded="lg" class="h-100">
              <v-card-title class="pa-4 text-h5">
                <v-icon class="mr-2">mdi-flag</v-icon>Misión
              </v-card-title>
              <v-card-text class="pa-4 text-body-1">
                Promover la práctica del Kendo como arte marcial y disciplina de vida, fomentando el
                desarrollo integral de nuestros miembros mediante el entrenamiento riguroso, el respeto
                y la camaradería.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card color="secondary" theme="dark" elevation="3" rounded="lg" class="h-100">
              <v-card-title class="pa-4 text-h5">
                <v-icon class="mr-2">mdi-eye</v-icon>Visión
              </v-card-title>
              <v-card-text class="pa-4 text-body-1">
                Ser el club de referencia del Kendo en nuestra región, reconocidos por la calidad técnica
                de nuestros kenshi, la excelencia de nuestra enseñanza y nuestra contribución a la difusión
                de las artes marciales japonesas.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const valores = [
  {
    icon: 'mdi-handshake',
    title: 'Respeto',
    text: 'El respeto mutuo es la base de toda práctica marcial. Respetamos a nuestros compañeros, instructores y al dojo.',
    color: 'primary',
  },
  {
    icon: 'mdi-arm-flex',
    title: 'Perseverancia',
    text: 'El camino del Kendo requiere dedicación constante. No nos rendimos ante las dificultades.',
    color: 'orange-darken-2',
  },
  {
    icon: 'mdi-account-heart',
    title: 'Compañerismo',
    text: 'Crecemos juntos, apoyándonos mutuamente en cada paso del camino.',
    color: 'red-darken-2',
  },
  {
    icon: 'mdi-school',
    title: 'Aprendizaje',
    text: 'La búsqueda del conocimiento nunca termina. Hay siempre algo nuevo que aprender.',
    color: 'green-darken-2',
  },
  {
    icon: 'mdi-scale-balance',
    title: 'Integridad',
    text: 'Actuamos con honestidad y rectitud dentro y fuera del dojo.',
    color: 'blue-darken-2',
  },
  {
    icon: 'mdi-star',
    title: 'Excelencia',
    text: 'Buscamos siempre dar lo mejor de nosotros mismos en cada entrenamiento y competición.',
    color: 'amber-darken-2',
  },
]
</script>
