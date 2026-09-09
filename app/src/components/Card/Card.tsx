   import type { HTMLAttributes, ReactNode } from 'react'
import './Card.css'

export type CardVariant =
  | 'standard'
  | 'interactive'
  | 'highlight'
  | 'status'
  | 'workout'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: CardVariant
  selected?: boolean
}

export function Card({
  children,
  variant = 'standard',
  selected = false,
  className = '',
  ...props
}: CardProps) {
  const classes = [
    'gw-card',
    `gw-card--${variant}`,
    selected ? 'gw-card--selected' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}