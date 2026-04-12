/**
 * src/context/ThemeContext.jsx
 * ─────────────────────────────
 * Provee el estado del tema (claro/oscuro) y la función toggle a toda la app.
 * - Persiste la preferencia en localStorage.
 * - Aplica/elimina la clase 'dark' en <html> para activar las variantes dark: de Tailwind.
 */

import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext({ theme: 'dark', toggle: () => {} })

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('bugai-theme') || 'dark' }
    catch { return 'dark' }
  })

  // Sincroniza la clase 'dark' en <html> con el estado del tema
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try { localStorage.setItem('bugai-theme', theme) }
    catch { /* localStorage no disponible */ }
  }, [theme])

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Hook de acceso rápido
export const useTheme = () => useContext(ThemeContext)