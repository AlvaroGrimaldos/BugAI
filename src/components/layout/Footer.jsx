/**
 * src/components/layout/Footer.jsx
 * ───────────────────────────────────
 * Pie de página minimalista con logo, links de navegación y copyright.
 */

import LogoSVG from '../ui/LogoSVG'

const FOOTER_LINKS = [
  { label: 'Servicios', href: '#services' },
  { label: 'Proceso', href:'#process'},
  { label: 'Contacto', href: '#contact'},
];

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-black/5 dark:border-white/5 bg-white dark:bg-dark-card py-9 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">

        {/* Logo + wordmark */}
        <a href="#hero" className="flex items-center gap-2.5 no-underline" aria-label="BugAI - Ir al inicio">
          <LogoSVG size={26} />
          <span className="font-head font-bold text-lg text-zinc-950 dark:text-zinc-100">
            Bug<span className="text-brand-cyan"> AI</span>
          </span>
        </a>

        {/* Links */}
        <nav aria-label="Enlaces del pie">
          {FOOTER_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm ml-3 text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
          © {year} BugAI · España · LATAM · USA
        </p>
      </div>
    </footer>
  )
}