   import './Progress.css'

type ProgressProps = {
  value: number
  max?: number
  label?: string
  showValue?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Progress({
  value,
  max = 100,
  label,
  showValue = false,
  size = 'md',
  className = '',
}: ProgressProps) {
  const safeMax = max > 0 ? max : 100
  const safeValue = Math.min(Math.max(value, 0), safeMax)
  const percentage = Math.round((safeValue / safeMax) * 100)

  return (
    <div className={`gw-progress ${className}`}>
      {(label || showValue) && (
        <div className="gw-progress__header">
          {label && (
            <span className="gw-progress__label">
              {label}
            </span>
          )}

          {showValue && (
            <span className="gw-progress__value">
              {percentage}%
            </span>
          )}
        </div>
      )}

      <div
        className={`gw-progress__track gw-progress__track--${size}`}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={safeMax}
        aria-valuenow={safeValue}
        aria-label={label ?? 'Progress'}
      >
        <div
          className="gw-progress__fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}