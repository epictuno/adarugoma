<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="8" class="text-center text-white">
      <v-img src="/images/gallery/logoAdarugoma.png" alt="Logo Adarugoma" width="1920" height="720" contain
        class="mb-4 mx-auto" />
    </v-col>
    <v-col cols="12" md="8" class="text-center text-white"  >
          <h1 class="text-h3 font-weight-bold text-primary mb-3">Bienvenidos a Adarugoma</h1>
          <h2 class="text-h4 font-weight-bold font-italic text-black mb-2">
            Despierta el guerrero que llevas dentro
          </h2>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const features = [
  {
    icon: 'mdi-shield-sword',
    title: 'Disciplina',
    text: 'El Kendo forja la disciplina mental y física a través de la práctica constante y la dedicación.',
    color: 'primary',
  },
  {
    icon: 'mdi-heart-pulse',
    title: 'Salud',
    text: 'Mejora tu condición física, coordinación y reflejos con entrenamientos dinámicos y completos.',
    color: 'red',
  },
  {
    icon: 'mdi-account-group',
    title: 'Comunidad',
    text: 'Forma parte de una comunidad unida por los valores del respeto, la lealtad y la amistad.',
    color: 'green',
  },
  {
    icon: 'mdi-book-open-variant',
    title: 'Cultura',
    text: 'Aprende la rica historia y filosofía japonesa que inspira cada movimiento del Kendo.',
    color: 'orange',
  },
]
</script>
