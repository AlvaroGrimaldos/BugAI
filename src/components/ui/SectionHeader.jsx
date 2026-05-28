export default function SectionHeader({ badge, title, subtitle, badgeColor = 'cyan' }) {
  const color = badgeColor === 'cyan' ? 'text-brand-cyan' : 'text-brand-violet-light'

  return (
    <div className="text-center mb-14 lg:mb-16">
      <span className={`font-mono text-[11px] ${color} tracking-[2px] uppercase`}>
        {badge}
      </span>
      <h2 className="font-head font-extrabold text-[clamp(26px,4vw,46px)] text-zinc-950 dark:text-zinc-100 mt-3 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-[15px] text-zinc-500 dark:text-zinc-400 mt-3 max-w-md mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
