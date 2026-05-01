<template>
  <v-footer color="primary" class="mt-auto">
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cols="12" md="4" class="text-center text-md-left">
          <div class="text-h6 font-weight-bold text-white">
            <v-icon class="mr-1">mdi-sword-cross</v-icon>
            Adarugoma
          </div>
          <div class="text-caption text-blue-lighten-4">Club de Kendo</div>
        </v-col>

        <v-col cols="12" md="4" class="text-center">
          <div class="text-body-2 text-white mb-2">Síguenos en redes sociales</div>
          <v-btn
            v-for="social in socials"
            :key="social.icon"
            :icon="social.icon"
            variant="text"
            color="white"
            size="small"
            class="mx-1"
            :href="social.href"
            target="_blank"
          />
        </v-col>

        <v-col cols="12" md="4" class="text-center text-md-right">
          <div class="text-caption text-blue-lighten-4">
            © {{ new Date().getFullYear() }} Adarugoma – Club de Kendo
          </div>
          <div class="text-caption text-blue-lighten-4">Todos los derechos reservados</div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
const socials = [
  { icon: 'mdi-facebook', href: '#' },
  { icon: 'mdi-instagram', href: '#' },
  { icon: 'mdi-youtube', href: '#' },
  { icon: 'mdi-twitter', href: '#' },
]
</script>
