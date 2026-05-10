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
  dateValue: Date
  fallbackColor: string
  description: string
}

const categories = ['Todos', 'Entrenamientos', 'Competiciones', 'Eventos', 'Seminarios', 'Miembros']
const selectedCategory = ref('Todos')
const dialog = ref(false)
const selected = ref<GalleryItem | null>(null)
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Los fundadores',
    category: 'Miembros',
    date: 'Septiembre 2025',
    dateValue: new Date(2025, 8, 1),
    image: '/images/gallery/elEquipo.jpeg',
    fallbackColor: 'primary',
    description: 'Empezando un nuevo curso.',
  },
  {
    id: 2,
    title: 'Inauguración del club',
    category: 'Miembros',
    date: 'Febrero 2024',
    dateValue: new Date(2024, 1, 1),
    image: '/images/gallery/Elequipov2.jpeg',
    fallbackColor: 'red-darken-2',
    description: 'Fernando, Naira, Taco y Sami.',
  },
  {
    id: 3,
    title: 'Ji-geiko sábado',
    category: 'Entrenamientos',
    date: '18 Abril 2026',
    dateValue: new Date(2026, 3, 18),
    image: '/images/gallery/entre1.jpeg',
    fallbackColor: 'secondary',
    description: 'Ehan vs Sao, Fernando vs Naira.',
  },
  {
    id: 4,
    title: 'Ji-geiko sábado',
    category: 'Entrenamientos',
    date: '18 Abril 2026',
    dateValue: new Date(2026, 3, 18),
    image: '/images/gallery/entre2.jpeg',
    fallbackColor: 'green-darken-2',
    description: 'Chudan frente a nito.',
  },
  {
    id: 5,
    title: 'Ji-geido sábado',
    category: 'Entrenamientos',
    date: 'Abril 2026',
    dateValue: new Date(2026, 3, 1),
    image: '/images/gallery/entre4.jpeg',
    fallbackColor: 'blue-darken-2',
    description: 'Ethan vs Sao, Fernando vs Naira 2.',
  },
  {
    id: 6,
    title: 'Practicando tsuba-seriae',
    category: 'Entrenamientos',
    date: 'Septiembre 2025',
    dateValue: new Date(2025, 8, 1),
    image: '/images/gallery/entreSep25.jpeg',
    fallbackColor: 'blue-darken-2',
    description: 'Entrenamiento base.',
  },
  {
    id: 7,
    title: 'Empezando la clase',
    category: 'Entrenamientos',
    date: 'Septiembre 2025',
    dateValue: new Date(2025, 8, 1),
    image: '/images/gallery/entreSept25-2.jpeg',
    fallbackColor: 'blue-darken-2',
    description: 'Entrenamiento base.',
  },
  {
    id: 8,
    title: 'Ji-geiko',
    category: 'Entrenamientos',
    date: 'Septiembre 2025',
    dateValue: new Date(2025, 8, 1),
    image: '/images/gallery/entreSept25-3.jpeg',
    fallbackColor: 'blue-darken-2',
    description: 'Entrenamiento base.',
  },
  {
    id: 9,
    title: 'Finalizando entrenamiento',
    category: 'Entrenamientos',
    date: 'Septiembre 2025',
    dateValue: new Date(2025, 8, 1),
    image: '/images/gallery/finalClaseSept25.jpeg',
    fallbackColor: 'blue-darken-2',
    description: 'Finalizando el entrenamiento.',
  },
  {
    id: 10,
    title: 'Parte del equipo',
    category: 'Miembros',
    date: 'Noviembre 2025',
    dateValue: new Date(2025, 10, 1),
    image: '/images/gallery/noviembreEquipo.jpeg',
    fallbackColor: 'blue-darken-2',
    description: 'Como siempre nunca estamos todos.',
  },

]

const filteredItems = computed(() => {
  const items =
    selectedCategory.value === 'Todos'
      ? galleryItems
      : galleryItems.filter((i) => i.category === selectedCategory.value)
  return [...items].sort(
    (a, b) => b.dateValue.getTime() - a.dateValue.getTime(),
  )
})

function openLightbox(item: GalleryItem) {
  selected.value = item
  dialog.value = true
}
</script>
