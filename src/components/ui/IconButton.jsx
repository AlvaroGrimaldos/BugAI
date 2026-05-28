export default function IconButton({ onClick, ariaLabel, className = '', children }) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`
        w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0
        bg-violet-100 dark:bg-zinc-800
        border border-violet-200 dark:border-violet-600/25
        text-zinc-700 dark:text-zinc-300
        transition-all duration-200 cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  )
}
