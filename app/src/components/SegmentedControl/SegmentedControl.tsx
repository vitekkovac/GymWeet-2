   import type { HTMLAttributes } from 'react'
import './SegmentedControl.css'

export interface SegmentedControlOption {
  id: string
  label: string
  disabled?: boolean
}

export interface SegmentedControlProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: SegmentedControlOption[]
  value: string
  onChange: (id: string) => void
  label: string
}

export function SegmentedControl({
  options,
  value,
  onChange,
  label,
  className = '',
  ...props
}: SegmentedControlProps) {
  const classes = ['gw-segmented-control', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={classes}
      role="group"
      aria-label={label}
      {...props}
    >
      {options.map((option) => {
        const isActive = option.id === value

        return (
          <button
            key={option.id}
            type="button"
            className={[
              'gw-segmented-control__option',
              isActive && 'gw-segmented-control__option--active',
            ]
              .filter(Boolean)
              .join(' ')}
            aria-pressed={isActive}
            disabled={option.disabled}
            onClick={() => onChange(option.id)}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}