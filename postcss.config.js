/**
 * postcss.config.js
 * ──────────────────
 * PostCSS es requerido por Tailwind CSS para procesar las directivas
 * @tailwind, @layer y @apply en src/index.css.
 * Autoprefixer añade prefijos de vendor automáticamente para compatibilidad.
 */

export default {
  plugins: {
    tailwindcss:  {},
    autoprefixer: {},
  },
}