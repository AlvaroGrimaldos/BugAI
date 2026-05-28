/**
 * src/components/sections/Contact.jsx
 * ──────────────────────────────────────
 * Formulario de contacto vía Formspree con:
 * - Estado idle / sending / success / error.
 * - Info de contacto + WhatsApp como canal principal.
 * - Layout de 2 columnas en desktop, 1 en mobile.
 *
 * ⚙️ FORMSPREE: cambia FORMSPREE_URL en src/constants/data.js
 * ⚙️ WHATSAPP: cambia WHATSAPP_URL en src/constants/data.js
 */

import { useState, useRef, useCallback } from 'react'
import { useLanguage }                 from '../../context/LanguageContext'
import { CONTACT_INFO, FORMSPREE_URL, WHATSAPP_URL } from '../../constants/data'

const MAX_LENGTHS = { name: 100, email: 254, business: 200, message: 2000 }

function sanitize(val) {
  return val.replace(/<[^>]*>/g, '').trim()
}

const CheckCircleIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
    stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

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
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})
  const lastSubmit = useRef(0)

  const handleChange = e => {
    const { name, value } = e.target
    const max = MAX_LENGTHS[name] || 2000
    if (value.length > max) return
    setForm(prev => ({ ...prev, [name]: sanitize(value) }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = useCallback(() => {
    const errs = {}
    if (!form.name || form.name.length < 2) errs.name = 'Mínimo 2 caracteres'
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Email inválido'
    if (!form.message || form.message.length < 10) errs.message = 'Mínimo 10 caracteres'
    if (form.message.length > MAX_LENGTHS.message) errs.message = 'Máximo 2000 caracteres'
    return errs
  }, [form])

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length) return

    const now = Date.now()
    if (now - lastSubmit.current < 5000) return
    lastSubmit.current = now

    setStatus('sending')
    try {
      const safeName = sanitize(form.name).slice(0, 100)
      const res = await fetch(FORMSPREE_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify({ ...form, _subject: t('contact.email_subject', { name: safeName }) }),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) {
        setForm({ name: '', email: '', business: '', message: '' })
        setErrors({})
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" aria-label={t('contact.aria')} className="scroll-mt-16 py-24 px-6 bg-violet-50 dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14 items-start">

        {/* ── Columna izquierda: info + WhatsApp CTA ── */}
        <div>
          <span className="font-mono text-[11px] text-brand-cyan tracking-[2px] uppercase">
            {t('contact.badge')}
          </span>
          <h2 className="font-head font-extrabold text-[clamp(24px,3.5vw,40px)] text-zinc-950 dark:text-zinc-100 mt-3 tracking-tight leading-tight">
            {t('contact.title_1')}<br />{t('contact.title_2')}
          </h2>
          <p className="font-body text-[14px] text-zinc-500 dark:text-zinc-400 mt-4 leading-relaxed">
            {t('contact.subtitle')}
          </p>

          {/* WhatsApp CTA principal */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer" referrerpolicy="no-referrer"
            className="
              mt-8 flex items-center gap-3 no-underline
              bg-emerald-600 hover:bg-emerald-700
              text-white font-body font-semibold text-[15px]
              px-6 py-3.5 rounded-xl
              shadow-lg shadow-emerald-600/25
              hover:shadow-xl hover:shadow-emerald-600/35
              hover:-translate-y-0.5 transition-all duration-200
            "
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {t('contact.whatsapp')}
          </a>

          {/* Datos de contacto */}
          <div className="mt-8 flex flex-col gap-3">
            {CONTACT_INFO.map(item => (
              <div key={item.label} className="flex items-baseline gap-4">
                <span className="font-mono text-[9px] text-brand-violet-light tracking-widest w-20 flex-shrink-0">
                  {item.label}
                </span>
                {item.label === 'EMAIL' ? (
                  <a href={`mailto:${item.value}`} className="font-mono text-[13px] text-zinc-700 dark:text-zinc-300 hover:text-brand-cyan transition-colors no-underline">
                    {item.value}
                  </a>
                ) : item.label === 'INSTAGRAM' || item.label === 'TIKTOK' ? (
                  <a href={`https://www.${item.label === 'INSTAGRAM' ? 'instagram' : 'tiktok'}.com/${item.value.replace('@', '')}`} target="_blank" rel="noopener noreferrer" referrerpolicy="no-referrer" className="font-mono text-[13px] text-zinc-700 dark:text-zinc-300 hover:text-brand-cyan transition-colors no-underline">
                    {item.value}
                  </a>
                ) : item.label === 'LINKEDIN' ? (
                  <span className="font-mono text-[13px] text-zinc-700 dark:text-zinc-300">
                    {item.value}
                  </span>
                ) : (
                  <span className="font-mono text-[13px] text-zinc-700 dark:text-zinc-300">
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Badge de garantía */}
          <div className="mt-8 p-4 rounded-xl bg-brand-cyan/5 border border-brand-cyan/20">
            <p className="font-mono text-[10px] text-brand-cyan tracking-widest mb-2">
              {t('contact.guarantee_badge')}
            </p>
            <p className="font-body text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {t('contact.guarantee_text')}
            </p>
          </div>
        </div>

        {/* ── Columna derecha: formulario ── */}
        <div className="bg-white dark:bg-dark-card border border-black/5 dark:border-brand-violet/15 rounded-2xl p-9 shadow-lg dark:shadow-[0_12px_40px_rgba(0,0,0,0.3)]">

          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="flex justify-center mb-4">
                <CheckCircleIcon />
              </div>
              <h3 className="font-head font-bold text-[21px] text-zinc-950 dark:text-zinc-100 mb-3">
                {t('contact.success_title')}
              </h3>
              <p className="font-body text-[14px] text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                {t('contact.success_desc')}
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="font-body text-sm text-zinc-500 border border-zinc-200 dark:border-zinc-700 rounded-lg px-4 py-2 cursor-pointer bg-transparent hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                {t('contact.success_btn')}
              </button>
            </div>

          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label={t('contact.field_name')}>
                  <input
                    name="name" type="text" required
                    value={form.name} onChange={handleChange}
                    placeholder={t('contact.field_name_placeholder')}
                    maxLength={MAX_LENGTHS.name}
                    className={`${INPUT_CLS} ${errors.name ? 'border-red-400 dark:border-red-500' : ''}`}
                  />
                  {errors.name && <span className="font-mono text-[10px] text-red-500">{errors.name}</span>}
                </Field>
                <Field label={t('contact.field_email')}>
                  <input
                    name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    placeholder={t('contact.field_email_placeholder')}
                    maxLength={MAX_LENGTHS.email}
                    className={`${INPUT_CLS} ${errors.email ? 'border-red-400 dark:border-red-500' : ''}`}
                  />
                  {errors.email && <span className="font-mono text-[10px] text-red-500">{errors.email}</span>}
                </Field>
              </div>

              <Field label={t('contact.field_business')}>
                <input
                  name="business" type="text"
                  value={form.business} onChange={handleChange}
                  placeholder={t('contact.field_business_placeholder')}
                  maxLength={MAX_LENGTHS.business}
                  className={INPUT_CLS}
                />
              </Field>

              <Field label={t('contact.field_message')}>
                <textarea
                  name="message" required rows={4}
                  value={form.message} onChange={handleChange}
                  placeholder={t('contact.field_message_placeholder')}
                  maxLength={MAX_LENGTHS.message}
                  className={`${INPUT_CLS} resize-y min-h-[90px] leading-relaxed ${errors.message ? 'border-red-400 dark:border-red-500' : ''}`}
                />
                {errors.message && <span className="font-mono text-[10px] text-red-500">{errors.message}</span>}
              </Field>

              {status === 'error' && (
                <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/30 rounded-lg px-4 py-3 font-body text-[13px] text-red-600 dark:text-red-400">
                  {t('contact.error_msg')} <strong>holabugai@gmail.com</strong>
                </div>
              )}

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
                {status === 'sending' ? t('contact.btn_sending') : t('contact.btn_idle')}
              </button>

              <p className="font-mono text-[9px] text-zinc-400 text-center">
                {t('contact.footer_note')}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}