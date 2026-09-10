   import type { CSSProperties } from 'react'
import './Skeleton.css'

export type SkeletonVariant = 'text' | 'rectangular' | 'circular'

export interface SkeletonProps {
  variant?: SkeletonVariant
  width?: string | number
  height?: string | number
  className?: string
  ariaLabel?: string
}

export function Skeleton({
  variant = 'text',
  width,
  height,
  className = '',
  ariaLabel = 'Načítání obsahu',
}: SkeletonProps) {
  const classes = [
    'gw-skeleton',
    `gw-skeleton--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const style: CSSProperties = {
    width,
    height,
  }

  return (
    <div
      className={classes}
      style={style}
      role="status"
      aria-label={ariaLabel}
      aria-busy="true"
    />
  )
}