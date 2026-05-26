# BugAI Landing Page v2.0

Landing page modular de **BugAI** construida con **React 18 + Vite + Tailwind CSS v3**.

---

## Estructura del proyecto

```
bugai-landing/
│
├── index.html                          # HTML base (punto de entrada Vite)
├── package.json                        # Dependencias y scripts
├── vite.config.js                      # Configuración de Vite + alias @
├── tailwind.config.js                  # Colores, fuentes y animaciones de marca
├── postcss.config.js                   # Requerido por Tailwind
├── .gitignore
│
└── src/
    ├── main.jsx                        # Monta React en #root
    ├── App.jsx                         # Raíz: ensambla todas las secciones
    ├── index.css                       # Tailwind base + utilidades custom
    │
    ├── context/
    │   └── ThemeContext.jsx            # Estado global del tema claro/oscuro
    │
    ├── constants/
    │   └── data.js                     # Todos los datos estáticos (planes, reseñas, etc.)
    │
    ├── hooks/
    │   └── useChat.js                  # Lógica del chat con la API de Claude
    │
    └── components/
        │
        ├── ui/                         # Componentes de interfaz reutilizables
        │   ├── LogoSVG.jsx             # Logo hexagonal con red neuronal
        │   ├── KaiSVG.jsx              # Mascota KAI animada (SVG)
        │   ├── Avatar.jsx              # Foto de perfil con fallback a iniciales
        │   └── ThemeToggle.jsx         # Botón sol/luna para cambiar tema
        │
        ├── layout/                     # Estructura de página
        │   ├── Navbar.jsx              # Barra de navegación fija con glassmorphism
        │   └── Footer.jsx              # Pie de página minimalista
        │
        └── sections/                   # Secciones de la landing (orden en App.jsx)
            ├── Hero.jsx                # Hero con imagen de fondo y CTAs
            ├── Stats.jsx               # 4 métricas de impacto
            ├── Services.jsx            # 4 planes de precio de lanzamiento
            ├── HowItWorks.jsx          # Proceso en 3 pasos + banner de imagen
            ├── KaiChat.jsx             # Mascota KAI + chatbot con Claude API
            ├── Reviews.jsx             # Testimonios con selector y rating global
            └── Contact.jsx             # Formulario Formspree + info de contacto
```

---

## Instalación y uso

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo (abre en http://localhost:3000)
npm run dev

# 3. Build de producción
npm run build

# 4. Vista previa del build
npm run preview
```

---

## Personalización rápida

### Textos y datos
Todo el contenido estático está centralizado en **`src/constants/data.js`**.  
Edita planes, testimonios, pasos del proceso, links de contacto y el system prompt de KAI desde un solo archivo.

### Tema e identidad visual
Los colores de marca, tipografías y animaciones personalizadas se definen en **`tailwind.config.js`**.

```js
// Colores de marca (tailwind.config.js → theme.extend.colors.brand)
violet:         '#5B21B6'
'violet-mid':   '#7C3AED'
'violet-light': '#A78BFA'
cyan:           '#06B6D4'
'cyan-dark':    '#0891B2'
```

### Modo claro / oscuro
El toggle está en la Navbar. El tema se persiste en `localStorage`.  
Las variantes de Tailwind `dark:` se activan mediante la clase `dark` en `<html>`.

---

## Imágenes — Guía de integración

Reemplaza los placeholders en los archivos indicados con las rutas de tus imágenes.

| ID     | Archivo                              | Dónde reemplazar         | Tamaño      |
|--------|--------------------------------------|--------------------------|-------------|
| IMG_01 | `src/components/sections/Hero.jsx`   | `YOUR_HERO_BG_URL`       | 1920×900px  |
| IMG_03 | `src/components/sections/HowItWorks.jsx` | `YOUR_PROCESS_IMG_URL` | 1100×260px |
| IMG_04 | `src/constants/data.js`              | `YOUR_AVATAR_1_URL`      | 200×200px   |
| IMG_05 | `src/constants/data.js`              | `YOUR_AVATAR_2_URL`      | 200×200px   |
| IMG_06 | `src/constants/data.js`              | `YOUR_AVATAR_3_URL`      | 200×200px   |
| IMG_07 | `src/components/sections/Contact.jsx`| `YOUR_CONTACT_IMG_URL`   | 600×200px   |

### Prompts Gemini para generar las imágenes con IA

**IMG_01 — Hero Background**  
> "Cinematic wide shot of a futuristic digital workspace, deep space background with flowing violet #5B21B6 and cyan #06B6D4 glowing circuit-board patterns and neural network connections, abstract data streams, no people, ultra detailed, 8K render, dark atmosphere, horizontal 16:9"

**IMG_03 — Proceso / Consulta remota**  
> "Two professionals in a modern minimal home office on a video call, one person at a desk with dual monitors showing automation dashboards, warm ambient light, remote work atmosphere, cinematic shallow depth of field, horizontal 16:9"

**IMG_04 — Avatar María G.**  
> "Professional corporate headshot of a Spanish woman in her early 30s, warm smile, business casual navy blouse, neutral light gray background, natural studio lighting, photorealistic"

**IMG_05 — Avatar Carlos R.**  
> "Professional corporate headshot of a Colombian man in his late 30s, confident expression, dark blazer, clean white background, corporate portrait lighting, photorealistic"

**IMG_06 — Avatar Ana V.**  
> "Professional corporate headshot of a Mexican woman in her 40s, warm professional smile, business attire in deep violet, soft neutral background, high-end corporate photography"

**IMG_07 — Foto decorativa contacto**  
> "Modern minimal home office desk setup, top-down angle, laptop open with code dashboard, small succulent plant, a notebook, soft violet ambient backlighting, dark moody atmosphere, no people, vertical 4:5 format, cinematic"

---

## Formspree (formulario de contacto)

1. Ve a [formspree.io](https://formspree.io) y crea un formulario apuntando a `hola@bugai.io`.
2. Copia el ID del formulario (ej: `xdkoeabz`).
3. En `src/constants/data.js` reemplaza:

```js
export const FORMSPREE_URL = 'https://formspree.io/f/TU_FORM_ID_AQUI'
```

---

## Despliegue en Vercel

```bash
# Instala Vercel CLI (si no lo tienes)
npm i -g vercel

# Despliega desde la raíz del proyecto
vercel

# O conecta tu repositorio GitHub en vercel.com y el deploy es automático.
```

El proyecto está optimizado para Vercel. No requiere configuración adicional.

---

## Stack tecnológico

| Herramienta        | Versión  | Rol                                  |
|--------------------|----------|--------------------------------------|
| React              | 18.3     | UI framework                         |
| Vite               | 5.4      | Bundler y servidor de desarrollo     |
| Tailwind CSS       | 3.4      | Estilos utilitarios                  |
| PostCSS            | 8.4      | Procesador de CSS (requerido por TW) |
| Claude API         | Sonnet   | Chatbot de KAI                       |
| Formspree          | —        | Backend del formulario de contacto   |

---

*BugAI · España · LATAM · USA · holabugai@gmail.com*