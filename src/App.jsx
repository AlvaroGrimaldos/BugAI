import { useEffect, lazy, Suspense } from 'react'
import { ThemeProvider } from '../src/context/ThemeContext'
import { LanguageProvider, useLanguage } from '../src/context/LanguageContext'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

import Navbar from '../src/components/layout/Navbar'
import Footer from '../src/components/layout/Footer'
import Hero   from '../src/components/sections/Hero'
import Stats  from '../src/components/sections/Stats'

const Services   = lazy(() => import('../src/components/sections/Services'))
const HowItWorks = lazy(() => import('../src/components/sections/HowItWorks'))
const KaiChat    = lazy(() => import('../src/components/sections/KaiChat'))
const Reviews    = lazy(() => import('../src/components/sections/Reviews'))
const Contact    = lazy(() => import('../src/components/sections/Contact'))

const SECTION_META_KEYS = [
  { id: 'hero',     titleKey: 'meta.hero.title',     descKey: 'meta.hero.desc' },
  { id: 'services', titleKey: 'meta.services.title',  descKey: 'meta.services.desc' },
  { id: 'process',  titleKey: 'meta.process.title',   descKey: 'meta.process.desc' },
  { id: 'kai',      titleKey: 'meta.kai.title',       descKey: 'meta.kai.desc' },
  { id: 'reviews',  titleKey: 'meta.reviews.title',   descKey: 'meta.reviews.desc' },
  { id: 'contact',  titleKey: 'meta.contact.title',   descKey: 'meta.contact.desc' },
]

function useDynamicMeta() {
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(e => e.isIntersecting && e.intersectionRatio >= 0.3)
        if (!visible) return
        const meta = SECTION_META_KEYS.find(s => s.id === visible.target.id)
        if (meta) {
          document.title = t(meta.titleKey)
          document.querySelector('meta[name="description"]')?.setAttribute('content', t(meta.descKey))
        }
      },
      { threshold: 0.3 }
    )

    SECTION_META_KEYS.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [t])
}

function AppContent() {
  useDynamicMeta()

  return (
    <div className="min-h-screen bg-violet-50 dark:bg-dark-bg text-zinc-950 dark:text-zinc-100 transition-colors duration-300">
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Suspense fallback={null}>
          <Services />
          <HowItWorks />
          <KaiChat />
          <Reviews />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppContent />
        <Analytics />
        <SpeedInsights />
      </ThemeProvider>
    </LanguageProvider>
  )
}
