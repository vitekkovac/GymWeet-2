   import type { HTMLAttributes } from 'react'
import './Divider.css'

export interface DividerProps
  extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical'
}

export function Divider({
  orientation = 'horizontal',
  className = '',
  ...props
}: DividerProps) {
  const classes = [
    'gw-divider',
    `gw-divider--${orientation}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <hr
      className={classes}
      aria-orientation={orientation}
      {...props}
    />
  )
}