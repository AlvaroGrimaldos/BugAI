/**
 * src/components/layout/Footer.jsx
 * ───────────────────────────────────
 * Pie de página minimalista con logo, links de navegación y copyright.
 */

import LogoSVG from '../ui/LogoSVG'
import { useLanguage } from '../../context/LanguageContext'

const FOOTER_LINKS = [
  { labelKey: 'nav.services', href: '#services' },
  { labelKey: 'nav.process',  href: '#process'  },
  { labelKey: 'nav.contact',  href: '#contact'  },
];

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-black/5 dark:border-white/5 bg-white dark:bg-dark-card py-9 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">

        {/* Logo + wordmark */}
        <a href="#hero" className="flex items-center gap-2.5 no-underline" aria-label={t('nav.aria_logo')}>
          <LogoSVG size={26} />
          <span className="font-head font-bold text-lg text-zinc-950 dark:text-zinc-100">
            Bug<span className="text-brand-cyan"> AI</span>
          </span>
        </a>

        {/* Social links */}
        <div className="flex items-center gap-3">
          <a href="https://instagram.com/bugai.io" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-zinc-400 dark:text-zinc-500 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href="https://tiktok.com/@bugai.io" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.89 2.89 2.89 0 0 1 2.88-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.33 6.33 0 0 0 3.2 15.27a6.33 6.33 0 0 0 6.33 6.34 6.33 6.33 0 0 0 6.33-6.34V8.6a8.27 8.27 0 0 0 4.77 1.48v-3.4a4.83 4.83 0 0 1-1.04.01z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/company/bugai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-zinc-400 dark:text-zinc-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        {/* Links */}
        <nav aria-label={t('footer.links_aria')}>
          {FOOTER_LINKS.map(link => (
            <a
              key={link.labelKey}
              href={link.href}
              className="font-body text-sm ml-3 text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors no-underline"
            >
              {t(link.labelKey)}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
          {t('footer.copyright', { year })}
        </p>
      </div>
    </footer>
  )
}