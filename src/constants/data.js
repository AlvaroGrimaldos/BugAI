export const NAV_LINKS = [
  { labelKey: 'nav.services', href: '#services' },
  { labelKey: 'nav.process',  href: '#process'  },
  { labelKey: 'nav.kai',      href: '#kai'      },
  { labelKey: 'nav.contact',  href: '#contact'  },
]

export const STATS = [
  { value: '15–40h', labelKey: 'stats.weekly',  accent: '#06B6D4' },
  { value: '100%',   labelKey: 'stats.remote',   accent: '#7C3AED' },
  { value: '24h',    labelKey: 'stats.response', accent: '#06B6D4' },
  { value: '3',      labelKey: 'stats.markets',  accent: '#7C3AED' },
]

export const PLANS = [
  {
    name:     'Starter',
    price:    '149',
    deliveryKey: 'plans.starter.delivery',
    monthly:  false,
    popular:  false,
    accent:   '#7C3AED',
    descKey:  'plans.starter.desc',
    features: [
      'plans.starter.feat_1',
      'plans.starter.feat_2',
      'plans.starter.feat_3',
      'plans.starter.feat_4',
    ],
  },
  {
    name:     'Growth',
    price:    '549',
    deliveryKey: 'plans.growth.delivery',
    monthly:  false,
    popular:  true,
    accent:   '#06B6D4',
    descKey:  'plans.growth.desc',
    features: [
      'plans.growth.feat_1',
      'plans.growth.feat_2',
      'plans.growth.feat_3',
      'plans.growth.feat_4',
      'plans.growth.feat_5',
    ],
  },
  {
    name:     'Pro',
    price:    '1.499',
    deliveryKey: 'plans.pro.delivery',
    monthly:  false,
    popular:  false,
    accent:   '#7C3AED',
    descKey:  'plans.pro.desc',
    features: [
      'plans.pro.feat_1',
      'plans.pro.feat_2',
      'plans.pro.feat_3',
      'plans.pro.feat_4',
      'plans.pro.feat_5',
    ],
  },
  {
    name:     'Retainer',
    price:    '199',
    deliveryKey: 'plans.retainer.delivery',
    monthly:  true,
    popular:  false,
    accent:   '#06B6D4',
    descKey:  'plans.retainer.desc',
    features: [
      'plans.retainer.feat_1',
      'plans.retainer.feat_2',
      'plans.retainer.feat_3',
      'plans.retainer.feat_4',
    ],
  },
]

export const STEPS = [
  {
    num:     '01',
    titleKey: 'process.step_1_title',
    descKey:  'process.step_1_desc',
  },
  {
    num:     '02',
    titleKey: 'process.step_2_title',
    descKey:  'process.step_2_desc',
  },
  {
    num:     '03',
    titleKey: 'process.step_3_title',
    descKey:  'process.step_3_desc',
  },
]

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

export const CONTACT_INFO = [
  { label: 'EMAIL',      value: 'holabugai@gmail.com' },
  { label: 'WEB',        value: 'bugai.online' },
  { label: 'INSTAGRAM',  value: '@bugai.io' },
  { label: 'TIKTOK',     value: '@bugai.io' },
  { label: 'LINKEDIN',   value: 'BugAI' },
]

export const WHATSAPP_URL = 'https://wa.me/+573105708389'

export const TECH_STACK = ['n8n', 'OpenAI API', 'Claude API', 'Manychat', 'Airtable']

export const KAI_SYSTEM_PROMPT = `Eres KAI, asistente oficial de BugAI. Profesional, directo y competente. Sin bromas ni emojis excesivos.

BugAI diseña, desarrolla e implementa flujos de automatización con IA para negocios de retail y e-commerce. Los clientes recuperan entre 15 y 40 horas semanales.

PLANES:
- Starter: €149 — 1 automatización a medida, 3-5 días hábiles
- Growth: €549 — hasta 3 flujos conectados, 7-10 días hábiles
- Pro: €1.499 — hasta 10 flujos interconectados con IA personalizada, 2-4 semanas
- Retainer: €199/mes — monitoreo activo + 3 ajustes + soporte WhatsApp

Stack tecnológico: n8n, OpenAI API, Claude API, Manychat, Airtable.
Email: holabugai@gmail.com | Web: bugai.online | Instagram: @bugai.io | TikTok: @bugai.io | LinkedIn: BugAI

REGLAS:
1. Escribe siempre "BugAI" con B y AI mayúsculas
2. Precios siempre en EUR primero
3. Nunca inventes testimonios ni datos
4. Invita siempre al diagnóstico gratuito de 30 min como siguiente paso
5. BugAI atiende exclusivamente retail y e-commerce — redirige otros sectores
6. Los plazos siempre en días hábiles
7. No uses lenguaje de "lanzamiento" ni "precios especiales de lanzamiento"
8. No hagas chistes ni uses emojis excesivos`

export const FORMSPREE_URL = 'https://formspree.io/f/xnjwwjag'
