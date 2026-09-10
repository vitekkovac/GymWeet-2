   import type { HTMLAttributes, ReactNode } from 'react'
import './SectionHeader.css'

export interface SectionHeaderProps
  extends HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  action?: ReactNode
}

export function SectionHeader({
  title,
  subtitle,
  action,
  className = '',
  ...props
}: SectionHeaderProps) {
  const classes = ['gw-section-header', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      <div className="gw-section-header__content">
        <h2 className="gw-section-header__title">{title}</h2>

        {subtitle && (
          <p className="gw-section-header__subtitle">
            {subtitle}
          </p>
        )}
      </div>

      {action && (
        <div className="gw-section-header__action">
          {action}
        </div>
      )}
    </div>
  )
}