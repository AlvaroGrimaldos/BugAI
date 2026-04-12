/**
 * src/components/sections/Hero.jsx
 * ───────────────────────────────────
 * Sección principal (above the fold).
 *
 * Capas de fondo (de atrás hacia adelante):
 *   1. Imagen de fondo (IMG_01) — reemplaza YOUR_HERO_BG_URL
 *   2. Overlay adaptativo al tema (hero-overlay-dark / hero-overlay-light)
 *   3. Grid animado semitransparente (.bg-grid)
 *   4. Orbes de luz difusa (radial-gradient)
 *   5. Contenido (badge, headline, subtítulo, CTAs, tech stack)
 *
 * 📸 IMG_01 — Hero Background
 *    Tamaño: 1920×900px | Formato: WebP | Prompt Gemini en data.js
 *    Reemplaza 'YOUR_HERO_BG_URL' con la ruta de tu imagen.
 */

import { useTheme }    from '../../context/ThemeContext'
import { TECH_STACK }  from '../../constants/data'

export default function Hero() {
  const { theme } = useTheme()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-6"
    >
      {/* ── Capa 1: Imagen de fondo ── */}
      {/* 📸 IMG_01 — reemplaza 'YOUR_HERO_BG_URL' */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('YOUR_HERO_BG_URL')" }}
        aria-hidden="true"
      />

      {/* ── Capa 2: Overlay adaptativo ── */}
      <div
        className={`absolute inset-0 z-[1] ${theme === 'dark' ? 'hero-overlay-dark' : 'hero-overlay-light'}`}
        aria-hidden="true"
      />

      {/* ── Capa 3: Grid animado ── */}
      <div
        className="absolute inset-0 z-[2] bg-grid animate-grid-move"
        aria-hidden="true"
      />

      {/* ── Capa 4: Orbes de luz ── */}
      <div
        className="absolute z-[2] top-[15%] left-[8%] w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(91,33,182,0.18) 0%, transparent 70%)', filter: 'blur(50px)' }}
        aria-hidden="true"
      />
      <div
        className="absolute z-[2] bottom-[10%] right-[6%] w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.13) 0%, transparent 70%)', filter: 'blur(50px)' }}
        aria-hidden="true"
      />

      {/* ── Capa 5: Contenido ── */}
      <div className="relative z-[3] max-w-4xl mx-auto text-center animate-fade-up">

        {/* Badge de lanzamiento */}
        <div className="inline-flex items-center gap-2 bg-brand-violet/20 border border-brand-violet-mid/40 rounded-full px-4 py-1.5 mb-8">
          <span className="w-[7px] h-[7px] rounded-full bg-brand-cyan animate-glow-pulse" />
          <span className="font-mono text-[11px] text-brand-cyan tracking-wider">
            PRECIO DE LANZAMIENTO · PRIMEROS 10 CLIENTES
          </span>
        </div>

        {/* Headline principal */}
        <h1 className="font-head font-extrabold text-[clamp(36px,7vw,76px)] leading-[1.05] tracking-tight mb-6 text-zinc-950 dark:text-zinc-100">
          Tu negocio trabaja<br />
          <span className="text-gradient">24/7 sin descanso</span>
        </h1>

        {/* Subtítulo */}
        <p className="font-body text-[clamp(15px,2.5vw,19px)] text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Diseñamos e implementamos flujos de automatización con IA para que recuperes entre{' '}
          <strong className="text-zinc-950 dark:text-zinc-100 font-semibold">15 y 40 horas semanales</strong>{' '}
          y escales sin contratar más personal.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#contact"
            className="
              inline-flex items-center gap-2 no-underline
              bg-gradient-to-br from-brand-violet to-brand-violet-mid
              text-white font-body font-semibold text-base
              px-7 py-3.5 rounded-xl
              shadow-[0_0_28px_rgba(91,33,182,0.45)]
              hover:shadow-[0_0_48px_rgba(91,33,182,0.65)]
              hover:-translate-y-0.5 transition-all duration-200
            "
          >
            Diagnóstico gratis
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </a>

          <a
            href="#services"
            className="
              inline-flex items-center no-underline
              bg-white/10 dark:bg-white/5
              text-zinc-800 dark:text-zinc-200
              font-body font-medium text-base
              px-7 py-3.5 rounded-xl
              border border-violet-200 dark:border-brand-violet/25
              hover:border-brand-violet-mid transition-colors duration-200
              backdrop-blur-sm
            "
          >
            Ver servicios
          </a>
        </div>

        {/* Tech stack pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-14">
          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 tracking-widest">
            POWERED BY
          </span>
          {TECH_STACK.map(tech => (
            <span
              key={tech}
              className="
                font-mono text-[10px] text-zinc-500 dark:text-zinc-400
                bg-violet-50 dark:bg-zinc-900
                border border-violet-100 dark:border-white/5
                rounded px-2 py-0.5
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}