   import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './IconButton.css'

export type IconButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive'
export type IconButtonSize = 'sm' | 'md' | 'lg'

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  label: string
  variant?: IconButtonVariant
  size?: IconButtonSize
}

export function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  className,
  type = 'button',
  disabled,
  ...props
}: IconButtonProps) {
  const classes = [
    'gw-icon-button',
    `gw-icon-button--${variant}`,
    `gw-icon-button--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      {...props}
      type={type}
      className={classes}
      aria-label={label}
      disabled={disabled}
    >
      <span className="gw-icon-button__icon" aria-hidden="true">
        {icon}
      </span>
    </button>
  )
}