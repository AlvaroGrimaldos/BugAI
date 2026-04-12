/**
 * src/components/ui/LogoSVG.jsx
 * ────────────────────────────────
 * Logo SVG de BugAI: hexágono violeta con red neuronal interna y acento cian.
 * Prop: size (número) — tamaño en píxeles (ancho = alto).
 */

export default function LogoSVG({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="BugAI logo"
    >
      <defs>
        <linearGradient id="logo-grad" x1="4" y1="2" x2="32" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#5B21B6" />
          <stop offset="100%" stopColor="#3B0F8C" />
        </linearGradient>
      </defs>

      {/* Hexágono base */}
      <polygon
        points="18,2 32,10 32,26 18,34 4,26 4,10"
        fill="url(#logo-grad)"
        stroke="rgba(6,182,212,0.6)"
        strokeWidth="1"
      />

      {/* Nodo central */}
      <circle cx="18" cy="18" r="2.5" fill="#06B6D4" />

      {/* Nodos periféricos */}
      <circle cx="11" cy="13" r="1.5" fill="#A78BFA" />
      <circle cx="25" cy="13" r="1.5" fill="#A78BFA" />
      <circle cx="11" cy="23" r="1.5" fill="#A78BFA" />
      <circle cx="25" cy="23" r="1.5" fill="#A78BFA" />

      {/* Conexiones radiales (centro → nodos) */}
      <line x1="18" y1="18" x2="11" y2="13" stroke="rgba(6,182,212,0.5)" strokeWidth="0.8" />
      <line x1="18" y1="18" x2="25" y2="13" stroke="rgba(6,182,212,0.5)" strokeWidth="0.8" />
      <line x1="18" y1="18" x2="11" y2="23" stroke="rgba(6,182,212,0.5)" strokeWidth="0.8" />
      <line x1="18" y1="18" x2="25" y2="23" stroke="rgba(6,182,212,0.5)" strokeWidth="0.8" />

      {/* Conexiones laterales */}
      <line x1="11" y1="13" x2="25" y2="13" stroke="rgba(167,139,250,0.3)" strokeWidth="0.5" />
      <line x1="11" y1="23" x2="25" y2="23" stroke="rgba(167,139,250,0.3)" strokeWidth="0.5" />
    </svg>
  )
}