   import type { InputHTMLAttributes, ReactNode } from 'react'
import './Toggle.css'

type ToggleProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'children'
> & {
  label: string
  description?: string
  leading?: ReactNode
}

export function Toggle({
  label,
  description,
  leading,
  id,
  disabled,
  className = '',
  ...props
}: ToggleProps) {
  const toggleId = id ?? `gw-toggle-${label.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <label
      className={`gw-toggle ${disabled ? 'gw-toggle--disabled' : ''} ${className}`}
      htmlFor={toggleId}
    >
      {leading && <span className="gw-toggle__leading">{leading}</span>}

      <span className="gw-toggle__content">
        <span className="gw-toggle__label">{label}</span>
        {description && (
          <span className="gw-toggle__description">{description}</span>
        )}
      </span>

      <span className="gw-toggle__control">
        <input
          {...props}
          id={toggleId}
          type="checkbox"
          disabled={disabled}
          className="gw-toggle__input"
        />
        <span className="gw-toggle__track" aria-hidden="true">
          <span className="gw-toggle__thumb" />
        </span>
      </span>
    </label>
  )
}