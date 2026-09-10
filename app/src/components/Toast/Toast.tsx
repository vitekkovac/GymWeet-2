   import type { HTMLAttributes, ReactNode } from 'react'
import './Toast.css'

export type ToastVariant = 'success' | 'warning' | 'error' | 'info'

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  variant?: ToastVariant
  title?: string
  children: ReactNode
  onClose?: () => void
}

const icons: Record<ToastVariant, string> = {
  success: '✓',
  warning: '!',
  error: '×',
  info: 'i',
}

export function Toast({
  variant = 'info',
  title,
  children,
  onClose,
  className = '',
  ...props
}: ToastProps) {
  const classes = [
    'gw-toast',
    `gw-toast--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      {...props}
      className={classes}
      role={variant === 'error' ? 'alert' : 'status'}
      aria-live={variant === 'error' ? 'assertive' : 'polite'}
    >
      <span className="gw-toast__icon" aria-hidden="true">
        {icons[variant]}
      </span>

      <div className="gw-toast__content">
        {title && <strong className="gw-toast__title">{title}</strong>}
        <div className="gw-toast__message">{children}</div>
      </div>

      {onClose && (
        <button
          type="button"
          className="gw-toast__close"
          onClick={onClose}
          aria-label="Zavřít oznámení"
        >
          ×
        </button>
      )}
    </div>
  )
}