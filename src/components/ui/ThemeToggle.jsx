/**
 * src/components/ui/ThemeToggle.jsx
 * ────────────────────────────────────
 * Botón circular que alterna entre tema claro y oscuro.
 * Usa el contexto ThemeContext para leer y cambiar el tema.
 * El ícono cambia con animación 'theme-pop' definida en Tailwind config.
 */

import { useTheme } from '../../context/ThemeContext'

// Ícono de Sol (modo oscuro activo → clic para ir a claro)
function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
      stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1"     x2="12" y2="3"     />
      <line x1="12" y1="21"    x2="12" y2="23"    />
      <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64"  />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1"  y1="12"    x2="3"  y2="12"    />
      <line x1="21" y1="12"    x2="23" y2="12"    />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  />
    </svg>
  )
}

// Ícono de Luna (modo claro activo → clic para ir a oscuro)
function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
      stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function ThemeToggle({ className = '' }) {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
      className={`
        w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0
        bg-violet-100 dark:bg-zinc-800
        border border-violet-200 dark:border-violet-600/25
        text-zinc-700 dark:text-zinc-300
        hover:rotate-[15deg] transition-all duration-200 cursor-pointer
        ${className}
      `}
    >
      {/* key en el span fuerza re-mount → dispara animación theme-pop */}
      <span key={theme} className="animate-theme-pop flex items-center justify-center">
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  )
}