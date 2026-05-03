<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <!-- Page Header -->
        <div class="text-center mb-10">
          <v-icon color="primary" size="64" class="mb-4">mdi-account-group</v-icon>
          <h1 class="text-h3 font-weight-bold text-primary mb-3">Sobre Nosotros</h1>
          <v-divider class="mx-auto mt-4" style="max-width: 80px; border-color: #1A237E; border-width: 3px;" />
          <p class="text-body-1 text-grey-darken-1 mt-6 mx-auto" style="max-width: 720px;">
            Bienvenido a <strong>Adarugoma Kendo Club</strong>, un lugar donde la disciplina, la técnica y el
            espíritu del kendo se viven en cada entrenamiento. Desde nuestra fundación en
            <strong>junio de 2024</strong>, nos hemos dedicado a enseñar y promover el arte del kendo
            combinando tradición y modernidad, tanto a los amantes de las artes marciales como a aquellos
            que quieren explorar este camino de autodescubrimiento.
          </p>
        </div>

        <!-- Historia -->
        <v-card class="mb-8" elevation="2" rounded="lg">
          <v-card-title class="bg-primary text-white pa-4 text-h5">
            <v-icon class="mr-2">mdi-history</v-icon>
            Nuestra Historia
          </v-card-title>
          <v-card-text class="pa-6 text-body-1">
            <p class="mb-4">
              El club nació de la pasión de <strong>Fernando Mujica Déniz (5º Dan)</strong>,
              <strong>Naira Sánchez Vadillo (2º Dan)</strong> e <strong>Iván Tacoronte Déniz (2º Dan)</strong>,
              quienes quisieron crear un espacio donde tanto principiantes como avanzados pudieran aprender
              y perfeccionarse en un entorno seguro y motivador.
            </p>
            <p>
              A lo largo de los años, hemos participado en competiciones locales y nacionales, y hemos
              aportado nuestro grano de arena al crecimiento de la comunidad <strong>kendoka en Canarias</strong>.
            </p>
          </v-card-text>
        </v-card>

        <!-- Valores -->
        <v-row class="mb-8">
          <v-col cols="12">
            <h2 class="text-h5 font-weight-bold text-primary mb-6 text-center">Nuestros Valores</h2>
          </v-col>
          <v-col v-for="valor in valores" :key="valor.title" cols="12" sm="6" md="4">
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
                Fomentar la práctica del kendo como medio de desarrollo personal, cultivando valores
                como el respeto, la constancia, el autocontrol y la camaradería entre nuestros miembros.
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
    icon: 'mdi-arm-flex',
    title: 'Disciplina',
    text: 'Cada práctica es una oportunidad para mejorar tanto física como mentalmente.',
    color: 'amber-darken-2',
  },
  {
    icon: 'mdi-handshake',
    title: 'Respeto',
    text: 'Valoramos la cortesía y la consideración hacia todos los compañeros y adversarios.',
    color: 'orange-darken-2',
  },
  {
    icon: 'mdi-account-group',
    title: 'Comunidad',
    text: 'Fomentamos un ambiente de apoyo mutuo y crecimiento colectivo.',
    color: 'green-darken-2',
  },
]
</script>
