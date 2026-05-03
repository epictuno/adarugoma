<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <!-- Page Header -->
        <div class="text-center mb-10">
          <v-icon color="primary" size="64" class="mb-4">mdi-image-multiple</v-icon>
          <h1 class="text-h3 font-weight-bold text-primary mb-3">Galería</h1>
          <p class="text-body-1 text-grey-darken-1">
            Momentos especiales de nuestro club
          </p>
          <v-divider class="mx-auto mt-4" style="max-width: 80px; border-color: #1A237E; border-width: 3px;" />
        </div>

        <!-- Filter Chips -->
        <div class="d-flex justify-center flex-wrap gap-2 mb-8">
          <v-chip v-for="cat in categories" :key="cat" :color="selectedCategory === cat ? 'primary' : 'default'"
            :variant="selectedCategory === cat ? 'elevated' : 'tonal'" class="cursor-pointer"
            @click="selectedCategory = cat">
            {{ cat }}
          </v-chip>
        </div>

        <!-- Gallery Grid -->
        <v-row>
          <v-col v-for="item in filteredItems" :key="item.id" cols="12" sm="6" md="4">
            <v-card class="cursor-pointer" elevation="2" rounded="lg" @click="openLightbox(item)">
              <v-img :src="item.image" height="200" cover>
                <template #error>
                  <v-sheet :color="item.fallbackColor" class="d-flex align-center justify-center" height="200">
                    <v-icon size="64" color="white" opacity="0.5">mdi-image</v-icon>
                  </v-sheet>
                </template>
              </v-img>
              <v-card-title class="text-body-1 font-weight-medium pt-3">
                {{ item.title }}
              </v-card-title>
              <v-card-subtitle>{{ item.category }} · {{ item.date }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>

        <!-- Lightbox Dialog -->
        <v-dialog v-model="dialog" max-width="700">
          <v-card v-if="selected" rounded="lg">
            <v-img :src="selected.image" height="380" cover>
              <template #error>
                <v-sheet :color="selected.fallbackColor" class="d-flex align-center justify-center" height="380">
                  <v-icon size="96" color="white" opacity="0.5">mdi-image</v-icon>
                </v-sheet>
              </template>
            </v-img>
            <v-card-title>{{ selected.title }}</v-card-title>
            <v-card-subtitle>{{ selected.category }} · {{ selected.date }}</v-card-subtitle>
            <v-card-text>{{ selected.description }}</v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn variant="tonal" color="primary" @click="dialog = false">Cerrar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface GalleryItem {
  id: number
  title: string
  category: string
  date: string
  image: string
  fallbackColor: string
  description: string
}

const categories = ['Todos', 'Entrenamientos', 'Competiciones', 'Eventos', 'Seminarios', 'Redes sociales']
const selectedCategory = ref('Todos')
const dialog = ref(false)
const selected = ref<GalleryItem | null>(null)

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Entrenamiento matutino de sábado',
    category: 'Entrenamientos',
    date: 'Marzo 2024',
    image: '/images/gallery/training.svg',
    fallbackColor: 'primary',
    description: 'Keiko abierto del sábado por la mañana con participación de todos los niveles del dojo.',
  },
  {
    id: 2,
    title: 'Campeonato Regional 2024',
    category: 'Competiciones',
    date: 'Febrero 2024',
    image: '/images/gallery/competition.svg',
    fallbackColor: 'red-darken-2',
    description: 'Nuestros kenshi participaron en el campeonato regional obteniendo excelentes resultados.',
  },
  {
    id: 3,
    title: 'Seminario con Sensei Okamoto',
    category: 'Seminarios',
    date: 'Enero 2024',
    image: '/images/gallery/seminar.svg',
    fallbackColor: 'secondary',
    description: 'Intenso seminario de dos días impartido por Sensei Okamoto, 7.º Dan del Japón.',
  },
  {
    id: 4,
    title: 'Exhibición en la Feria del Deporte',
    category: 'Eventos',
    date: 'Septiembre 2023',
    image: '/images/gallery/event.svg',
    fallbackColor: 'green-darken-2',
    description: 'El club realizó una exhibición de Kendo y Kata en la Feria Municipal del Deporte.',
  },
  {
    id: 5,
    title: 'Exámenes de grado',
    category: 'Eventos',
    date: 'Junio 2023',
    image: '/images/gallery/event.svg',
    fallbackColor: 'orange-darken-2',
    description: 'Varios miembros del club superaron con éxito sus exámenes de ascenso de grado.',
  },
  {
    id: 6,
    title: 'Entrenamiento de Kata',
    category: 'Entrenamientos',
    date: 'Mayo 2023',
    image: '/images/gallery/training.svg',
    fallbackColor: 'blue-darken-2',
    description: 'Sesión especial dedicada a la práctica de los Nihon Kendo Kata con toda la escuela.',
  },
  {
    id: 7,
    title: 'Torneo Infantil y Juvenil',
    category: 'Competiciones',
    date: 'Abril 2023',
    image: '/images/gallery/competition.svg',
    fallbackColor: 'purple-darken-1',
    description: 'Nuestros jóvenes kenshi demostraron su progreso en el torneo infantil y juvenil de la zona.',
  },
  {
    id: 8,
    title: 'Cena de Navidad del Club',
    category: 'Eventos',
    date: 'Diciembre 2022',
    image: '/images/gallery/event.svg',
    fallbackColor: 'teal-darken-2',
    description: 'Reunión anual de fin de año para celebrar los logros y fortalecer los vínculos del club.',
  },
  {
    id: 9,
    title: 'Campamento de verano',
    category: 'Entrenamientos',
    date: 'Agosto 2022',
    image: '/images/gallery/training.svg',
    fallbackColor: 'amber-darken-3',
    description: 'Campamento de verano intensivo para perfeccionar técnica y espíritu fuera del dojo habitual.',
  },
  {
    id: 10,
    title: 'WhatsApp – Contáctanos',
    category: 'Redes sociales',
    date: '',
    image: '/images/gallery/social-whatsapp.svg',
    fallbackColor: 'green-darken-2',
    description: 'Escríbenos directamente por WhatsApp al +34 600 000 000 para más información sobre el club.',
  },
  {
    id: 11,
    title: 'Instagram – @adarugoma',
    category: 'Redes sociales',
    date: '',
    image: '/images/gallery/social-instagram.svg',
    fallbackColor: 'purple-darken-2',
    description: 'Síguenos en Instagram para ver fotos de entrenamientos, competiciones y eventos del club.',
  },
  {
    id: 12,
    title: 'Twitter / X – @adarugoma',
    category: 'Redes sociales',
    date: '',
    image: '/images/gallery/social-twitter.svg',
    fallbackColor: 'grey-darken-4',
    description: 'Síguenos en Twitter/X para noticias y actualizaciones del club en tiempo real.',
  },
]

const filteredItems = computed(() =>
  selectedCategory.value === 'Todos'
    ? galleryItems
    : galleryItems.filter((i) => i.category === selectedCategory.value),
)

function openLightbox(item: GalleryItem) {
  selected.value = item
  dialog.value = true
}
</script>
