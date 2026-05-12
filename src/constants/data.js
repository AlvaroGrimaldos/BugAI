/**
 * src/constants/data.js
 * ──────────────────────
 * Datos estáticos de la landing page centralizados en un solo lugar.
 * Modifica aquí para actualizar contenido sin tocar los componentes.
 *
 * Fuente de verdad: OBSIDIAN/BugAI/ (bóveda) + CONTEXT/BugAI_Contexto_Maestro.md
 */

// ── Navegación ─────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Servicios', href: '#services' },
  { label: 'Proceso',   href: '#process'  },
  { label: 'KAI Chat',  href: '#kai'      },
  { label: 'Contacto',  href: '#contact'  },
]

// ── Estadísticas del Hero ──────────────────────────────────────────────────
// Verificadas contra la propuesta de valor oficial: "15 a 40 horas semanales"
export const STATS = [
  { value: '15–40h', label: 'semanales recuperadas',      accent: '#06B6D4' },
  { value: '100%',   label: 'operación remota',            accent: '#7C3AED' },
  { value: '24h',    label: 'tiempo de respuesta',         accent: '#06B6D4' },
  { value: '3',      label: 'mercados: ES · LATAM · USA',  accent: '#7C3AED' },
]

// ── Planes de precios ──────────────────────────────────────────────────────
// Precios OFICIALES según bóveda Obsidian (Servicios y Precios.md)
// NO son precios de descuento — son los precios reales.
export const PLANS = [
  {
    name:     'Starter',
    price:    '149',
    delivery: '3–5 días hábiles',
    monthly:  false,
    popular:  false,
    accent:   '#7C3AED',
    desc:     'Perfecto para dar el primer paso con la automatización.',
    features: [
      '1 automatización a medida',
      'Diagnóstico previo incluido',
      'Soporte por WhatsApp',
      'Garantía de funcionamiento',
    ],
  },
  {
    name:     'Growth',
    price:    '549',
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
    price:    '1.499',
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
    price:    '199',
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

// ── Qué hacemos / Qué NO hacemos ───────────────────────────────────────────
export const WE_DO = [
  'Flujos de automatización con o sin IA para retail y e-commerce',
  'Conexión entre herramientas: CRMs, tiendas online, APIs, mensajería, ERPs',
  'Gestión de pedidos automatizada, atención al cliente, recuperación de carritos, reportes, inventario',
]

export const WE_DONT = [
  'Apps móviles nativas',
  'Diseño web desde cero',
  'Hosting o infraestructura de servidores',
  'Consultoría empresarial general',
  'Automatizaciones para sectores fuera del retail y e-commerce',
]

// ── Datos de contacto ──────────────────────────────────────────────────────
// Según bóveda Obsidian: 00 - Dashboard/Home.md
export const CONTACT_INFO = [
  { label: 'EMAIL',      value: 'holabugai@gmail.com' },
  { label: 'WEB',        value: 'bug-ai-1-0-0.vercel.app' },
  { label: 'INSTAGRAM',  value: '@bugai.io' },
  { label: 'TIKTOK',     value: '@bugai.io' },
  { label: 'LINKEDIN',   value: 'BugAI' },
]

// ── WhatsApp (canal principal de ventas) ───────────────────────────────────
export const WHATSAPP_URL = 'https://wa.me/+573105708389'

// ── Stack tecnológico (Hero) ───────────────────────────────────────────────
// Según bóveda Obsidian: n8n es la plataforma principal
export const TECH_STACK = ['n8n', 'OpenAI API', 'Claude API', 'Manychat', 'Airtable']

// ── System prompt de KAI (chatbot) ────────────────────────────────────────
// Info corregida según bóveda Obsidian
export const KAI_SYSTEM_PROMPT = `Eres KAI, asistente oficial de BugAI. Profesional, directo y competente. Sin bromas ni emojis excesivos.

BugAI diseña, desarrolla e implementa flujos de automatización con IA para negocios de retail y e-commerce. Los clientes recuperan entre 15 y 40 horas semanales.

PLANES:
- Starter: €149 — 1 automatización a medida, 3-5 días hábiles
- Growth: €549 — hasta 3 flujos conectados, 7-10 días hábiles
- Pro: €1.499 — hasta 10 flujos interconectados con IA personalizada, 2-4 semanas
- Retainer: €199/mes — monitoreo activo + 3 ajustes + soporte WhatsApp

Stack tecnológico: n8n, OpenAI API, Claude API, Manychat, Airtable.
Email: holabugai@gmail.com | Web: bug-ai-1-0-0.vercel.app | Instagram: @bugai.io | TikTok: @bugai.io | LinkedIn: BugAI

REGLAS:
1. Escribe siempre "BugAI" con B y AI mayúsculas
2. Precios siempre en EUR primero
3. Nunca inventes testimonios ni datos
4. Invita siempre al diagnóstico gratuito de 30 min como siguiente paso
5. BugAI atiende exclusivamente retail y e-commerce — redirige otros sectores
6. Los plazos siempre en días hábiles
7. No uses lenguaje de "lanzamiento" ni "precios especiales de lanzamiento"
8. No hagas chistes ni uses emojis excesivos`

// ── Formspree endpoint ────────────────────────────────────────────────────
// ⚙️ Reemplaza con tu ID real: https://formspree.io
export const FORMSPREE_URL = 'https://formspree.io/f/xnjwwjag'
