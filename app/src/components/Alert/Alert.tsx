   import type { ReactNode } from 'react'
import './Alert.css'

export type AlertVariant = 'success' | 'warning' | 'error' | 'info'

export interface AlertProps {
  variant?: AlertVariant
  title?: string
  children: ReactNode
  action?: ReactNode
  className?: string
}

const alertIcons: Record<AlertVariant, string> = {
  success: '✓',
  warning: '!',
  error: '×',
  info: 'i',
}

export function Alert({
  variant = 'info',
  title,
  children,
  action,
  className = '',
}: AlertProps) {
  const classes = [
    'gw-alert',
    `gw-alert--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={classes}
      role={variant === 'error' ? 'alert' : 'status'}
    >
      <span className="gw-alert__icon" aria-hidden="true">
        {alertIcons[variant]}
      </span>

      <div className="gw-alert__content">
        {title && <strong className="gw-alert__title">{title}</strong>}

        <div className="gw-alert__message">
          {children}
        </div>

        {action && (
          <div className="gw-alert__action">
            {action}
          </div>
        )}
      </div>
    </div>
  )
}