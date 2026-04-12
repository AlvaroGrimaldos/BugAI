/**
 * src/components/sections/Reviews.jsx
 * ──────────────────────────────────────
 * Sección de testimonios con:
 * - Tarjeta principal con la reseña activa y comillas decorativas.
 * - Selector de reseña (tabs con avatar + nombre).
 * - Caja de rating global 5.0 / 5.0.
 *
 * 📸 IMG_04, IMG_05, IMG_06 — Fotos de avatar (200×200px, circular)
 *    Actualiza avatarUrl en src/constants/data.js cuando tengas las imágenes.
 */

import { useState }  from 'react'
import Avatar        from '../ui/Avatar'
import { REVIEWS }   from '../../constants/data'

// Ícono estrella
const StarIcon = ({ size = 17, filled = true }) => (
  <svg width={size} height={size} viewBox="0 0 24 24"
    fill={filled ? '#F59E0B' : 'none'}
    stroke="#F59E0B" strokeWidth="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

export default function Reviews() {
  const [active, setActive] = useState(0)
  const review = REVIEWS[active]

  return (
    <section
      id="reviews"
      className="py-24 px-6 bg-white dark:bg-dark-card border-t border-black/5 dark:border-white/5"
    >
      <div className="max-w-3xl mx-auto">

        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="font-mono text-[11px] text-brand-violet-light tracking-[2px] uppercase">
            Testimonios
          </span>
          <h2 className="font-head font-extrabold text-[clamp(26px,4vw,46px)] text-zinc-950 dark:text-zinc-100 mt-3 tracking-tight">
            Lo que dicen nuestros clientes
          </h2>
          <p className="font-mono text-[12px] text-zinc-400 mt-2">
            ★ 5.0 / 5.0 · Programa de lanzamiento
          </p>
        </div>

        {/* Tarjeta de reseña activa */}
        <div className="
          relative bg-violet-50 dark:bg-dark-elevated
          border border-brand-violet/15 dark:border-brand-violet/20
          rounded-2xl p-9 mb-6 transition-all duration-300
        ">
          {/* Comillas decorativas */}
          <span
            className="absolute top-5 right-7 font-head text-[72px] leading-none select-none pointer-events-none"
            style={{ color: 'rgba(124,58,237,0.12)' }}
            aria-hidden="true"
          >
            "
          </span>

          {/* Estrellas */}
          <div className="flex gap-1 mb-5">
            {Array.from({ length: review.rating }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>

          {/* Texto de la reseña */}
          <p className="font-body text-[17px] text-zinc-800 dark:text-zinc-200 leading-[1.8] mb-6 font-light">
            "{review.text}"
          </p>

          {/* Autor */}
          <div className="flex items-center gap-3">
            <Avatar url={review.avatarUrl} initials={review.initials} size={44} />
            <div>
              <p className="font-head font-semibold text-[15px] text-zinc-950 dark:text-zinc-100">
                {review.name}
              </p>
              <p className="font-mono text-[10px] text-zinc-400">
                {review.business}
              </p>
            </div>
          </div>
        </div>

        {/* Selector de reseñas (tabs) */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-10">
          {REVIEWS.map((r, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`
                flex items-center gap-2 px-3.5 py-2 rounded-xl border cursor-pointer transition-all duration-200
                ${i === active
                  ? 'bg-brand-violet border-brand-violet text-white'
                  : 'bg-violet-50 dark:bg-dark-elevated border-black/5 dark:border-white/5 text-zinc-500 dark:text-zinc-400 hover:border-brand-violet/30'
                }
              `}
            >
              <Avatar url={r.avatarUrl} initials={r.initials} size={26} />
              <span className="font-body text-[12px]">{r.name}</span>
            </button>
          ))}
        </div>

        {/* Rating global */}
        <div className="
          text-center py-5 px-6 rounded-xl
          bg-brand-violet/5 border border-brand-violet/15
        ">
          <div className="flex justify-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} size={20} />
            ))}
          </div>
          <p className="font-head font-bold text-[26px] text-zinc-950 dark:text-zinc-100 leading-none mb-1.5">
            5.0 / 5.0
          </p>
          <p className="font-mono text-[10px] text-zinc-400 tracking-widest">
            CALIFICACIÓN PROMEDIO · PROGRAMA DE LANZAMIENTO
          </p>
        </div>
      </div>
    </section>
  )
}