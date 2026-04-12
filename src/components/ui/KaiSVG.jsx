/**
 * src/components/ui/KaiSVG.jsx
 * ──────────────────────────────
 * Mascota KAI: humanoide robótico profesional con armadura violeta oscura,
 * pantalla LED cian y emblema hexagonal en la frente.
 *
 * Prop: size (número) — ancho en px; la altura es size × 1.25.
 * Animación de flotación aplicada con clase Tailwind 'animate-float kai-glow'.
 */

export default function KaiSVG({ size = 260 }) {
  return (
    <svg
      width={size}
      height={size * 1.25}
      viewBox="0 0 320 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-float kai-glow"
      aria-label="KAI — Mascota oficial de BugAI"
    >
      <defs>
        <linearGradient id="kai-body" x1="80" y1="160" x2="240" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#3B0F8C" />
          <stop offset="100%" stopColor="#1E0A4A" />
        </linearGradient>
        <linearGradient id="kai-head" x1="90" y1="40" x2="230" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#5B21B6" />
          <stop offset="100%" stopColor="#3B0F8C" />
        </linearGradient>
        <filter id="kai-glow-f">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Sombra base */}
      <ellipse cx="160" cy="395" rx="80" ry="8" fill="rgba(91,33,182,0.3)" />

      {/* ── PIERNAS ── */}
      <rect x="100" y="320" width="40" height="65" rx="8" fill="url(#kai-body)" stroke="rgba(124,58,237,0.4)" strokeWidth="1" />
      <rect x="180" y="320" width="40" height="65" rx="8" fill="url(#kai-body)" stroke="rgba(124,58,237,0.4)" strokeWidth="1" />
      <rect x="92"  y="375" width="56" height="18" rx="6" fill="#2D1060" />
      <rect x="172" y="375" width="56" height="18" rx="6" fill="#2D1060" />

      {/* ── CUERPO ── */}
      <rect x="75" y="170" width="170" height="160" rx="18" fill="url(#kai-body)" stroke="rgba(124,58,237,0.5)" strokeWidth="1.5" />
      {/* Panel de pecho */}
      <rect x="95" y="192" width="130" height="80" rx="10" fill="rgba(0,0,0,0.4)" stroke="rgba(6,182,212,0.3)" strokeWidth="1" />
      {/* LEDs de estado */}
      <circle cx="117" cy="218" r="6" fill="#06B6D4" opacity="0.9" filter="url(#kai-glow-f)" />
      <circle cx="137" cy="218" r="6" fill="#7C3AED" opacity="0.8" />
      <circle cx="157" cy="218" r="6" fill="#06B6D4" opacity="0.6" />
      {/* Barra de progreso */}
      <rect x="107" y="238" width="106" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="107" y="238" width="70"  height="6" rx="3" fill="#06B6D4" opacity="0.7" />
      {/* Líneas de datos */}
      <rect x="107" y="254" width="50" height="3" rx="1.5" fill="rgba(167,139,250,0.5)" />
      <rect x="107" y="261" width="80" height="3" rx="1.5" fill="rgba(167,139,250,0.3)" />
      {/* Tornillos de esquina */}
      {[[85,180],[235,180],[85,320],[235,320]].map(([cx,cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="#2D1060" stroke="rgba(124,58,237,0.6)" strokeWidth="1" />
      ))}

      {/* ── BRAZOS ── */}
      {/* Izquierdo */}
      <rect x="32" y="175" width="46" height="130" rx="14" fill="url(#kai-body)" stroke="rgba(124,58,237,0.4)" strokeWidth="1" />
      <ellipse cx="55" cy="312" rx="20" ry="14" fill="#2D1060" stroke="rgba(6,182,212,0.5)" strokeWidth="1.5" />
      <circle  cx="55" cy="312" r="5"  fill="#06B6D4" opacity="0.9" filter="url(#kai-glow-f)" />
      {/* Derecho */}
      <rect x="242" y="175" width="46" height="130" rx="14" fill="url(#kai-body)" stroke="rgba(124,58,237,0.4)" strokeWidth="1" />
      <ellipse cx="265" cy="312" rx="20" ry="14" fill="#2D1060" stroke="rgba(6,182,212,0.5)" strokeWidth="1.5" />
      <circle  cx="265" cy="312" r="5"  fill="#06B6D4" opacity="0.9" filter="url(#kai-glow-f)" />

      {/* ── CUELLO ── */}
      <rect x="135" y="148" width="50" height="28" rx="6" fill="#2D1060" stroke="rgba(124,58,237,0.4)" strokeWidth="1" />

      {/* ── CABEZA ── */}
      <rect x="82" y="42" width="156" height="112" rx="22" fill="url(#kai-head)" stroke="rgba(124,58,237,0.6)" strokeWidth="2" />
      {/* Pantalla LED facial */}
      <rect x="100" y="62" width="120" height="72" rx="12" fill="#0A0A1A" stroke="rgba(6,182,212,0.5)" strokeWidth="1.5" />
      {/* Ojo izquierdo */}
      <rect x="114" y="80" width="32" height="20" rx="4" fill="rgba(0,0,0,0.5)" />
      <rect x="116" y="82" width="28" height="16" rx="3" fill="#06B6D4" opacity="0.9" />
      <rect x="126" y="87" width="8"  height="6"  rx="1" fill="white" opacity="0.9" />
      {/* Ojo derecho */}
      <rect x="174" y="80" width="32" height="20" rx="4" fill="rgba(0,0,0,0.5)" />
      <rect x="176" y="82" width="28" height="16" rx="3" fill="#06B6D4" opacity="0.9" />
      <rect x="186" y="87" width="8"  height="6"  rx="1" fill="white" opacity="0.9" />
      {/* Boca / speaker */}
      <rect x="125" y="112" width="70" height="10" rx="4" fill="rgba(0,0,0,0.5)" />
      {[129,143,157,171].map((x, i) => (
        <rect key={i} x={x} y="114" width="10" height="6" rx="2"
          fill="#06B6D4" opacity={[0.6,0.8,0.6,0.4][i]} />
      ))}
      {/* Emblema hexagonal en frente */}
      <polygon points="160,48 167,52 167,60 160,64 153,60 153,52" fill="#5B21B6" stroke="#06B6D4" strokeWidth="1.5" />
      <circle cx="160" cy="56" r="3" fill="#06B6D4" />
      {/* Detalles laterales de cabeza */}
      <rect x="82"  y="75" width="10" height="30" rx="3" fill="rgba(124,58,237,0.4)" />
      <rect x="228" y="75" width="10" height="30" rx="3" fill="rgba(124,58,237,0.4)" />

      {/* ── ANTENAS ── */}
      <line x1="118" y1="42" x2="110" y2="20" stroke="rgba(124,58,237,0.6)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="110" cy="18" r="4" fill="#7C3AED">
        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <line x1="202" y1="42" x2="210" y2="20" stroke="rgba(124,58,237,0.6)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="210" cy="18" r="4" fill="#06B6D4">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}