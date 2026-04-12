/** @type {import('tailwindcss').Config} */
module.exports = {
  // Activa el modo oscuro mediante la clase 'dark' en el elemento <html>
  darkMode: 'class',

  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      // ── Colores de marca BugAI ──────────────────────────────────────────
      colors: {
        brand: {
          violet:         '#5B21B6',
          'violet-mid':   '#7C3AED',
          'violet-light': '#A78BFA',
          'violet-deep':  '#3B0F8C',
          cyan:           '#06B6D4',
          'cyan-dark':    '#0891B2',
        },
        // Superficies del tema oscuro
        dark: {
          bg:       '#09090B',
          card:     '#111113',
          elevated: '#18181B',
        },
      },

      // ── Tipografías ─────────────────────────────────────────────────────
      fontFamily: {
        head: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },

      // ── Keyframes personalizados ─────────────────────────────────────────
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        pulseRing: {
          '0%':   { transform: 'scale(1)',   opacity: '0.6' },
          '100%': { transform: 'scale(1.9)', opacity: '0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        gridMove: {
          from: { backgroundPosition: '0 0' },
          to:   { backgroundPosition: '40px 40px' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 16px rgba(6,182,212,0.35)' },
          '50%':      { boxShadow: '0 0 36px rgba(6,182,212,0.8)' },
        },
        themePop: {
          '0%':   { transform: 'scale(0.7) rotate(-25deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        },
      },

      // ── Clases de animación ──────────────────────────────────────────────
      animation: {
        float:               'float 4s ease-in-out infinite',
        'pulse-ring':        'pulseRing 3s ease-out infinite',
        'pulse-ring-delay':  'pulseRing 3s ease-out 1s infinite',
        blink:               'blink 1.2s ease infinite',
        'blink-1':           'blink 1.2s ease 0.2s infinite',
        'blink-2':           'blink 1.2s ease 0.4s infinite',
        'fade-up':           'fadeUp 0.7s ease forwards',
        'grid-move':         'gridMove 10s linear infinite',
        'glow-pulse':        'glowPulse 2s ease infinite',
        'theme-pop':         'themePop 0.3s ease',
      },
    },
  },

  plugins: [],
}