/**
 * src/components/sections/HowItWorks.jsx
 * ─────────────────────────────────────────
 * Sección "Cómo trabajamos": 3 pasos numerados.
 *
 * Banner de imagen (IMG_03) — reemplaza 'YOUR_PROCESS_IMG_URL'
 */

import { STEPS } from '../../constants/data'
import { useLanguage } from '../../context/LanguageContext'

export default function HowItWorks() {
  const { t } = useLanguage()
  return (
    <section
      id="process"
      aria-label={t('process.aria')}
      className="scroll-mt-16 py-24 px-6 bg-white dark:bg-dark-card border-t border-black/5 dark:border-white/5"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <span className="font-mono text-[11px] text-brand-violet-light tracking-[2px] uppercase">
            {t('process.badge')}
          </span>
          <h2 className="font-head font-extrabold text-[clamp(26px,4vw,46px)] text-zinc-950 dark:text-zinc-100 mt-3 tracking-tight">
            {t('process.title')}
          </h2>
          <p className="font-body text-[15px] text-zinc-500 dark:text-zinc-400 mt-3 max-w-md mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="
                relative group
                bg-gradient-to-b from-violet-50 to-white dark:from-dark-elevated dark:to-dark-card
                border border-black/5 dark:border-white/5
                rounded-2xl p-7
                hover:border-brand-violet/30 dark:hover:border-brand-violet/30
                hover:shadow-xl dark:hover:shadow-[0_20px_50px_rgba(91,33,182,0.12)]
                transition-all duration-300
              "
            >
              {i < STEPS.length - 1 && (
                <div className="hidden md:flex absolute top-12 -right-6 w-8 h-6 items-center justify-center text-brand-violet/40 dark:text-zinc-500" aria-hidden="true">
                  <svg viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full">
                    <line x1="0" y1="6" x2="18" y2="6" />
                    <polyline points="14,1 19,6 14,11" />
                  </svg>
                </div>
              )}

              <div className="flex items-center gap-3 mb-5">
                <span className="text-gradient-num font-mono font-bold text-[32px] leading-none">
                  {step.num}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-brand-violet/20 to-transparent dark:from-white/5" />
              </div>

              <h3 className="font-head font-bold text-[19px] text-zinc-950 dark:text-zinc-100 mb-3">
                {t(step.titleKey)}
              </h3>

              <p className="font-body text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {t(step.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}