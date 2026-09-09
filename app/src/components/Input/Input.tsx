   import './Input.css'
import type { InputHTMLAttributes, ReactNode } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  helperText?: string
  error?: string
  leadingIcon?: ReactNode
  trailingContent?: ReactNode
  unit?: string
}

export function Input({
  label,
  helperText,
  error,
  leadingIcon,
  trailingContent,
  unit,
  id,
  disabled,
  readOnly,
  className = '',
  ...props
}: InputProps) {
  const inputId = id ?? `gw-input-${label.toLowerCase().replace(/\s+/g, '-')}`
  const messageId = `${inputId}-message`

  return (
    <div className={`gw-input-field ${className}`}>
      <label className="gw-input-field__label" htmlFor={inputId}>
        {label}
      </label>

      <div
        className={[
          'gw-input-field__control',
          error ? 'gw-input-field__control--error' : '',
          disabled ? 'gw-input-field__control--disabled' : '',
          readOnly ? 'gw-input-field__control--readonly' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {leadingIcon && (
          <span className="gw-input-field__leading" aria-hidden="true">
            {leadingIcon}
          </span>
        )}

        <input
          {...props}
          id={inputId}
          className="gw-input-field__input"
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={Boolean(error)}
          aria-describedby={error || helperText ? messageId : undefined}
        />

        {unit && <span className="gw-input-field__unit">{unit}</span>}

        {trailingContent && (
          <span className="gw-input-field__trailing">{trailingContent}</span>
        )}
      </div>

      {(error || helperText) && (
        <div
          id={messageId}
          className={`gw-input-field__message ${
            error ? 'gw-input-field__message--error' : ''
          }`}
        >
          {error ?? helperText}
        </div>
      )}
    </div>
  )
}