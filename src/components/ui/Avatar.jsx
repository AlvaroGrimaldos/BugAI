/**
 * src/components/ui/Avatar.jsx
 * ──────────────────────────────
 * Componente de avatar reutilizable.
 * - Si `url` apunta a una imagen real, la muestra como background-image.
 * - Si no hay imagen (o sigue siendo el placeholder 'YOUR_...'), muestra las iniciales.
 *
 * Props:
 *   url       (string) — URL de la imagen (puede ser placeholder)
 *   initials  (string) — Texto fallback (ej: "MG")
 *   size      (number) — Tamaño en píxeles (default: 44)
 *   className (string) — Clases Tailwind adicionales
 */

export default function Avatar({ url, initials, size = 44, className = '' }) {
  const hasImage = url && !url.includes('YOUR_')

  return (
    <div
      className={`rounded-full flex-shrink-0 flex items-center justify-content-center border-2 border-brand-violet/30 ${className}`}
      style={{
        width:           size,
        height:          size,
        backgroundImage: hasImage ? `url('${url}')` : undefined,
        backgroundSize:  'cover',
        backgroundPosition: 'center',
        background:      !hasImage
          ? 'linear-gradient(135deg, #5B21B6, #0891B2)'
          : undefined,
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        fontSize:        size / 3.2,
        fontFamily:      '"Bricolage Grotesque", sans-serif',
        fontWeight:      700,
        color:           'white',
      }}
    >
      {!hasImage && initials}
    </div>
  )
}