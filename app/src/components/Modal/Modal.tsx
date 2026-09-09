  import type { HTMLAttributes, ReactNode } from 'react'
import './Modal.css'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean
  title?: string
  description?: string
  children: ReactNode
  footer?: ReactNode
  onClose?: () => void
  closeLabel?: string
  closeOnBackdrop?: boolean
}

export function Modal({
  open,
  title,
  description,
  children,
  footer,
  onClose,
  closeLabel = 'Zavřít',
  closeOnBackdrop = true,
  className = '',
  ...props
}: ModalProps) {
  if (!open) return null

  const classes = ['gw-modal', className]
    .filter(Boolean)
    .join(' ')

  const handleBackdropClick = () => {
    if (closeOnBackdrop) {
      onClose?.()
    }
  }

  return (
    <div
      className={classes}
      role="presentation"
      {...props}
    >
      <button
        type="button"
        className="gw-modal__backdrop"
        aria-label={closeLabel}
        onClick={handleBackdropClick}
      />

      <section
        className="gw-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'gw-modal-title' : undefined}
        aria-describedby={
          description ? 'gw-modal-description' : undefined
        }
      >
        {(title || onClose) && (
          <header className="gw-modal__header">
            <div className="gw-modal__heading">
              {title && (
                <h2
                  id="gw-modal-title"
                  className="gw-modal__title"
                >
                  {title}
                </h2>
              )}

              {description && (
                <p
                  id="gw-modal-description"
                  className="gw-modal__description"
                >
                  {description}
                </p>
              )}
            </div>

            {onClose && (
              <button
                type="button"
                className="gw-modal__close"
                aria-label={closeLabel}
                onClick={onClose}
              >
                ×
              </button>
            )}
          </header>
        )}

        <div className="gw-modal__content">
          {children}
        </div>

        {footer && (
          <footer className="gw-modal__footer">
            {footer}
          </footer>
        )}
      </section>
    </div>
  )
}