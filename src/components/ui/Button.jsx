export default function Button({ variant = 'primary', href, className = '', children, ...props }) {
  const base = 'font-body font-semibold no-underline inline-flex items-center transition-all duration-200'

  const styles = {
    primary:
      'bg-gradient-to-r from-brand-violet to-brand-cyan-dark text-white rounded-lg hover:shadow-lg hover:shadow-brand-violet/25',
    hero:
      'bg-gradient-to-br from-brand-violet to-brand-violet-mid text-white rounded-xl shadow-[0_0_28px_rgba(91,33,182,0.45)] hover:shadow-[0_0_48px_rgba(91,33,182,0.65)] hover:-translate-y-0.5',
    secondary:
      'bg-white/10 dark:bg-white/5 text-zinc-800 dark:text-zinc-200 rounded-xl border border-violet-200 dark:border-brand-violet/25 hover:border-brand-violet-mid backdrop-blur-sm',
    whatsapp:
      'bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/35 hover:-translate-y-0.5',
    ghost:
      'bg-violet-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 rounded-lg border border-black/5 dark:border-white/5 hover:border-brand-violet/40',
    submit:
      'w-full bg-gradient-to-r from-brand-violet to-brand-cyan-dark text-white py-3.5 rounded-xl border-0 shadow-[0_0_28px_rgba(91,33,182,0.3)] hover:-translate-y-0.5 hover:shadow-[0_0_44px_rgba(91,33,182,0.45)]',
  }

  const cls = `${base} ${styles[variant] || styles.primary} ${className}`

  if (href) {
    return <a href={href} className={cls} {...props}>{children}</a>
  }

  return <button className={`${cls} cursor-pointer`} {...props}>{children}</button>
}
