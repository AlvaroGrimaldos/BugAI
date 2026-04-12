/**
 * src/constants/data.js
 * ──────────────────────
 * Datos estáticos de la landing page centralizados en un solo lugar.
 * Modifica aquí para actualizar contenido sin tocar los componentes.
 */

// ── Navegación ─────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Servicios', href: '#services' },
  { label: 'Proceso',   href: '#process'  },
  { label: 'KAI Chat',  href: '#kai'      },
  { label: 'Opiniones', href: '#reviews'  },
  { label: 'Contacto',  href: '#contact'  },
]

// ── Estadísticas del Hero ──────────────────────────────────────────────────
export const STATS = [
  { value: '40h',  label: 'semanales recuperadas',     accent: '#06B6D4' },
  { value: '3×',   label: 'más rápido que manual',     accent: '#7C3AED' },
  { value: '0',    label: 'empleados extra necesarios', accent: '#06B6D4' },
  { value: '100%', label: 'operación remota',           accent: '#7C3AED' },
]

// ── Planes de precios ──────────────────────────────────────────────────────
export const PLANS = [
  {
    name:     'Starter',
    price:    '79',
    normal:   '149',
    delivery: '3–5 días hábiles',
    monthly:  false,
    popular:  false,
    accent:   '#7C3AED',
    desc:     'Perfecta para dar el primer paso con la automatización.',
    features: [
      '1 automatización a medida',
      'Diagnóstico previo incluido',
      'Soporte por WhatsApp',
      'Garantía de funcionamiento',
    ],
  },
  {
    name:     'Growth',
    price:    '249',
    normal:   '549',
    delivery: '7–10 días hábiles',
    monthly:  false,
    popular:  true,
    accent:   '#06B6D4',
    desc:     'Para negocios que quieren automatizar procesos clave.',
    features: [
      'Hasta 3 flujos conectados',
      'Integración multi-plataforma',
      'Soporte prioritario 48h',
      '1 revisión incluida',
      'Documentación del proceso',
    ],
  },
  {
    name:     'Pro',
    price:    '699',
    normal:   '1499',
    delivery: '2–4 semanas',
    monthly:  false,
    popular:  false,
    accent:   '#7C3AED',
    desc:     'Sistema completo de automatización empresarial.',
    features: [
      'Hasta 10 flujos interconectados',
      'IA personalizada',
      'Panel de monitoreo',
      '2 revisiones incluidas',
      'Capacitación al equipo',
    ],
  },
  {
    name:     'Retainer',
    price:    '89',
    normal:   '199',
    delivery: 'Mensual',
    monthly:  true,
    popular:  false,
    accent:   '#06B6D4',
    desc:     'Mantenimiento continuo para tus automatizaciones.',
    features: [
      'Monitoreo activo 24/7',
      '3 ajustes al mes',
      'Soporte WhatsApp dedicado',
      'Reporte mensual de métricas',
    ],
  },
]

// ── Pasos del proceso ──────────────────────────────────────────────────────
export const STEPS = [
  {
    num:   '01',
    title: 'Diagnóstico gratuito',
    desc:  '30 minutos por WhatsApp o videollamada. Identificamos qué procesos te quitan más tiempo y cuáles se pueden automatizar de inmediato.',
  },
  {
    num:   '02',
    title: 'Diseño y desarrollo',
    desc:  'Construimos los flujos de automatización con las herramientas más adecuadas para tu negocio. Tú ves el avance en tiempo real.',
  },
  {
    num:   '03',
    title: 'Entrega y soporte',
    desc:  'Implementamos, probamos y entregamos todo funcionando. Soporte garantizado incluido según tu plan.',
  },
]

// ── Reseñas / Testimonios ──────────────────────────────────────────────────
// ⚠️ Reemplaza con testimonios reales de los primeros 10 clientes (cláusula contractual).
// 📸 avatarUrl: ruta a la foto de 200×200px (ver prompts Gemini en LandingPage_v2.jsx)
export const REVIEWS = [
  {
    name:      'María G.',
    business:  'E-commerce · España',
    initials:  'MG',
    rating:    5,
    avatarUrl: 'YOUR_AVATAR_1_URL', // 📸 IMG_04
    text:      'Recuperamos más de 20 horas semanales en gestión de pedidos. El proceso fue rápido y el soporte excelente. Completamente recomendado para cualquier negocio online.',
  },
  {
    name:      'Carlos R.',
    business:  'Agencia de marketing · Colombia',
    initials:  'CR',
    rating:    5,
    avatarUrl: 'YOUR_AVATAR_2_URL', // 📸 IMG_05
    text:      'Automatizamos los reportes de clientes y la generación de contenido. Ahora atendemos el doble de cuentas sin contratar más personal. BugAI cumple lo que promete.',
  },
  {
    name:      'Ana V.',
    business:  'Consultoría · México',
    initials:  'AV',
    rating:    5,
    avatarUrl: 'YOUR_AVATAR_3_URL', // 📸 IMG_06
    text:      'El diagnóstico gratuito fue revelador. En 30 minutos identificaron 3 procesos que me costaban horas al día. El retorno de inversión fue inmediato.',
  },
]

// ── Datos de contacto ──────────────────────────────────────────────────────
export const CONTACT_INFO = [
  { label: 'EMAIL',     value: 'hola@bugai.io'  },
  { label: 'WEB',       value: 'www.bugai.io'   },
  { label: 'INSTAGRAM', value: '@bugai.io'       },
  { label: 'TIKTOK',    value: '@bugai.auto'     },
]

// ── Stack tecnológico (Hero) ───────────────────────────────────────────────
export const TECH_STACK = ['Make.com', 'OpenAI', 'Claude API', 'n8n', 'Airtable']

// ── System prompt de KAI (chatbot) ────────────────────────────────────────
export const KAI_SYSTEM_PROMPT = `Eres KAI, asistente oficial de BugAI. Profesional, directo y competente. Sin bromas ni emojis excesivos.

BugAI diseña e implementa flujos de automatización con IA. Los clientes recuperan entre 15 y 40 horas semanales.

PLANES DE LANZAMIENTO (primeros 10 clientes):
- Starter: €79 (normal €149) — 1 automatización, 3-5 días hábiles
- Growth: €249 (normal €549) — hasta 3 flujos, 7-10 días hábiles
- Pro: €699 (normal €1.499) — hasta 10 flujos, 2-4 semanas
- Retainer: €89/mes (normal €199/mes) — monitoreo + 3 ajustes + soporte WhatsApp

Stack tecnológico: Make.com, n8n, OpenAI API, Claude API, Manychat, Airtable.
Email: hola@bugai.io | Web: www.bugai.io | Instagram: @bugai.io | TikTok: @bugai.auto

REGLAS:
1. Escribe siempre "BugAI" con B y AI mayúsculas
2. Precios siempre en EUR primero
3. Nunca inventes testimonios ni datos
4. Invita siempre al diagnóstico gratuito de 30 min como siguiente paso`

// ── Formspree endpoint ────────────────────────────────────────────────────
// ⚙️ Reemplaza con tu ID real: https://formspree.io
export const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'