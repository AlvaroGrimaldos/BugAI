/**
 * src/components/sections/Contact.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Drop-in replacement. Lógica Formspree 100% intacta.
 * Cero dependencias nuevas. Tailwind + CSS puro.
 *
 * ⚙️  FORMSPREE → cambia FORMSPREE_URL en src/constants/data.js
 */

import { useState, useRef, useCallback } from 'react'
import { useLanguage }   from '../../context/LanguageContext'
import { FORMSPREE_URL } from '../../constants/data'
import Section           from '../ui/Section'

/* ─── constants ───────────────────────────────────────────────────────────── */
const MAX = { name: 100, email: 254, business: 200, message: 2000 }

function sanitize(v) { return v.replace(/<[^>]*>/g, '').trim() }

/* ─── icons ───────────────────────────────────────────────────────────────── */
function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  )
}

function IconSpinner() {
  return (
    <svg className="contact-spin" width="15" height="15" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2.2"
      strokeLinecap="round" aria-hidden>
      <path d="M21 12a9 9 0 11-6.219-8.56"/>
    </svg>
  )
}

function IconCheck() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

function IconWarn() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  )
}

/* ─── FloatingField ───────────────────────────────────────────────────────── */
function FloatingField({
  label, name, type = 'text',
  value, onChange, placeholder,
  required, maxLength, error, multiline = false,
}) {
  const [focused, setFocused] = useState(false)
  const lifted = focused || value.length > 0

  const sharedInputStyle = {
    fontFamily: 'inherit',
    background: 'transparent',
  }

  const inputClass = [
    'relative z-10 w-full outline-none bg-transparent',
    'text-[13.5px] leading-relaxed text-zinc-100',
    'placeholder:text-zinc-600',
    'px-4',
    multiline ? 'pt-[26px] pb-3 resize-none' : 'pt-[22px] pb-[8px]',
  ].join(' ')

  return (
    <div className="flex flex-col gap-2">
      <div
        className="relative rounded-xl transition-shadow duration-200"
        style={{
          boxShadow: focused
            ? '0 0 0 1.5px #7c3aed, 0 0 18px rgba(124,58,237,0.15)'
            : error
            ? '0 0 0 1px rgba(248,113,113,0.5)'
            : '0 0 0 1px rgba(255,255,255,0.08)',
          background: focused
            ? 'rgba(109,40,217,0.05)'
            : 'rgba(255,255,255,0.03)',
        }}
      >
        <label
          htmlFor={name}
          className="pointer-events-none absolute left-4 z-20 select-none font-mono uppercase tracking-widest transition-all duration-200"
          style={{
            fontSize:  lifted ? '9px'  : '10.5px',
            top:       lifted ? (multiline ? '8px' : '7px') : '50%',
            transform: lifted ? 'none' : 'translateY(-50%)',
            color:     focused ? '#a78bfa' : lifted ? 'rgba(139,92,246,0.5)' : '#52525b',
          }}
        >
          {label}
          {required && <span style={{ color: '#7c3aed', marginLeft: 2 }}>*</span>}
        </label>

        {multiline ? (
          <textarea
            id={name} name={name} rows={5}
            value={value} onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={focused ? placeholder : ''}
            maxLength={maxLength} required={required}
            autoComplete="off"
            className={inputClass}
            style={sharedInputStyle}
          />
        ) : (
          <input
            id={name} name={name} type={type}
            value={value} onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={focused ? placeholder : ''}
            maxLength={maxLength} required={required}
            autoComplete="off"
            className={inputClass}
            style={sharedInputStyle}
          />
        )}
      </div>

      {error && (
        <p className="flex items-center gap-1.5 pl-1 font-mono text-[10px] text-red-400">
          <IconWarn /> {error}
        </p>
      )}
    </div>
  )
}

/* ─── main export ─────────────────────────────────────────────────────────── */
export default function Contact() {
  const { t } = useLanguage()

  const [form,   setForm]   = useState({ name: '', email: '', business: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})
  const lastSubmit = useRef(0)

  const handleChange = e => {
    const { name, value } = e.target
    if (value.length > (MAX[name] || 2000)) return
    setForm(prev => ({ ...prev, [name]: sanitize(value) }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = useCallback(() => {
    const errs = {}
    if (!form.name    || form.name.length < 2)                             errs.name    = 'Mínimo 2 caracteres'
    if (!form.email   || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))  errs.email   = 'Email inválido'
    if (!form.message || form.message.length < 10)                         errs.message = 'Mínimo 10 caracteres'
    if (form.message.length > MAX.message)                                 errs.message = 'Máximo 2000 caracteres'
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
      const res = await fetch(FORMSPREE_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify({
          ...form,
          _subject: t('contact.email_subject', { name: sanitize(form.name).slice(0, 100) }),
        }),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) { setForm({ name: '', email: '', business: '', message: '' }); setErrors({}) }
    } catch { setStatus('error') }
  }

  return (
    <Section id="contact" ariaLabel={t('contact.aria')} variant="dark">

      {/* ── atmosphere ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(139,92,246,0.3),transparent)' }} />
        <div className="absolute bottom-0 inset-x-0 h-px"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(139,92,246,0.15),transparent)' }} />
        <div className="absolute -left-48 top-1/4 h-[560px] w-[560px] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle,rgba(109,40,217,0.1) 0%,transparent 70%)' }} />
        <div className="absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle,rgba(6,182,212,0.06) 0%,transparent 70%)' }} />
        <div className="absolute inset-0"
          style={{
            opacity: 0.03,
            backgroundImage: 'radial-gradient(circle,rgba(139,92,246,1) 1px,transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 90% 70% at 50% 50%,black 20%,transparent 100%)',
          }} />
      </div>

      {/* ── content ── */}
      <div className="relative z-10 mx-auto w-full max-w-[560px] px-5 sm:px-0">

        {/* ══ HEADER ══ */}
        <header className="mb-12 text-center">

          {/* badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full px-3.5 py-[7px]"
            style={{
              border: '1px solid rgba(139,92,246,0.22)',
              background: 'rgba(139,92,246,0.07)',
            }}>
            <span className="contact-pulse h-[7px] w-[7px] rounded-full bg-violet-400 flex-shrink-0" />
            <span className="font-mono text-[9.5px] uppercase tracking-[2.5px] text-violet-400">
              {t('contact.badge')}
            </span>
          </div>

          {/* ── HEADLINE — FIX: title_1 envuelto en <span> con clases light/dark ── */}
          <h2
            className="font-head font-extrabold tracking-tight"
            style={{ fontSize: 'clamp(26px, 4.5vw, 44px)', lineHeight: 1.08 }}
          >
            {/* title_1: negro en light, blanco en dark */}
            <span className="text-zinc-900 dark:text-zinc-100">
              {t('contact.title_1')}
            </span>{' '}
            {/* title_2: siempre degradado violeta→cyan */}
            <span style={{
              background: 'linear-gradient(130deg,#c4b5fd 0%,#67e8f9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {t('contact.title_2')}
            </span>
          </h2>

          {/* subtitle */}
          <p className="font-body mt-4 text-[13.5px] leading-[1.65] text-zinc-500 max-w-sm mx-auto">
            {t('contact.subtitle')}
          </p>

          {/* response-time indicator */}
          <div className="mt-6 inline-flex items-center gap-2">
            <span className="h-px w-8 rounded-full bg-violet-800" />
            <span className="font-mono text-[10px] uppercase tracking-[2px] text-zinc-600">
              {t('contact.guarantee_badge') ?? 'Respondemos en máx. 24 h hábiles'}
            </span>
            <span className="h-px w-8 rounded-full bg-violet-800" />
          </div>

        </header>

        {/* ══ FORM CARD ══ */}
        <div
          className="relative w-full overflow-hidden rounded-2xl"
          style={{
            background: 'rgba(255,255,255,0.028)',
            border: '1px solid rgba(255,255,255,0.07)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          <div aria-hidden
            className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full blur-[60px]"
            style={{ background: 'rgba(109,40,217,0.15)' }} />

          <div className="relative px-8 py-9 sm:px-10 sm:py-10">

            {/* ── SUCCESS ── */}
            {status === 'success' && (
              <div
                className="flex flex-col items-center py-12 text-center"
                style={{ animation: 'cf-fade-up 0.4s ease both' }}
              >
                <div
                  className="mb-7 flex h-[72px] w-[72px] items-center justify-center rounded-full text-violet-300"
                  style={{
                    border: '1px solid rgba(139,92,246,0.35)',
                    background: 'rgba(139,92,246,0.1)',
                    boxShadow: '0 0 40px rgba(139,92,246,0.22)',
                    animation: 'cf-scale-in 0.4s cubic-bezier(.34,1.56,.64,1) both',
                  }}
                >
                  <IconCheck />
                </div>
                <h3 className="font-head font-bold text-[20px] text-zinc-100">
                  {t('contact.success_title')}
                </h3>
                <p className="font-body mt-3 text-[13px] leading-relaxed text-zinc-500 max-w-[260px]">
                  {t('contact.success_desc')}
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 font-body text-[12.5px] text-zinc-500 rounded-lg px-5 py-2.5 cursor-pointer transition-all duration-200 hover:text-zinc-200 hover:bg-white/[0.06]"
                  style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'transparent' }}
                >
                  {t('contact.success_btn')}
                </button>
              </div>
            )}

            {/* ── FORM ── */}
            {status !== 'success' && (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-4"
                style={{ animation: 'cf-fade-up 0.35s ease both' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FloatingField
                    label={t('contact.field_name')}
                    name="name" value={form.name}
                    onChange={handleChange}
                    placeholder={t('contact.field_name_placeholder')}
                    maxLength={MAX.name} required error={errors.name}
                  />
                  <FloatingField
                    label={t('contact.field_email')}
                    name="email" type="email" value={form.email}
                    onChange={handleChange}
                    placeholder={t('contact.field_email_placeholder')}
                    maxLength={MAX.email} required error={errors.email}
                  />
                </div>

                <FloatingField
                  label={t('contact.field_business')}
                  name="business" value={form.business}
                  onChange={handleChange}
                  placeholder={t('contact.field_business_placeholder')}
                  maxLength={MAX.business} error={errors.business}
                />

                <div>
                  <FloatingField
                    label={t('contact.field_message')}
                    name="message" value={form.message}
                    onChange={handleChange}
                    placeholder={t('contact.field_message_placeholder')}
                    maxLength={MAX.message} required multiline error={errors.message}
                  />
                  {form.message.length > 0 && (
                    <p
                      className="mt-1.5 text-right font-mono tabular-nums"
                      style={{
                        fontSize: '9.5px',
                        color: form.message.length > 1800 ? '#f87171' : 'rgba(82,82,91,0.6)',
                      }}
                    >
                      {form.message.length} / {MAX.message}
                    </p>
                  )}
                </div>

                {status === 'error' && (
                  <div
                    className="flex items-start gap-2.5 rounded-xl px-4 py-3"
                    style={{
                      background: 'rgba(239,68,68,0.07)',
                      border: '1px solid rgba(239,68,68,0.22)',
                    }}
                  >
                    <span className="mt-px flex-shrink-0 text-red-400"><IconWarn /></span>
                    <p className="font-body text-[12px] leading-relaxed text-red-400">
                      {t('contact.error_msg')}{' '}
                      <strong className="font-semibold text-red-300">holabugai@gmail.com</strong>
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="contact-btn group relative mt-2 w-full overflow-hidden rounded-xl py-[15px] font-body font-semibold text-[14px] text-white"
                  style={{
                    border: 'none',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    background: 'linear-gradient(135deg, #6d28d9 0%, #7c3aed 60%, #4338ca 100%)',
                    boxShadow: status === 'sending'
                      ? 'none'
                      : '0 0 32px rgba(109,40,217,0.35), 0 4px 16px rgba(0,0,0,0.3)',
                    opacity: status === 'sending' ? 0.6 : 1,
                    transition: 'transform 200ms ease, box-shadow 200ms ease, opacity 200ms ease',
                  }}
                  onMouseEnter={e => {
                    if (status === 'sending') return
                    e.currentTarget.style.transform = 'translateY(-1px)'
                    e.currentTarget.style.boxShadow = '0 0 44px rgba(109,40,217,0.45), 0 6px 20px rgba(0,0,0,0.35)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'none'
                    e.currentTarget.style.boxShadow = status === 'sending'
                      ? 'none'
                      : '0 0 32px rgba(109,40,217,0.35), 0 4px 16px rgba(0,0,0,0.3)'
                  }}
                  onMouseDown={e => { e.currentTarget.style.transform = 'translateY(0px)' }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-700 group-hover:translate-x-full"
                    style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)' }}
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute top-0 left-10 right-10 h-px"
                    style={{ background: 'rgba(255,255,255,0.18)', borderRadius: '0 0 4px 4px' }}
                  />
                  <span className="relative flex items-center justify-center gap-2">
                    {status === 'sending' ? (
                      <><IconSpinner /><span>{t('contact.btn_sending')}</span></>
                    ) : (
                      <>
                        <span>{t('contact.btn_idle')}</span>
                        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-[3px]">
                          <IconArrow />
                        </span>
                      </>
                    )}
                  </span>
                </button>

                <p className="text-center font-mono text-[9.5px] uppercase tracking-[2px] text-zinc-700">
                  {t('contact.footer_note')}
                </p>

              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cf-fade-up  { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        @keyframes cf-scale-in { from{opacity:0;transform:scale(0.75)}     to{opacity:1;transform:scale(1)}    }
        @keyframes cf-pulse    { 0%,100%{opacity:1} 50%{opacity:0.35} }
        @keyframes cf-spin     { to{transform:rotate(360deg)} }
        .contact-pulse { animation: cf-pulse 2.2s ease-in-out infinite; }
        .contact-spin  { animation: cf-spin 0.8s linear infinite; }
      `}</style>
    </Section>
  )
} 