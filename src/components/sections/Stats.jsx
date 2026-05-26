/**
 * src/components/sections/Stats.jsx
 * ─────────────────────────────────────
 * Barra de 4 métricas de impacto separadas por divisores verticales.
 */

import { STATS } from '../../constants/data'

export default function Stats() {
  return (
    <section aria-label="Estadísticas de impacto" className="bg-white dark:bg-dark-card border-y border-black/5 dark:border-white/5 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className={`
              flex flex-col items-center text-center px-6 py-8
              ${i < STATS.length - 1 ? 'border-r border-black/5 dark:border-white/5' : ''}
            `}
          >
            {/* Valor numérico */}
            <span
              className="font-head font-extrabold text-[44px] leading-none mb-2"
              style={{ color: stat.accent }}
            >
              {stat.value}
            </span>

            {/* Etiqueta descriptiva */}
            <span className="font-body text-sm text-zinc-500 dark:text-zinc-400 leading-snug max-w-[120px]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}