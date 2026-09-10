  import './Loading.css'

export type LoadingSize = 'sm' | 'md' | 'lg'

export interface LoadingProps {
  size?: LoadingSize
  label?: string
  className?: string
}

export function Loading({
  size = 'md',
  label = 'Načítání…',
  className = '',
}: LoadingProps) {
  const classes = [
    'gw-loading',
    `gw-loading--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={classes}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <span className="gw-loading__spinner" aria-hidden="true" />
      <span className="gw-loading__label">{label}</span>
    </div>
  )
}