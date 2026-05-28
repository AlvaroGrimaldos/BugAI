import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import translations from '../constants/translations'

const LanguageContext = createContext({ lang: 'es', toggleLang: () => {}, t: (k) => k })

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('bugai-lang') || 'es' }
    catch { return 'es' }
  })

  useEffect(() => {
    try { localStorage.setItem('bugai-lang', lang) }
    catch { /* localStorage no disponible */ }
  }, [lang])

  const toggleLang = useCallback(() => {
    setLang(l => (l === 'es' ? 'en' : 'es'))
  }, [])

  const t = useCallback((key, params = {}) => {
    let text = translations[key]?.[lang]
    if (!text) return key
    for (const [k, v] of Object.entries(params)) {
      text = text.replace(`{${k}}`, v)
    }
    return text
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
