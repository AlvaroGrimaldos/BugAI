/**
 * src/components/ui/LogoSVG.jsx
 * ────────────────────────────────
 * Logo oficial de BugAI: "B" estilizada en gradiente violeta/púrpura
 * con burbuja de chat integrada y estrella de 4 puntas en cian.
 * Prop: size (número) — tamaño en píxeles (ancho = alto).
 *
 * El logo anterior (hexágono con red neuronal) está OBSOLETO.
 */

export default function LogoSVG({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="BugAI logo"
    >
      <defs>
        <linearGradient id="logo-b-grad" x1="4" y1="4" x2="28" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#5B21B6" />
          <stop offset="100%" stopColor="#3B0F8C" />
        </linearGradient>
        <linearGradient id="logo-bubble-grad" x1="22" y1="22" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#0891B2" />
        </linearGradient>
      </defs>

      {/* Burbuja de chat integrada */}
      <path
        d="M22 22 C22 20.9 22.9 20 24 20 L32 20 C33.1 20 34 20.9 34 22 L34 28 C34 29.1 33.1 30 32 30 L26 30 L22 34 L22 30 L22 22Z"
        fill="url(#logo-bubble-grad)"
        opacity="0.9"
      />

      {/* Letra "B" estilizada */}
      <path
        d="M8 6 L20 6 C24.4 6 28 9.6 28 14 C28 17.2 26.1 19.9 23.5 21.2 C26.8 22.5 29 25.6 29 29.2 C29 33.6 25.4 37 21 37 L8 37 Z"
        fill="url(#logo-b-grad)"
      />

      {/* Espacios internos de la B (cortes) */}
      <rect x="12" y="10" width="10" height="4" rx="1" fill="#09090B" />
      <rect x="12" y="17" width="11" height="4" rx="1" fill="#09090B" />

      {/* Estrella de 4 puntas en cian */}
      <path
        d="M30 14 L30.8 18.2 L35 19 L30.8 19.8 L30 24 L29.2 19.8 L25 19 L29.2 18.2 Z"
        fill="#06B6D4"
      />
    </svg>
  )
}
