<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <!-- Page Header -->
        <div class="text-center mb-10">
          <v-icon color="primary" size="64" class="mb-4">mdi-sword</v-icon>
          <h1 class="text-h3 font-weight-bold text-primary mb-3">¿Qué es el Kendo?</h1>
          <p class="text-body-1 text-grey-darken-1">
            Descubre la historia, filosofía y práctica del arte marcial japonés del camino de la espada
          </p>
          <v-divider class="mx-auto mt-4" style="max-width: 80px; border-color: #1A237E; border-width: 3px;" />
        </div>

        <!-- Definition -->
        <v-card class="mb-8" elevation="2" rounded="lg">
          <v-sheet color="primary" class="pa-6 d-flex align-center">
            <v-icon color="white" size="48" class="mr-4">mdi-ideogram-cjk</v-icon>
            <div>
              <div class="text-h5 font-weight-bold text-white mb-1">剣道 · Kendō</div>
              <div class="text-body-1 text-blue-lighten-3">
                "El camino de la espada" — Arte marcial japonés derivado de las técnicas de esgrima tradicional del samurái
              </div>
            </div>
          </v-sheet>
          <v-card-text class="pa-6 text-body-1">
            <p class="mb-4">
              El <strong>Kendo</strong> (剣道, literalmente "camino de la espada") es una disciplina marcial
              moderna japonesa que deriva de las técnicas de esgrima (<em>kenjutsu</em>) empleadas por los
              samuráis durante siglos. A través de la práctica del Kendo, los practicantes no solo aprenden
              a manejar el <em>shinai</em> (espada de bambú) con destreza, sino que cultivan su carácter,
              su mente y su espíritu.
            </p>
            <p>
              En Japón, el Kendo no se considera simplemente un deporte, sino una vía de perfeccionamiento
              personal (<em>do</em>). El objetivo del Kendo, según la <em>All Japan Kendo Federation</em>,
              es "moldear la mente y el cuerpo, cultivar un espíritu vigoroso, y a través de un entrenamiento
              correcto y riguroso, esforzarse por la mejora en el arte del Kendo, sostener la cortesía y
              el honor, asociarse con los demás con sinceridad, y perseguir siempre el cultivo de uno mismo".
            </p>
          </v-card-text>
        </v-card>

        <!-- History Timeline -->
        <h2 class="text-h5 font-weight-bold text-primary mb-6">Historia del Kendo</h2>
        <v-timeline side="end" density="compact" class="mb-10">
          <v-timeline-item
            v-for="event in history"
            :key="event.period"
            :dot-color="event.color"
            size="small"
          >
            <v-card elevation="1" rounded="lg">
              <v-card-subtitle class="font-weight-bold text-primary pt-3">{{ event.period }}</v-card-subtitle>
              <v-card-title class="text-body-1 font-weight-bold pt-1">{{ event.title }}</v-card-title>
              <v-card-text class="text-body-2">{{ event.text }}</v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>

        <!-- Equipment -->
        <h2 class="text-h5 font-weight-bold text-primary mb-6">El Equipo (Bogu y Shinai)</h2>
        <v-row class="mb-10">
          <v-col
            v-for="equip in equipment"
            :key="equip.name"
            cols="12"
            sm="6"
            md="3"
          >
            <v-card class="text-center pa-4 h-100" elevation="2" rounded="lg">
              <v-icon :color="equip.color" size="52" class="mb-3">{{ equip.icon }}</v-icon>
              <v-card-title class="justify-center text-body-1 font-weight-bold pa-0 mb-1">
                {{ equip.name }}
              </v-card-title>
              <v-card-subtitle class="pa-0 text-caption mb-2">{{ equip.japanese }}</v-card-subtitle>
              <v-card-text class="text-body-2 pa-0">{{ equip.desc }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Grades -->
        <h2 class="text-h5 font-weight-bold text-primary mb-6">Grados y Rangos</h2>
        <v-card elevation="2" rounded="lg" class="mb-10">
          <v-table>
            <thead>
              <tr class="bg-primary">
                <th class="text-white font-weight-bold">Rango</th>
                <th class="text-white font-weight-bold">Denominación</th>
                <th class="text-white font-weight-bold">Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="grade in grades" :key="grade.rank">
                <td>
                  <v-chip :color="grade.color" size="small" variant="tonal">{{ grade.rank }}</v-chip>
                </td>
                <td class="font-weight-medium">{{ grade.name }}</td>
                <td class="text-body-2">{{ grade.desc }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card>

        <!-- CTA -->
        <v-sheet color="primary" rounded="lg" class="pa-8 text-center text-white">
          <v-icon size="48" color="white" class="mb-4">mdi-sword-cross</v-icon>
          <h2 class="text-h5 font-weight-bold mb-3">¿Listo para empezar tu camino en el Kendo?</h2>
          <p class="text-body-1 text-blue-lighten-4 mb-4">
            Ven a conocernos. La primera clase es gratuita y sin compromiso.
          </p>
          <div class="d-flex justify-center gap-4 flex-wrap">
            <v-btn to="/entrenamientos" color="white" variant="elevated" class="text-primary font-weight-bold">
              Ver horarios
            </v-btn>
            <v-btn to="/contacto" variant="outlined" color="white" class="ml-2">Contactar</v-btn>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const history = [
  { period: 'Siglos XII–XVI', title: 'Los orígenes del Kenjutsu', text: 'Las técnicas de esgrima japonesa (kenjutsu) se desarrollan entre los samuráis del período feudal. Surgen numerosas escuelas (ryūha) con distintos estilos y filosofías.', color: 'brown-darken-2' },
  { period: 'Siglo XVII', title: 'Período Edo y el refinamiento del arte', text: 'Durante el período de paz de la era Edo, el kenjutsu evoluciona de técnica de combate a vía de desarrollo espiritual. Se introduce el shinai y el bogu para la práctica segura.', color: 'blue-darken-2' },
  { period: '1895', title: 'Fundación del Butokukai', text: 'Se funda la Dai Nippon Butokukai, institución que promueve y estandariza las artes marciales japonesas, incluyendo el kendo.', color: 'primary' },
  { period: '1952', title: 'Fundación de la All Japan Kendo Federation', text: 'Tras la Segunda Guerra Mundial, se refunda la práctica del kendo bajo una nueva federación con el objetivo de cultivar el carácter a través de la disciplina marcial.', color: 'green-darken-2' },
  { period: '1970', title: 'Nacimiento de la FIK', text: 'Se funda la Federación Internacional de Kendo (FIK), que establece las reglas modernas y coordina la práctica mundial del Kendo.', color: 'orange-darken-2' },
  { period: 'Actualidad', title: 'El Kendo en el mundo', text: 'Hoy en día más de 6 millones de personas practican Kendo en más de 60 países. Se celebran campeonatos mundiales cada tres años.', color: 'red-darken-2' },
]

const equipment = [
  { icon: 'mdi-sword', name: 'Shinai', japanese: '竹刀', desc: 'Espada de bambú utilizada para el entrenamiento y la competición de forma segura.', color: 'brown-darken-1' },
  { icon: 'mdi-hard-hat', name: 'Men', japanese: '面', desc: 'Casco de protección que cubre la cabeza, la cara y la garganta del kendoka.', color: 'primary' },
  { icon: 'mdi-shield', name: 'Dō', japanese: '胴', desc: 'Protector del torso que cubre el pecho y el abdomen.', color: 'secondary' },
  { icon: 'mdi-hand-back-right', name: 'Kote', japanese: '小手', desc: 'Guanteletes acolchados que protegen las manos y las muñecas.', color: 'green-darken-2' },
]

const grades = [
  { rank: '6.º Kyū – 1.º Kyū', name: 'Kyū (級)', desc: 'Grados de aprendiz. Se otorgan durante los primeros años de práctica.', color: 'green' },
  { rank: '1.º Dan – 3.º Dan', name: 'Shodan a Sandan', desc: 'Grados de iniciado. Demuestran dominio de los fundamentos técnicos.', color: 'blue' },
  { rank: '4.º Dan – 6.º Dan', name: 'Yondan a Rokudan', desc: 'Grados avanzados. Reflejan experiencia profunda y madurez técnica y espiritual.', color: 'primary' },
  { rank: '7.º Dan – 8.º Dan', name: 'Nanadan a Hachidan', desc: 'Los grados más altos de dan. Reconocimiento excepcional de maestría técnica y de carácter.', color: 'red' },
  { rank: 'Renshi / Kyoshi / Hanshi', name: 'Títulos honoríficos', desc: 'Títulos que acompañan a los altos dan y reconocen la capacidad docente y de liderazgo del kenshi.', color: 'amber-darken-2' },
]
</script>
