/**
 * src/components/sections/KaiChat.jsx
 * ──────────────────────────────────────
 * Sección de mascota KAI + chatbot en tiempo real.
 * - Layout: KAI (izquierda) | Chat UI (derecha).
 * - El chat usa el hook useChat que llama a la API de Claude.
 * - Responsive: columna única en mobile.
 */

import KaiSVG    from '../ui/KaiSVG'
import { useChat } from '../../hooks/useChat'

// Ícono de envío
const SendIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2"  x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

const KAI_TAGS = ['IA conversacional', 'Automatización', 'Diagnóstico']

export default function KaiChat() {
  const { messages, input, setInput, loading, sendMessage, handleKeyDown, endRef } = useChat()

  return (
    <section id="kai" className="relative py-24 px-6 bg-violet-50 dark:bg-dark-bg overflow-hidden">

      {/* Orbe decorativo de fondo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(91,33,182,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Encabezado */}
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

        {/* Layout principal: KAI + Chat */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-center">

          {/* ── KAI Mascota ── */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative flex items-center justify-center">
              {/* Anillos de pulso */}
              <div className="absolute w-[280px] h-[280px] rounded-full border border-brand-violet/20 animate-pulse-ring" />
              <div className="absolute w-[230px] h-[230px] rounded-full border border-brand-cyan/15 animate-pulse-ring-delay" />
              <KaiSVG size={240} />
            </div>

            {/* Info de KAI */}
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

          {/* ── Chat UI ── */}
          <div className="
            flex flex-col h-[500px]
            bg-white dark:bg-dark-card
            border border-brand-violet/25 dark:border-brand-violet/25
            rounded-2xl overflow-hidden
          ">
            {/* Cabecera del chat */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-black/5 dark:border-white/5 bg-brand-violet/5">
              <div className="relative">
                <div className="
                  w-8 h-8 rounded-full
                  bg-gradient-to-br from-brand-violet to-brand-cyan-dark
                  flex items-center justify-center
                  font-head font-extrabold text-[12px] text-white
                ">
                  K
                </div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white dark:border-dark-card" />
              </div>
              <div>
                <p className="font-head font-semibold text-[14px] text-zinc-950 dark:text-zinc-100 leading-none">
                  KAI · BugAI
                </p>
                <p className="font-mono text-[9px] text-emerald-500 mt-0.5">● ONLINE</p>
              </div>
            </div>

            {/* Área de mensajes */}
            <div className="flex-1 overflow-y-auto px-3.5 py-4 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`
                      max-w-[82%] px-3.5 py-2.5 text-[13px] leading-relaxed
                      ${msg.role === 'user'
                        ? 'bg-gradient-to-br from-brand-violet to-brand-violet-mid text-white rounded-[14px_14px_4px_14px]'
                        : 'bg-violet-50 dark:bg-dark-elevated text-zinc-800 dark:text-zinc-200 border border-black/5 dark:border-white/5 rounded-[14px_14px_14px_4px]'
                      }
                    `}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Indicador de carga (typing) */}
              {loading && (
                <div className="flex justify-start">
                  <div className="
                    bg-violet-50 dark:bg-dark-elevated
                    border border-black/5 dark:border-white/5
                    rounded-[14px_14px_14px_4px] px-4 py-3
                    flex items-center gap-1.5
                  ">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-violet-light animate-blink"   />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-violet-light animate-blink-1" />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-violet-light animate-blink-2" />
                  </div>
                </div>
              )}

              {/* Ancla de auto-scroll */}
              <div ref={endRef} />
            </div>

            {/* Input de mensaje */}
            <div className="flex items-end gap-2 px-3.5 py-3 border-t border-black/5 dark:border-white/5 bg-violet-50 dark:bg-dark-elevated">
              <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribe tu consulta… (Enter para enviar)"
                rows={1}
                className="
                  flex-1 resize-none bg-white dark:bg-dark-card
                  border border-black/10 dark:border-brand-violet/25
                  rounded-lg px-3 py-2.5
                  text-[13px] text-zinc-800 dark:text-zinc-200
                  placeholder:text-zinc-400 dark:placeholder:text-zinc-500
                  font-body leading-snug outline-none
                  focus:border-brand-violet-mid transition-colors duration-200
                "
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                aria-label="Enviar mensaje"
                className={`
                  w-9 h-9 flex-shrink-0 rounded-lg flex items-center justify-center
                  bg-gradient-to-br from-brand-violet to-brand-violet-mid
                  border-0 cursor-pointer transition-opacity duration-200
                  ${loading || !input.trim() ? 'opacity-40 cursor-not-allowed' : 'opacity-100 hover:opacity-85'}
                `}
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}