/**
 * src/components/sections/KaiChat.jsx
 * ──────────────────────────────────────
 * Sección de mascota KAI + Chatbase integrado.
 * Ahora el chat es 100% externo (Chatbase iframe).
 */

import KaiSVG from '../ui/KaiSVG'

const KAI_TAGS = ['IA conversacional', 'Automatización', 'Diagnóstico']

export default function KaiChat() {
  return (
<<<<<<< HEAD
    <section
      id="kai"
      className="relative py-24 px-6 bg-violet-50 dark:bg-dark-bg overflow-hidden"
    >
      {/* Fondo decorativo */}
=======
    <section id="kai" aria-label="Asistente KAI - Chat de IA" className="relative py-24 px-6 bg-violet-50 dark:bg-dark-bg overflow-hidden">

      {/* Orbe decorativo de fondo */}
>>>>>>> 719c75e8a2e1456a2cd7fc9faf77f8a1b5ba3f2a
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(91,33,182,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="font-mono text-[11px] text-brand-cyan tracking-[2px] uppercase">
            Asistente IA
          </span>

          <h2 className="font-head font-extrabold text-[clamp(26px,4vw,46px)] text-zinc-950 dark:text-zinc-100 mt-3 tracking-tight">
            Habla con KAI
          </h2>

          <p className="font-body text-[15px] text-zinc-500 dark:text-zinc-400 mt-3">
            Nuestro asistente responde tus dudas sobre automatización al instante.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-center">

          {/* ── KAI Mascota ── */}
          <div className="flex flex-col items-center gap-6">

            <div className="relative flex items-center justify-center">
              {/* anillos */}
              <div className="absolute w-[280px] h-[280px] rounded-full border border-brand-violet/20 animate-pulse-ring" />
              <div className="absolute w-[230px] h-[230px] rounded-full border border-brand-cyan/15 animate-pulse-ring-delay" />

              <KaiSVG size={240} />
            </div>

            {/* info */}
            <div className="text-center">
              <h3 className="font-head font-bold text-2xl text-zinc-950 dark:text-zinc-100 mb-1">
                KAI
              </h3>

              <p className="font-mono text-[10px] text-brand-cyan tracking-widest">
                ASISTENTE OFICIAL · BUGAI v1.0
              </p>

              <div className="flex flex-wrap gap-2 justify-center mt-4">
                {KAI_TAGS.map(tag => (
                  <span
                    key={tag}
                    className="
                      font-mono text-[11px] text-brand-violet-light
                      bg-brand-violet/10 border border-brand-violet/20
                      rounded-full px-3 py-1
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── CHATBASE ── */}
          <div className="
            w-full h-[600px]
            rounded-2xl overflow-hidden
            border border-brand-violet/25
            shadow-lg
            bg-white dark:bg-dark-card
          ">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/sC-hkYsvOPJFVxUYie6u2"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}