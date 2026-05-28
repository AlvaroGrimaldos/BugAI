export default function Card({ className = '', hover = true, children }) {
  return (
    <div
      className={`
        bg-white dark:bg-dark-card
        border border-black/5 dark:border-white/5
        rounded-2xl p-7
        ${hover ? 'transition-all duration-200 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
