<template>
  <!-- Hero Section -->
  <v-container fluid class="pa-0">
    <v-sheet color="primary" class="d-flex align-center justify-center" min-height="520">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="8" class="text-center text-white">
            <v-icon size="80" color="white" class="mb-4">mdi-sword-cross</v-icon>
            <h1 class="text-h3 text-md-h2 font-weight-bold mb-4">
              Bienvenido a Adarugoma
            </h1>
            <p class="text-h6 font-weight-regular mb-6 text-blue-lighten-4">
              Club de Kendo comprometido con la tradición, el espíritu marcial y la superación personal
            </p>
            <div class="d-flex justify-center gap-4 flex-wrap">
              <v-btn to="/que-es-el-kendo" color="white" variant="elevated" size="large"
                class="text-primary font-weight-bold">
                ¿Qué es el Kendo?
              </v-btn>
              <v-btn to="/contacto" variant="outlined" color="white" size="large" class="ml-2">
                Únete a nosotros
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-container>

  <!-- Features Section -->
  <v-container class="py-12">
    <v-row justify="center" class="mb-8">
      <v-col cols="12" class="text-center">
        <h2 class="text-h4 font-weight-bold text-primary">¿Por qué practicar Kendo?</h2>
        <v-divider class="mx-auto mt-4" style="max-width: 80px; border-color: #1A237E; border-width: 3px;" />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="feature in features" :key="feature.title" cols="12" sm="6" md="3">
        <v-card class="text-center pa-6 h-100" elevation="2" rounded="lg">
          <v-icon :color="feature.color" size="56" class="mb-4">{{ feature.icon }}</v-icon>
          <v-card-title class="text-h6 font-weight-bold justify-center pa-0 mb-2">
            {{ feature.title }}
          </v-card-title>
          <v-card-text class="text-body-2 text-grey-darken-1 pa-0">
            {{ feature.text }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- CTA Section -->
  <v-sheet color="grey-lighten-4" class="py-12">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="7" class="text-center">
          <h2 class="text-h4 font-weight-bold text-primary mb-4">
            ¿Listo para empezar tu camino? con la vieja
          </h2>
          <p class="text-body-1 text-grey-darken-2 mb-6">
            Nuestras clases están abiertas para todos los niveles. Ven a conocernos y descubre
            el mundo del Kendo en un ambiente acogedor y profesional.
          </p>
          <v-btn to="/entrenamientos" color="primary" size="large" variant="elevated">
            Ver horarios de entrenamiento
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
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
