<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" md="9">
        <!-- Page Header -->
        <div class="text-center mb-10">
          <v-icon color="primary" size="64" class="mb-4">mdi-email-outline</v-icon>
          <h1 class="text-h3 font-weight-bold text-primary mb-3">Contacto</h1>
          <p class="text-body-1 text-grey-darken-1">
            ¿Tienes alguna pregunta? ¡Estamos aquí para ayudarte!
          </p>
          <v-divider class="mx-auto mt-4" style="max-width: 80px; border-color: #1A237E; border-width: 3px;" />
        </div>

        <v-row>
          <!-- Contact Form -->
          <v-col cols="12" md="7">
            <v-card elevation="3" rounded="lg">
              <v-card-title class="bg-primary text-white pa-4 text-h5">
                <v-icon class="mr-2">mdi-send</v-icon>
                Envíanos un mensaje
              </v-card-title>
              <v-card-text class="pa-6">
                <v-form ref="formRef" v-model="valid" @submit.prevent="submitForm">
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="form.name" label="Nombre *" variant="outlined" :rules="[rules.required]"
                        prepend-inner-icon="mdi-account" density="comfortable" />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="form.surname" label="Apellidos" variant="outlined"
                        prepend-inner-icon="mdi-account-outline" density="comfortable" />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field v-model="form.email" label="Correo electrónico *" type="email" variant="outlined"
                        :rules="[rules.required, rules.email]" prepend-inner-icon="mdi-email" density="comfortable" />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field v-model="form.phone" label="Teléfono (opcional)" variant="outlined"
                        prepend-inner-icon="mdi-phone" density="comfortable" />
                    </v-col>
                    <v-col cols="12">
                      <v-select v-model="form.subject" label="Asunto *" :items="subjects" variant="outlined"
                        :rules="[rules.required]" prepend-inner-icon="mdi-tag" density="comfortable" />
                    </v-col>
                    <v-col cols="12">
                      <v-textarea v-model="form.message" label="Mensaje *" variant="outlined"
                        :rules="[rules.required, rules.minLength]" prepend-inner-icon="mdi-message-text" rows="5"
                        density="comfortable" counter="500" maxlength="500" />
                    </v-col>
                    <v-col cols="12">
                      <v-checkbox v-model="form.privacy" :rules="[rules.requiredCheck]" density="compact"
                        label="He leído y acepto la política de privacidad *" color="primary" />
                    </v-col>
                  </v-row>
                  <v-btn type="submit" color="primary" variant="elevated" size="large" :loading="sending"
                    :disabled="!valid" block class="mt-2">
                    <v-icon class="mr-2">mdi-send</v-icon>
                    Enviar mensaje
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Contact Info -->
          <v-col cols="12" md="5">
            <v-card class="mb-4" elevation="2" rounded="lg">
              <v-card-title class="pa-4 text-h6 font-weight-bold text-primary">
                Información de contacto
              </v-card-title>
              <v-list>
                <v-list-item v-for="contact in contactInfo" :key="contact.label" :prepend-icon="contact.icon"
                  :title="contact.label" :subtitle="contact.value" />
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Success Snackbar -->
    <v-snackbar v-model="snackbar" color="success" timeout="5000" location="top">
      <v-icon class="mr-2">mdi-check-circle</v-icon>
      ¡Mensaje enviado correctamente! Te responderemos en breve.
      <template #actions>
        <v-btn variant="text" @click="snackbar = false">Cerrar</v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const valid = ref(false)
const sending = ref(false)
const snackbar = ref(false)
const formRef = ref()

const form = reactive({
  name: '',
  surname: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  privacy: false,
})

const subjects = [
  'Información general',
  'Inscripción / Matrícula',
  'Horarios y tarifas',
  'Instalaciones',
  'Competiciones y eventos',
  'Colaboraciones',
  'Otro',
]

const rules = {
  required: (v: string) => !!v || 'Este campo es obligatorio',
  email: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Correo electrónico no válido',
  minLength: (v: string) => v.length >= 20 || 'El mensaje debe tener al menos 20 caracteres',
  requiredCheck: (v: boolean) => !!v || 'Debes aceptar la política de privacidad',
}

const contactInfo = [
  { icon: 'mdi-map-marker', label: 'Dirección', value: 'Centro comercial de Tafira' },
  { icon: 'mdi-phone', label: 'Teléfono', value: '+34 680 954 240' },
  { icon: 'mdi-email', label: 'Correo electrónico', value: 'adarugomakendoclub@gmail.com' },
]
async function submitForm() {
  const { valid: isValid } = await formRef.value?.validate()
  if (!isValid) return
  sending.value = true
  await new Promise((r) => setTimeout(r, 1200))
  sending.value = false
  snackbar.value = true
  formRef.value?.reset()
}
</script>
