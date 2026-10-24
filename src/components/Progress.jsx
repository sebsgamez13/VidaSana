export function ProgressRing({ percent, label, size = 210 }) {
  const strokeWidth = 22
  const r = (size - strokeWidth) / 2
  const c = 2 * Math.PI * r
  const offset = c - (percent / 100) * c

  return (
    <div className="ring">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={`${percent}%`}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--mint)" strokeWidth={strokeWidth} />
        <circle
          className="ring__bar"
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--green)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" className="ring__text">
          {percent}%
        </text>
      </svg>
      <span className="ring__label">{label}</span>
    </div>
  )
}

export function ProgressBar({ done, total, noun }) {
  const pct = total ? (done / total) * 100 : 0
  return (
    <div className="bar">
      <p className="bar__text">
        {done} de {total} {noun} completados
      </p>
      <div className="bar__track">
        <div className="bar__fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

export function CheckCircle({ checked, onToggle, label }) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={label}
      className={`check ${checked ? 'check--on' : ''}`}
      onClick={onToggle}
    >
      <svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">
        <path d="M7 13l3 4 7-10" fill="none" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

export function ImagePlaceholder({ className = '' }) {
  return (
    <div className={`placeholder ${className}`}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" aria-hidden="true">
        <line x1="0" y1="0" x2="100" y2="100" stroke="#fff" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="#fff" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  )
}
