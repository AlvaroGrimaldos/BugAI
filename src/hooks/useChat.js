/**
 * src/hooks/useChat.js
 * ─────────────────────
 * Hook que encapsula toda la lógica del chat con la API de Claude.
 * Separa la lógica de red del componente KaiChat para mantenerlo limpio.
 */

import { useState, useRef, useEffect } from 'react'
import { KAI_SYSTEM_PROMPT } from '../constants/data'

const CLAUDE_API_URL = 'https://api.anthropic.com/v1/messages'
const INITIAL_MESSAGE = {
  role:    'assistant',
  content: '¡Hola! Soy KAI, el asistente de BugAI. ¿Qué proceso de tu negocio te gustaría automatizar?',
}

export function useChat() {
  const [messages, setMessages]   = useState([INITIAL_MESSAGE])
  const [input,    setInput]      = useState('')
  const [loading,  setLoading]    = useState(false)
  const endRef = useRef(null)

  // Auto-scroll al último mensaje
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return

    const newMessages = [...messages, { role: 'user', content: text }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const response = await fetch(CLAUDE_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model:      'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system:     KAI_SYSTEM_PROMPT,
          messages:   newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      })

      const data  = await response.json()
      const reply = data.content?.find(b => b.type === 'text')?.text
        || 'Hubo un problema. Escríbenos a hola@bugai.io'

      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Problema técnico. Contáctanos en hola@bugai.io o por WhatsApp.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return { messages, input, setInput, loading, sendMessage, handleKeyDown, endRef }
}