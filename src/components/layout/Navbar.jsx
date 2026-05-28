/**
 * src/components/layout/Navbar.jsx
 * ──────────────────────────────────
 * Barra de navegación fija. Comportamiento:
 * - Transparente al tope de la página.
 * - Glassmorphism adaptativo (claro/oscuro) al hacer scroll.
 * - Menú hamburguesa en mobile (< 768px).
 * - Toggle de tema integrado.
 */

import { useState, useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import LogoSVG      from '../ui/LogoSVG'
import ThemeToggle  from '../ui/ThemeToggle'
import LangToggle   from '../ui/LangToggle'
import { NAV_LINKS } from '../../constants/data'

// Ícono hamburguesa
const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6"  x2="21" y2="6"  />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

// Ícono cerrar
const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

export default function Navbar() {
  const { theme }          = useTheme()
  const { t }              = useLanguage()
  const [open,    setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Clases del fondo de la barra según scroll y tema
  const navBg = scrolled
    ? theme === 'dark'
      ? 'glass-dark border-b border-white/5'
      : 'glass-light border-b border-violet-100'
    : 'bg-transparent'

  return (
    <>
      <nav aria-label={t('nav.aria_main')} className={`fixed top-0 left-0 right-0 z-50 h-16 px-6 flex items-center justify-between transition-all duration-300 ${navBg}`}>

        {/* Logo + wordmark */}
        <a href="#hero" className="flex items-center gap-2.5 gap-r-0 no-underline" aria-label={t('nav.aria_logo')}>
          <LogoSVG size={40} />
          <span className="font-head font-bold text-xl text-zinc-950 dark:text-zinc-100">
            Bug<span className="text-brand-cyan"> AI</span>
          </span>
        </a>

        {/* ── Links desktop ── */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(link => (
            <a
              key={link.labelKey}
              href={link.href}
              className="font-body text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors duration-200 no-underline"
            >
              {t(link.labelKey)}
            </a>
          ))}

          <LangToggle />
          <ThemeToggle />

          <a
            href="#contact"
            className="
              bg-gradient-to-r from-brand-violet to-brand-cyan-dark
              text-white font-body font-semibold text-sm px-4 py-2 rounded-lg
              transition-all duration-200 no-underline
              hover:shadow-lg hover:shadow-brand-violet/25
            "
          >
            {t('nav.free_diagnosis')}
          </a>
        </div>

        {/* ── Botón hamburguesa mobile ── */}
        <div className="flex md:hidden items-center gap-3">
          <LangToggle />
          <ThemeToggle />
          <button
            onClick={() => setOpen(o => !o)}
            aria-label={t('nav.aria_open_menu')}
            className="text-zinc-700 dark:text-zinc-300 cursor-pointer bg-transparent border-0 p-1"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

      </nav>

      {/* ── Menú mobile overlay (fuera del nav para evitar conflictos de z-index) ── */}
      <div
        className={`
          fixed inset-0 z-40 flex flex-col items-center justify-center gap-10
          transition-all duration-300
          ${open ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'}
          bg-white/25 dark:bg-zinc-900/25
          backdrop-blur-2xl
        `}
        onClick={() => setOpen(false)}
      >
        <div className="flex flex-col items-center gap-9" onClick={e => e.stopPropagation()}>
          {NAV_LINKS.map(link => (
            <a
              key={link.labelKey}
              href={link.href}
              onClick={() => setOpen(false)}
              className="
                font-head font-bold text-3xl no-underline transition-all duration-200
                text-zinc-950 dark:text-zinc-100
                hover:text-brand-violet-mid dark:hover:text-brand-violet-light
              "
            >
              {t(link.labelKey)}
            </a>
          ))}

          <div className="flex items-center gap-4 mt-2">
            <LangToggle />
            <ThemeToggle />
          </div>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-gradient-to-r from-brand-violet to-brand-cyan-dark text-white font-body font-semibold text-lg px-10 py-3.5 rounded-xl no-underline mt-2 shadow-lg shadow-brand-violet/30 hover:shadow-xl hover:shadow-brand-violet/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            {t('nav.free_diagnosis')}
          </a>
        </div>
      </div>
    </>
  )
}