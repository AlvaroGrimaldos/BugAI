/**
 * src/components/sections/HowItWorks.jsx
 * ─────────────────────────────────────────
 * Sección "Cómo trabajamos": 3 pasos numerados.
 *
 * Banner de imagen (IMG_03) — reemplaza 'YOUR_PROCESS_IMG_URL'
 */

import { STEPS } from '../../constants/data'
import { useLanguage } from '../../context/LanguageContext'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Card from '../ui/Card'

export default function HowItWorks() {
  const { t } = useLanguage()
  const cardCls = 'bg-gradient-to-b from-violet-50 to-white dark:from-dark-elevated dark:to-dark-card border border-black/5 dark:border-white/5 hover:border-brand-violet/30 dark:hover:border-brand-violet/30 hover:shadow-xl dark:hover:shadow-[0_20px_50px_rgba(91,33,182,0.12)] transition-all duration-300'

  return (
    <Section id="process" ariaLabel={t('process.aria')}>
      <SectionHeader
        badge={t('process.badge')}
        title={t('process.title')}
        subtitle={t('process.subtitle')}
        badgeColor="violet"
      />

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
        {STEPS.map((step, i) => (
          <Card key={i} hover={false} className={`relative ${cardCls}`}>
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
          </Card>
        ))}
      </div>
    </Section>
  )
}