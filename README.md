# Adarugoma – Club de Kendo

Aplicación web del Club de Kendo **Adarugoma**, construida con [Vue 3](https://vuejs.org/), [Vue Router](https://router.vuejs.org/) y [Vuetify 3](https://vuetifyjs.com/). Diseño responsive, contenido en español.

---

## 📄 Páginas / Rutas

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | `Inicio.vue` | Página de bienvenida y secciones de presentación |
| `/que-es-el-kendo` | `QueEsElKendo.vue` | Información sobre el Kendo |
| `/sobre-nosotros` | `SobreNosotros.vue` | Historia e información del club |
| `/entrenamientos` | `Entrenamientos.vue` | Horarios y clases |
| `/instructores` | `Instructores.vue` | Perfiles de instructores |
| `/galeria` | `Galeria.vue` | Galería fotográfica y multimedia |
| `/noticias` | `Noticias.vue` | Noticias y eventos |
| `/contacto` | `Contacto.vue` | Formulario de contacto |

---

## 🛠️ Tecnologías

- **Vue 3** (Composition API + `<script setup>`)
- **Vue Router 4** (HTML5 history mode)
- **Vuetify 3** (Material Design UI)
- **Vite 5** (bundler)
- **TypeScript**

---

## 🚀 Desarrollo local

### Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- npm v9 o superior

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/epictuno/adarugoma.git
cd adarugoma

# Instalar dependencias
npm install
```

### Comandos disponibles

```bash
# Iniciar servidor de desarrollo (http://localhost:5173)
npm run dev

# Compilar para producción (genera /dist)
npm run build

# Vista previa de la build de producción
npm run preview

# Linting
npm run lint

# Formateo de código
npm run format
```

---

## ☁️ Publicar en Vercel

### Método 1 – Importar desde GitHub (recomendado)

1. Crea una cuenta en [vercel.com](https://vercel.com) (puedes iniciar sesión con GitHub).
2. En el **Dashboard** de Vercel haz clic en **"Add New… → Project"**.
3. Selecciona el repositorio `epictuno/adarugoma` de tu cuenta de GitHub y haz clic en **Import**.
4. Vercel detectará automáticamente que es un proyecto Vite. Configura:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Haz clic en **Deploy**. En pocos minutos el sitio estará en línea con una URL del tipo `adarugoma.vercel.app`.

> A partir de este momento, cada `git push` a la rama `main` desplegará automáticamente una nueva versión.

### Método 2 – Despliegue manual con Vercel CLI

```bash
# Instalar la CLI de Vercel globalmente
npm install -g vercel

# Autenticarse (abrirá el navegador)
vercel login

# Dentro del directorio del proyecto, ejecutar:
vercel

# Seguir los pasos del asistente:
#  - Set up and deploy? → Y
#  - Which scope? → <tu cuenta>
#  - Link to existing project? → N
#  - Project name? → adarugoma
#  - Directory? → ./
#  - Override settings? → N

# Para desplegar en producción:
vercel --prod
```

### Configuración de redirecciones para Vue Router

Como la aplicación usa `createWebHistory` (HTML5 History API), Vercel necesita redirigir todas las rutas al `index.html`. Crea el archivo `vercel.json` en la raíz del proyecto:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

> ⚠️ Sin este archivo, al acceder directamente a una ruta como `/contacto` obtendrás un error 404.

### Variables de entorno (opcional)

Si en el futuro necesitas variables de entorno (p. ej. una API key):

1. En el **Dashboard** de Vercel → proyecto → **Settings → Environment Variables**.
2. Añade las variables con el prefijo `VITE_` (p. ej. `VITE_API_URL`).
3. En el código accede con `import.meta.env.VITE_API_URL`.

---

## 📁 Estructura del proyecto

```
adarugoma/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── vercel.json            ← Configuración de redirecciones (crear manualmente)
└── src/
    ├── main.ts            ← Punto de entrada, configuración de Vuetify
    ├── App.vue            ← Layout base (AppHeader + router-view + AppFooter)
    ├── assets/            ← Imágenes y recursos estáticos
    ├── components/
    │   ├── AppHeader.vue  ← Barra de navegación (desktop + móvil)
    │   └── AppFooter.vue  ← Pie de página
    ├── router/
    │   └── index.ts       ← Definición de rutas
    └── views/
        ├── Inicio.vue
        ├── QueEsElKendo.vue
        ├── SobreNosotros.vue
        ├── Entrenamientos.vue
        ├── Instructores.vue
        ├── Galeria.vue
        ├── Noticias.vue
        └── Contacto.vue
```

---

## 📝 Licencia

Distribuido bajo la licencia incluida en el repositorio. © Adarugoma – Club de Kendo.