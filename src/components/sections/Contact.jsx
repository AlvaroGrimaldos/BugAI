/**
 * src/components/sections/Contact.jsx
 * ──────────────────────────────────────
 * Formulario de contacto vía Formspree con:
 * - Estado idle / sending / success / error.
 * - Info de contacto + imagen decorativa lateral (IMG_07).
 * - Layout de 2 columnas en desktop, 1 en mobile.
 *
 * 📸 IMG_07 — Foto decorativa lateral
 *    Tamaño: 600×200px | Formato: WebP
 *    Reemplaza 'YOUR_CONTACT_IMG_URL' con la ruta de tu imagen.
 *
 * ⚙️ FORMSPREE: cambia FORMSPREE_URL en src/constants/data.js
 */

import { useState }                    from 'react'
import { CONTACT_INFO, FORMSPREE_URL } from '../../constants/data'

// Ícono de check para el estado de éxito
const CheckCircleIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
    stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

// Campo de formulario reutilizable
function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[10px] text-zinc-400 tracking-wider uppercase">
        {label}
      </label>
      {children}
    </div>
  )
}

// Estilo compartido para inputs y textarea
const INPUT_CLS = `
  w-full bg-violet-50 dark:bg-dark-elevated
  border border-black/10 dark:border-brand-violet/20
  rounded-lg px-3.5 py-2.5
  text-[13px] text-zinc-900 dark:text-zinc-100
  placeholder:text-zinc-400 dark:placeholder:text-zinc-500
  font-body outline-none
  focus:border-brand-violet-mid transition-colors duration-200
`

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify({ ...form, _subject: `BugAI — Consulta de ${form.name}` }),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setForm({ name: '', email: '', business: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-violet-50 dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14 items-start">

        {/* ── Columna izquierda: info + imagen ── */}
        <div>
          <span className="font-mono text-[11px] text-brand-cyan tracking-[2px] uppercase">
            Contacto
          </span>
          <h2 className="font-head font-extrabold text-[clamp(24px,3.5vw,40px)] text-zinc-950 dark:text-zinc-100 mt-3 tracking-tight leading-tight">
            Empieza con un<br />diagnóstico gratuito
          </h2>
          <p className="font-body text-[14px] text-zinc-500 dark:text-zinc-400 mt-4 leading-relaxed">
            30 minutos es todo lo que necesitamos para identificar los procesos que puedes
            automatizar hoy. Sin compromiso.
          </p>

          {/* Datos de contacto */}
          <div className="mt-8 flex flex-col gap-3">
            {CONTACT_INFO.map(item => (
              <div key={item.label} className="flex items-baseline gap-4">
                <span className="font-mono text-[9px] text-brand-violet-light tracking-widest w-20 flex-shrink-0">
                  {item.label}
                </span>
                <span className="font-mono text-[13px] text-zinc-700 dark:text-zinc-300">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/*
           * 📸 IMG_07 — Imagen decorativa lateral
           * Reemplaza 'YOUR_CONTACT_IMG_URL' con la ruta real
           */}
          <div
            className="img-slot mt-7 rounded-xl h-[180px] border border-black/5 dark:border-white/5 flex items-center justify-center relative overflow-hidden"
            style={{ backgroundImage: "url('YOUR_CONTACT_IMG_URL')" }}
          >
            {/* Placeholder */}
            <span className="font-mono text-xs text-zinc-400 relative z-10">
              [📸 IMG_07 — Foto decorativa aquí]
            </span>
          </div>

          {/* Badge de lanzamiento */}
          <div className="mt-5 p-4 rounded-xl bg-brand-cyan/5 border border-brand-cyan/20">
            <p className="font-mono text-[10px] text-brand-cyan tracking-widest mb-2">
              ★ PRECIO DE LANZAMIENTO
            </p>
            <p className="font-body text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Quedan plazas disponibles. Sé parte de los primeros 10 clientes de BugAI
              y accede al precio especial.
            </p>
          </div>
        </div>

        {/* ── Columna derecha: formulario ── */}
        <div className="bg-white dark:bg-dark-card border border-black/5 dark:border-brand-violet/15 rounded-2xl p-9">

          {/* Estado de éxito */}
          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="flex justify-center mb-4">
                <CheckCircleIcon />
              </div>
              <h3 className="font-head font-bold text-[21px] text-zinc-950 dark:text-zinc-100 mb-3">
                ¡Mensaje recibido!
              </h3>
              <p className="font-body text-[14px] text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                Te contactaremos en máximo 24 horas hábiles para coordinar tu diagnóstico gratuito.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="font-body text-sm text-zinc-500 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-2 cursor-pointer bg-transparent hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                Enviar otro mensaje
              </button>
            </div>

          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Nombre + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Nombre *">
                  <input
                    name="name" type="text" required
                    value={form.name} onChange={handleChange}
                    placeholder="Tu nombre"
                    className={INPUT_CLS}
                  />
                </Field>
                <Field label="Email *">
                  <input
                    name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="tu@email.com"
                    className={INPUT_CLS}
                  />
                </Field>
              </div>

              {/* Empresa */}
              <Field label="Negocio / Empresa">
                <input
                  name="business" type="text"
                  value={form.business} onChange={handleChange}
                  placeholder="Nombre o tipo de negocio"
                  className={INPUT_CLS}
                />
              </Field>

              {/* Mensaje */}
              <Field label="¿Qué proceso quieres automatizar? *">
                <textarea
                  name="message" required rows={4}
                  value={form.message} onChange={handleChange}
                  placeholder="Cuéntanos brevemente qué proceso consume más tiempo en tu negocio…"
                  className={`${INPUT_CLS} resize-y min-h-[90px] leading-relaxed`}
                />
              </Field>

              {/* Error */}
              {status === 'error' && (
                <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/30 rounded-lg px-4 py-3 font-body text-[13px] text-red-600 dark:text-red-400">
                  Error al enviar. Escríbenos directamente a <strong>hola@bugai.io</strong>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`
                  w-full font-body font-semibold text-[15px] text-white
                  bg-gradient-to-r from-brand-violet to-brand-cyan-dark
                  py-3.5 rounded-xl border-0 cursor-pointer
                  shadow-[0_0_28px_rgba(91,33,182,0.3)]
                  hover:-translate-y-0.5 hover:shadow-[0_0_44px_rgba(91,33,182,0.45)]
                  transition-all duration-200
                  ${status === 'sending' ? 'opacity-60 cursor-not-allowed hover:translate-y-0' : ''}
                `}
              >
                {status === 'sending' ? 'Enviando…' : 'Solicitar diagnóstico gratuito →'}
              </button>

              <p className="font-mono text-[9px] text-zinc-400 text-center">
                Respondemos en máximo 24 horas hábiles · hola@bugai.io
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}