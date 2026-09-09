  import type { HTMLAttributes, ReactNode } from 'react'
import './Chip.css'

export type ChipVariant = 'neutral' | 'selected' | 'status'

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  variant?: ChipVariant
  removable?: boolean
  onRemove?: () => void
}

export function Chip({
  children,
  variant = 'neutral',
  removable = false,
  onRemove,
  className = '',
  ...props
}: ChipProps) {
  const classes = [
    'gw-chip',
    `gw-chip--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes} {...props}>
      <span className="gw-chip__label">{children}</span>

      {removable && (
        <button
          type="button"
          className="gw-chip__remove"
          onClick={onRemove}
          aria-label="Odebrat"
        >
          ×
        </button>
      )}
    </span>
  )
}