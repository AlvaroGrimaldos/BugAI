# BugAI Landing Page v3.0

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
    ├── assets/
    │   ├── KAI_chat.png                # Mascota KAI (ojos abiertos)
    │   ├── KAI_chat_ojos_cerrados.png  # Mascota KAI (ojos cerrados, parpadeo)
    │   ├── hero.png                    # Imagen de fondo del Hero
    │   ├── icon-png.png                # Icono BugAI
    │   └── icon-png-zoom.png           # Logo BugAI
    │
    ├── context/
    │   ├── ThemeContext.jsx            # Estado global del tema claro/oscuro
    │   └── LanguageContext.jsx         # Estado global del idioma (ES/EN)
    │
    ├── constants/
    │   ├── data.js                     # Todos los datos estáticos (planes, reseñas, etc.)
    │   └── translations.js             # Diccionario de traducciones ES/EN
    │
    └── components/
        │
        ├── ui/                         # Componentes de interfaz reutilizables
        │   ├── LogoSVG.jsx             # Logo oficial BugAI
        │   ├── Avatar.jsx              # Foto de perfil con fallback a iniciales
        │   ├── ThemeToggle.jsx         # Botón sol/luna para cambiar tema
        │   └── LangToggle.jsx          # Botón ES/EN para cambiar idioma
        │
        ├── layout/                     # Estructura de página
        │   ├── Navbar.jsx              # Barra de navegación fija con glassmorphism
        │   └── Footer.jsx              # Pie de página minimalista con redes sociales
        │
        └── sections/                   # Secciones de la landing (orden en App.jsx)
            ├── Hero.jsx                # Hero con imagen de fondo y CTAs
            ├── Stats.jsx               # 4 métricas de impacto
            ├── Services.jsx            # 4 planes de precio
            ├── HowItWorks.jsx          # Proceso en 3 pasos
            ├── KaiChat.jsx             # Mascota KAI con parpadeo + chatbot
            ├── Reviews.jsx             # Compromisos de garantía
            └── Contact.jsx             # Formulario Formspree + info de contacto
```

---

## Instalación y uso

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo (abre en http://localhost:5173)
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
Edita planes, pasos del proceso, links de contacto y el system prompt de KAI desde un solo archivo.

### Traducciones
Los textos visibles se traducen mediante **`src/constants/translations.js`**.  
El idioma se controla desde el botón ES/EN en la Navbar y se persiste en `localStorage` bajo la clave `bugai-lang`. El valor por defecto es español (`es`).

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
El toggle está en la Navbar. El tema se persiste en `localStorage` bajo la clave `bugai-theme`.  
Las variantes de Tailwind `dark:` se activan mediante la clase `dark` en `<html>`.  
El valor por defecto es tema claro (`light`).

---

## Imágenes — Assets del proyecto

| Archivo                        | Ubicación             | Descripción                  |
|--------------------------------|------------------------|------------------------------|
| `KAI_chat.png`                 | `src/assets/`          | Mascota KAI (ojos abiertos)  |
| `KAI_chat_ojos_cerrados.png`   | `src/assets/`          | Mascota KAI (ojos cerrados)  |
| `hero.png`                     | `src/assets/`          | Fondo del Hero               |
| `icon-png.png`                 | `src/assets/`          | Icono BugAI                  |
| `icon-png-zoom.png`            | `src/assets/`          | Logo BugAI (Navbar/Footer)   |

### KAI animado (parpadeo)

KAI parpadea automáticamente cada ~4 segundos. Las dos imágenes (`KAI_chat.png` y `KAI_chat_ojos_cerrados.png`) están superpuestas y se alternan por opacidad, de modo que solo los ojos cambian sin ningún desplazamiento.

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
| Vite               | 8.0      | Bundler y servidor de desarrollo     |
| Tailwind CSS       | 3.4      | Estilos utilitarios                  |
| PostCSS            | 8.4      | Procesador de CSS (requerido por TW) |
| Claude API         | Sonnet   | Chatbot de KAI                       |
| Formspree          | —        | Backend del formulario de contacto   |
| n8n                | —        | Plataforma principal de automatización |

---

*BugAI · España · LATAM · USA · holabugai@gmail.com*