/**
 * src/components/sections/Reviews.jsx
 * ──────────────────────────────────────
 * Sección de prueba social — actualmente placeholder.
 *
 * ⚠️ BUGAI TIENE 0 CLIENTES ACTIVOS.
 * No se deben inventar testimonios (Regla #4 de la bóveda).
 * Esta sección se activará cuando haya testimonios reales documentados.
 *
 * Por ahora muestra un mensaje de compromiso de calidad.
 */

import { useLanguage } from '../../context/LanguageContext'

const GUARANTEE_KEYS = [
  { titleKey: 'reviews.card_1_title', descKey: 'reviews.card_1_desc',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
  { titleKey: 'reviews.card_2_title', descKey: 'reviews.card_2_desc',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> },
  { titleKey: 'reviews.card_3_title', descKey: 'reviews.card_3_desc',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> },
]

export default function Reviews() {
  const { t } = useLanguage()
  return (
    <section
      id="reviews"
      aria-label={t('reviews.aria')}
      className="py-24 px-6 bg-white dark:bg-dark-card border-t border-black/5 dark:border-white/5"
    >
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-12">
          <span className="font-mono text-[11px] text-brand-violet-light tracking-[2px] uppercase">
            {t('reviews.badge')}
          </span>
          <h2 className="font-head font-extrabold text-[clamp(26px,4vw,46px)] text-zinc-950 dark:text-zinc-100 mt-3 tracking-tight">
            {t('reviews.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GUARANTEE_KEYS.map((item, i) => (
            <div
              key={i}
              className="
                bg-violet-50 dark:bg-dark-elevated
                border border-black/5 dark:border-white/5
                rounded-2xl p-7 text-center
                hover:border-brand-violet/30 transition-colors duration-200
              "
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="font-head font-bold text-lg text-zinc-950 dark:text-zinc-100 mb-3">
                {t(item.titleKey)}
              </h3>
              <p className="font-body text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {t(item.descKey)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-mono text-[10px] text-zinc-400 tracking-widest">
            {t('reviews.placeholder')}
          </p>
        </div>
      </div>
    </section>
  )
}