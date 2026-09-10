   import type { HTMLAttributes, ReactNode } from 'react'
import './ListRow.css'

export interface ListRowProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  leading?: ReactNode
  trailing?: ReactNode
  interactive?: boolean
  disabled?: boolean
}

export function ListRow({
  title,
  subtitle,
  leading,
  trailing,
  interactive = false,
  disabled = false,
  className,
  ...props
}: ListRowProps) {
  const classes = [
    'gw-list-row',
    interactive && 'gw-list-row--interactive',
    disabled && 'gw-list-row--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      {...props}
      className={classes}
      aria-disabled={disabled || undefined}
    >
      {leading && (
        <div className="gw-list-row__leading" aria-hidden="true">
          {leading}
        </div>
      )}

      <div className="gw-list-row__content">
        <div className="gw-list-row__title">{title}</div>

        {subtitle && (
          <div className="gw-list-row__subtitle">{subtitle}</div>
        )}
      </div>

      {trailing && (
        <div className="gw-list-row__trailing">
          {trailing}
        </div>
      )}
    </div>
  )
}