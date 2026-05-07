/**
 * src/components/sections/HowItWorks.jsx
 * ─────────────────────────────────────────
 * Sección "Cómo trabajamos": 3 pasos numerados.
 *
 * Banner de imagen (IMG_03) — reemplaza 'YOUR_PROCESS_IMG_URL'
 */

import { STEPS } from '../../constants/data'

export default function HowItWorks() {
  return (
    <section
      id="process"
      aria-label="Cómo trabajamos"
      className="py-24 px-6 bg-white dark:bg-dark-card border-t border-black/5 dark:border-white/5"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="font-mono text-[11px] text-brand-violet-light tracking-[2px] uppercase">
            Proceso
          </span>
          <h2 className="font-head font-extrabold text-[clamp(26px,4vw,46px)] text-zinc-950 dark:text-zinc-100 mt-3 tracking-tight">
            Cómo trabajamos
          </h2>
          <p className="font-body text-[15px] text-zinc-500 dark:text-zinc-400 mt-3 max-w-md mx-auto">
            3 pasos simples desde el diagnóstico hasta la entrega funcionando.
          </p>
        </div>

        {/* Grid de pasos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="
                relative group
                bg-violet-50 dark:bg-dark-elevated
                border border-black/5 dark:border-white/5
                rounded-2xl p-7
                hover:border-brand-violet/30 dark:hover:border-brand-violet/30
                hover:shadow-lg dark:hover:shadow-[0_12px_40px_rgba(91,33,182,0.15)]
                transition-all duration-300
              "
            >
              {/* Conector visual entre pasos (solo desktop) */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-3 w-6 text-zinc-300 dark:text-zinc-600" aria-hidden="true">
                  <svg viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="0" y1="6" x2="18" y2="6" />
                    <polyline points="14,1 19,6 14,11" />
                  </svg>
                </div>
              )}

              <p className="text-gradient-num font-mono font-medium text-[38px] leading-none mb-5">
                {step.num}
              </p>

              <h3 className="font-head font-bold text-[19px] text-zinc-950 dark:text-zinc-100 mb-3">
                {step.title}
              </h3>

              <p className="font-body text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}