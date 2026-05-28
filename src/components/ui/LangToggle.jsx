import { useLanguage } from '../../context/LanguageContext'

export default function LangToggle({ className = '' }) {
  const { lang, toggleLang, t } = useLanguage()

  return (
    <button
      onClick={toggleLang}
      aria-label={t('lang.aria')}
      className={`
        w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0
        bg-violet-100 dark:bg-zinc-800
        border border-violet-200 dark:border-violet-600/25
        text-zinc-700 dark:text-zinc-300
        font-mono text-[11px] font-bold
        hover:scale-105 transition-all duration-200 cursor-pointer
        ${className}
      `}
    >
      {t('lang.switch')}
    </button>
  )
}
