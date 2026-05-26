/**
 * src/App.jsx
 * ────────────
 * Componente raíz de la landing page de BugAI.
 * Ensambla todas las secciones en el orden correcto y las envuelve en el ThemeProvider.
 */

import { useEffect } from 'react'
import { ThemeProvider } from '../src/context/ThemeContext'

// Layout
import Navbar  from '../src/components/layout/Navbar'
import Footer  from '../src/components/layout/Footer'

// Secciones
import Hero        from '../src/components/sections/Hero'
import Stats       from '../src/components/sections/Stats'
import Services    from '../src/components/sections/Services'
import HowItWorks  from '../src/components/sections/HowItWorks'
import KaiChat     from '../src/components/sections/KaiChat'
import Reviews     from '../src/components/sections/Reviews'
import Contact     from '../src/components/sections/Contact'

const SECTION_META = [
  { id: 'hero',      title: 'BugAI — Automatización con IA para Retail y E-commerce', desc: 'Recupera entre 15 y 40 horas semanales con flujos de automatización inteligentes.' },
  { id: 'services',  title: 'Servicios y Precios — BugAI', desc: 'Planes desde €149. Automatización a medida para retail y e-commerce.' },
  { id: 'process',   title: 'Cómo Trabajamos — BugAI', desc: 'Diagnóstico gratuito, diseño y entrega en días hábiles.' },
  { id: 'kai',       title: 'KAI — Asistente IA de BugAI', desc: 'Habla con nuestro asistente inteligente sobre automatización.' },
  { id: 'reviews',   title: 'Nuestro Compromiso — BugAI', desc: 'Garantía de funcionamiento, respuesta en 24h y entrega en plazo.' },
  { id: 'contact',   title: 'Contacto — BugAI', desc: 'Solicita tu diagnóstico gratuito de 30 minutos.' },
]

function useDynamicMeta() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(e => e.isIntersecting && e.intersectionRatio >= 0.3)
        if (!visible) return
        const meta = SECTION_META.find(s => s.id === visible.target.id)
        if (meta) {
          document.title = meta.title
          document.querySelector('meta[name="description"]')?.setAttribute('content', meta.desc)
        }
      },
      { threshold: 0.3 }
    )

    SECTION_META.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useDynamicMeta()

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-violet-50 dark:bg-dark-bg text-zinc-950 dark:text-zinc-100 transition-colors duration-300">
        <Navbar />

        <main>
          <Hero />
          <Stats />
          <Services />
          <HowItWorks />
          <KaiChat />
          <Reviews />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}