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
import LogoSVG      from '../ui/LogoSVG'
import ThemeToggle  from '../ui/ThemeToggle'
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
  const [open,    setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Clases del fondo de la barra según scroll y tema
  const navBg = scrolled
    ? theme === 'dark'
      ? 'glass-dark border-b border-white/5'
      : 'glass-light border-b border-violet-100'
    : 'bg-transparent'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-16 px-6 flex items-center justify-between transition-all duration-300 ${navBg}`}>

      {/* Logo + wordmark */}
      <a href="#hero" className="flex items-center gap-2.5 no-underline">
        <LogoSVG size={30} />
        <span className="font-head font-bold text-xl text-zinc-950 dark:text-zinc-100">
          Bug<span className="text-brand-cyan">AI</span>
        </span>
      </a>

      {/* ── Links desktop ── */}
      <div className="hidden md:flex items-center gap-7">
        {NAV_LINKS.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="font-body text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors duration-200 no-underline"
          >
            {link.label}
          </a>
        ))}

        <ThemeToggle />

        <a
          href="#contact"
          className="bg-brand-violet hover:bg-brand-violet-mid text-white font-body font-semibold text-sm px-4 py-2 rounded-lg transition-colors duration-200 no-underline"
        >
          Diagnóstico gratis
        </a>
      </div>

      {/* ── Botón hamburguesa mobile ── */}
      <div className="flex md:hidden items-center gap-3">
        <ThemeToggle />
        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Abrir menú"
          className="text-zinc-700 dark:text-zinc-300 cursor-pointer bg-transparent border-0 p-1"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* ── Menú mobile (pantalla completa) ── */}
      {open && (
        <div
          className={`
            fixed inset-0 top-16 z-40 flex flex-col items-center justify-center gap-9
            ${theme === 'dark' ? 'glass-dark' : 'glass-light'}
          `}
        >
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-head font-bold text-3xl text-zinc-950 dark:text-zinc-100 no-underline"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-brand-violet text-white font-body font-semibold text-lg px-8 py-3 rounded-xl no-underline mt-4"
          >
            Diagnóstico gratis
          </a>
        </div>
      )}
    </nav>
  )
}