/**
 * src/components/sections/Services.jsx
 * ───────────────────────────────────────
 * Grid de 4 planes de precios con:
 * - Badge destacado para el plan Growth.
 * - CTA que lleva a la sección de contacto.
 */

import { PLANS } from '../../constants/data'
import { useLanguage } from '../../context/LanguageContext'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Card from '../ui/Card'
import Button from '../ui/Button'

function CheckIcon({ color }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function Services() {
  const { t } = useLanguage()
  return (
    <Section id="services" ariaLabel={t('services.aria')} variant="dark">
      <SectionHeader
        badge={t('services.badge')}
        title={t('services.title')}
        subtitle={t('services.subtitle')}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {PLANS.map((plan, i) => {
          const popularCls = plan.popular
            ? 'border-2 border-brand-cyan/60 bg-gradient-to-b from-brand-cyan/5 to-brand-violet/5 shadow-lg dark:shadow-[0_0_40px_rgba(6,182,212,0.1)]'
            : ''

          return (
            <Card key={i} hover={!plan.popular} className={`relative ${popularCls}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-violet to-brand-cyan-dark text-white font-mono text-[10px] tracking-wider px-4 py-1 rounded-full whitespace-nowrap shadow-md">
                  {t('services.popular')}
                </div>
              )}

              <p className="font-mono text-[10px] tracking-widest mb-1.5" style={{ color: plan.accent }}>
                {plan.monthly ? t('services.monthly') : t('services.delivery_in', { delivery: t(plan.deliveryKey).toUpperCase() })}
              </p>

              <h3 className="font-head font-bold text-xl text-zinc-950 dark:text-zinc-100 mb-1.5">
                {plan.name}
              </h3>

              <p className="font-body text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5">
                {t(plan.descKey)}
              </p>

              <div className="mb-5">
                <div className="flex items-baseline gap-1">
                  <span className="font-head font-extrabold text-[40px] leading-none" style={{ color: plan.accent }}>
                    €{plan.price}
                  </span>
                  {plan.monthly && (
                    <span className="font-body text-sm text-zinc-400">{t('services.per_month')}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-2 font-body text-[13px] text-zinc-500 dark:text-zinc-400">
                    <CheckIcon color={plan.accent} />
                    {t(feat)}
                  </li>
                ))}
              </ul>

              <Button href="#contact" variant={plan.popular ? 'primary' : 'ghost'} className="w-full justify-center text-[13px] py-2.5 px-4">
                {t('services.request', { name: plan.name })}
              </Button>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}