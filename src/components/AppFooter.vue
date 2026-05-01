<template>
  <v-footer color="primary">
    <v-container>
      <v-row align="center">
        <!-- Left: Follow us on social media -->
        <v-col cols="12" md="6" class="d-flex align-center justify-center justify-md-start py-2">
          <span class="text-white text-body-2 font-weight-medium mr-3">Síguenos en redes</span>
          <v-btn
            v-for="social in socials"
            :key="social.label"
            :icon="social.icon"
            variant="text"
            color="white"
            size="small"
            :href="social.href"
            target="_blank"
            class="mx-1"
          />
        </v-col>

        <!-- Right: WhatsApp contact -->
        <v-col cols="12" md="6" class="d-flex align-center justify-center justify-md-end py-2">
          <span class="text-white text-body-2 font-weight-medium mr-3">Contáctanos</span>
          <v-btn
            icon="mdi-whatsapp"
            variant="text"
            color="white"
            size="small"
            href="https://wa.me/34600000000"
            target="_blank"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
const socials = [
  { icon: 'mdi-twitter', href: 'https://twitter.com/adarugoma', label: 'Twitter' },
  { icon: 'mdi-facebook', href: 'https://facebook.com/adarugoma', label: 'Facebook' },
  { icon: 'mdi-instagram', href: 'https://instagram.com/adarugoma', label: 'Instagram' },
]
</script>
