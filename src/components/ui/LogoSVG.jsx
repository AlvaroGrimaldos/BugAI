/**
 * src/components/ui/LogoSVG.jsx
 * ────────────────────────────────
 * Logo oficial de BugAI: imagen PNG personalizada
 * Prop: size (número) — tamaño en píxeles (ancho = alto).
 */

import logoImage from '../../assets/icon-png-zoom.png'

export default function LogoSVG({ size = 40 }) {
  return (
    <img
      src={logoImage}
      alt="BugAI logo"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        objectFit: 'contain'
      }}
    />
  )
}
