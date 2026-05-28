export default function Section({ id, ariaLabel, variant = 'light', className = '', children }) {
  const base = 'scroll-mt-16 py-24 px-6'
  const bg = variant === 'dark'
    ? 'bg-violet-50 dark:bg-dark-bg'
    : 'bg-white dark:bg-dark-card border-t border-black/5 dark:border-white/5'

  return (
    <section id={id} aria-label={ariaLabel} className={`${base} ${bg} ${className}`}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  )
}
