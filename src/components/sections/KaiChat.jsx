import { useState, useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import kaiOpen from '../../assets/KAI_chat.png'
import kaiClosed from '../../assets/KAI_chat_ojos_cerrados.png'

const KAI_TAGS_KEYS = ['kai.tag_1', 'kai.tag_2', 'kai.tag_3']

export default function KaiChat() {
  const { t } = useLanguage()
  const [blinking, setBlinking] = useState(false)

  useEffect(() => {
    const blink = () => {
      setBlinking(true)
      setTimeout(() => setBlinking(false), 150)
    }
    blink()
    const interval = setInterval(blink, 4000)
    return () => clearInterval(interval)
  }, [])
  return (
    <section
      id="kai"
      aria-label={t('kai.aria')}
      className="hidden lg:block scroll-mt-16 relative py-24 px-6 bg-violet-50 dark:bg-dark-bg overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.35] dark:opacity-[0.08] pointer-events-none" aria-hidden="true" />

      <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-brand-violet/5 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-cyan/5 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <span className="font-mono text-[11px] text-brand-cyan tracking-[2px] uppercase">
            {t('kai.badge')}
          </span>

          <h2 className="font-head font-extrabold text-[clamp(26px,4vw,46px)] text-zinc-950 dark:text-zinc-100 mt-3 tracking-tight">
            {t('kai.title')} <span className="text-gradient">KAI</span>
          </h2>

          <p className="font-body text-[15px] text-zinc-500 dark:text-zinc-400 mt-3 max-w-xl mx-auto">
            {t('kai.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.4fr] gap-12 items-center">

          <div className="flex flex-col items-center gap-6">
            <div className="relative flex items-center justify-center">
              <div className="absolute left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full bg-gradient-to-br from-brand-violet/10 via-transparent to-brand-cyan/10 animate-pulse-ring" />
              <div className="absolute left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full border border-brand-violet/20" />
              <div className="absolute left-1/2 -translate-x-1/2 w-[430px] h-[430px] rounded-full border border-brand-cyan/15 animate-pulse-ring-delay" />

              <div className="relative animate-float kai-glow rounded-2xl translate-x-[15%]">
                <img
                  src={kaiOpen}
                  alt={t('kai.alt')}
                  className={`w-[540px] h-[540px] object-contain drop-shadow-2xl transition-opacity duration-75 ${blinking ? 'opacity-0' : 'opacity-100'}`}
                />
                <img
                  src={kaiClosed}
                  alt=""
                  aria-hidden="true"
                  className={`absolute inset-0 w-[540px] h-[540px] object-contain drop-shadow-2xl transition-opacity duration-75 ${blinking ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-head font-bold text-3xl text-gradient mb-1">
                KAI
              </h3>

              <p className="font-mono text-[10px] text-brand-cyan tracking-widest">
                {t('kai.official')}
              </p>

              <div className="flex flex-wrap gap-2 justify-center mt-4">
                {KAI_TAGS_KEYS.map(key => (
                  <span
                    key={key}
                    className="font-mono text-[11px] text-brand-violet-light bg-brand-violet/10 border border-brand-violet/20 rounded-full px-3 py-1"
                  >
                    {t(key)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-brand-violet/25 shadow-xl bg-white dark:bg-dark-card">
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