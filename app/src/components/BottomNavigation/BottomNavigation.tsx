  import type { HTMLAttributes, ReactNode } from 'react'
import './BottomNavigation.css'

export interface BottomNavigationItem {
  id: string
  label: string
  icon: ReactNode
  disabled?: boolean
}

export interface BottomNavigationProps
  extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  items: BottomNavigationItem[]
  activeId: string
  onChange: (id: string) => void
}

export function BottomNavigation({
  items,
  activeId,
  onChange,
  className = '',
  ...props
}: BottomNavigationProps) {
  const classes = ['gw-bottom-navigation', className]
    .filter(Boolean)
    .join(' ')

  return (
    <nav
      className={classes}
      aria-label="Hlavní navigace"
      {...props}
    >
      {items.map((item) => {
        const isActive = item.id === activeId

        return (
          <button
            key={item.id}
            type="button"
            className={[
              'gw-bottom-navigation__item',
              isActive && 'gw-bottom-navigation__item--active',
            ]
              .filter(Boolean)
              .join(' ')}
            aria-current={isActive ? 'page' : undefined}
            disabled={item.disabled}
            onClick={() => onChange(item.id)}
          >
            <span
              className="gw-bottom-navigation__icon"
              aria-hidden="true"
            >
              {item.icon}
            </span>

            <span className="gw-bottom-navigation__label">
              {item.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}