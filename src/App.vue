<template>
  <v-app>
    <AppHeader />
    <v-main>
      <div class="main-bg">
        <div class="content-card">
          <router-view />
        </div>
      </div>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style>
.main-bg {
  background-image: url('/images/gallery/fondoDos.jpeg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh; /* ensure background covers full viewport */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-card {
  width: 100%;
  max-width: 1100px;
  background-color: rgba(255, 255, 255, 0.68);
  flex: 1;
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.55);
  min-height: calc(100vh - 160px); /* keep footer at bottom when content is small; adjust 160px if header/footer heights differ */
}
</style>
