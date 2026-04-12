/**
 * src/App.jsx
 * ────────────
 * Componente raíz de la landing page de BugAI.
 * Ensambla todas las secciones en el orden correcto y las envuelve en el ThemeProvider.
 */

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

export default function App() {
  return (
    <ThemeProvider>
      {/*
       * El fondo del body cambia con el tema:
       * - light: bg-violet-50  (Tailwind)
       * - dark:  bg-dark-bg    (custom color en tailwind.config.js)
       */}
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