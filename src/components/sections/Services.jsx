/**
 * src/components/sections/Services.jsx
 * ───────────────────────────────────────
 * Grid de 4 planes de precios con:
 * - Badge destacado para el plan Growth.
 * - CTA que lleva a la sección de contacto.
 */

import { PLANS } from '../../constants/data'

function CheckIcon({ color }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function Services() {
  return (
    <section id="services" aria-label="Planes y precios" className="py-24 px-6 bg-violet-50 dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <span className="font-mono text-[11px] text-brand-cyan tracking-[2px] uppercase">
            Planes
          </span>
          <h2 className="font-head font-extrabold text-[clamp(26px,4vw,46px)] text-zinc-950 dark:text-zinc-100 mt-3 tracking-tight">
            Servicios a medida
          </h2>
          <p className="font-body text-[15px] text-zinc-500 dark:text-zinc-400 mt-3 max-w-md mx-auto">
            Automatizaciones diseñadas para retail y e-commerce. Pago 50% al inicio, 50% a la entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {PLANS.map((plan, i) => {
            return (
              <div
                key={i}
                className={`
                  relative rounded-2xl p-7 transition-all duration-200
                  hover:-translate-y-1
                  ${plan.popular
                    ? 'border-2 border-brand-cyan/60 bg-gradient-to-b from-brand-cyan/5 to-brand-violet/5 shadow-lg dark:shadow-[0_0_40px_rgba(6,182,212,0.1)]'
                    : 'border border-black/5 dark:border-white/5 bg-white dark:bg-dark-card hover:shadow-xl dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]'
                  }
                `}
              >
                {plan.popular && (
                  <div
                    className="
                      absolute -top-3 left-1/2 -translate-x-1/2
                      bg-gradient-to-r from-brand-violet to-brand-cyan-dark
                      text-white font-mono text-[10px] tracking-wider
                      px-4 py-1 rounded-full whitespace-nowrap shadow-md
                    "
                  >
                    MÁS POPULAR
                  </div>
                )}

                <p className="font-mono text-[10px] tracking-widest mb-1.5" style={{ color: plan.accent }}>
                  {plan.monthly ? 'MENSUAL' : `ENTREGA EN ${plan.delivery.toUpperCase()}`}
                </p>

                <h3 className="font-head font-bold text-xl text-zinc-950 dark:text-zinc-100 mb-1.5">
                  {plan.name}
                </h3>

                <p className="font-body text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5">
                  {plan.desc}
                </p>

                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="font-head font-extrabold text-[40px] leading-none" style={{ color: plan.accent }}>
                      €{plan.price}
                    </span>
                    {plan.monthly && (
                      <span className="font-body text-sm text-zinc-400">/mes</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2 font-body text-[13px] text-zinc-500 dark:text-zinc-400">
                      <CheckIcon color={plan.accent} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`
                    block text-center no-underline
                    font-body font-semibold text-[13px]
                    py-2.5 px-4 rounded-lg
                    border transition-all duration-200
                    ${plan.popular
                      ? 'bg-gradient-to-r from-brand-violet to-brand-cyan-dark text-white border-transparent hover:shadow-lg hover:shadow-brand-violet/25'
                      : 'bg-violet-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border-black/5 dark:border-white/5 hover:border-brand-violet/40'
                    }
                  `}
                >
                  Solicitar {plan.name}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}