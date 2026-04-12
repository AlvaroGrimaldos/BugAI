/**
 * src/components/sections/HowItWorks.jsx
 * ─────────────────────────────────────────
 * Sección "Cómo trabajamos": banner de imagen + 3 pasos numerados.
 *
 * 📸 IMG_03 — Banner de proceso
 *    Tamaño: 1100×260px | Formato: WebP
 *    Reemplaza 'YOUR_PROCESS_IMG_URL' con la ruta de tu imagen.
 *    Prompt Gemini: "Two professionals on a video call, modern home office,
 *    dual monitors with automation dashboards, warm light, cinematic 16:9"
 */

import { STEPS } from '../../constants/data'

export default function HowItWorks() {
  return (
    <section
      id="process"
      className="py-24 px-6 bg-white dark:bg-dark-card border-t border-black/5 dark:border-white/5"
    >
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="font-mono text-[11px] text-brand-violet-light tracking-[2px] uppercase">
            Proceso
          </span>
          <h2 className="font-head font-extrabold text-[clamp(26px,4vw,46px)] text-zinc-950 dark:text-zinc-100 mt-3 tracking-tight">
            Cómo trabajamos
          </h2>
        </div>

        {/*
         * 📸 IMG_03 — Banner de imagen de proceso
         * Reemplaza 'YOUR_PROCESS_IMG_URL' con la ruta real
         */}
        <div
          className="img-slot relative rounded-2xl overflow-hidden mb-8 h-[220px] border border-black/5 dark:border-white/5 flex items-end"
          style={{ backgroundImage: "url('YOUR_PROCESS_IMG_URL')" }}
        >
          {/* Overlay degradado + texto mientras no haya imagen */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent z-10" />
          <div className="relative z-20 w-full p-5">
            <span className="font-mono text-[11px] text-white/60 tracking-widest">
              OPERACIÓN 100% REMOTA · ESPAÑA · LATAM · USA
            </span>
          </div>
          {/* Placeholder visible cuando no hay imagen */}
          <div className="absolute inset-0 flex items-center justify-center z-5">
            <span className="font-mono text-xs text-zinc-400">
              [📸 IMG_03 — Banner de proceso aquí]
            </span>
          </div>
        </div>

        {/* Grid de pasos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="
                bg-violet-50 dark:bg-dark-elevated
                border border-black/5 dark:border-white/5
                rounded-2xl p-7
              "
            >
              {/* Número del paso con gradiente */}
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