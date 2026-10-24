const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 3,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function LeafLogo({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="leafLogoGrad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#4f9a4b" />
          <stop offset="1" stopColor="#9ed39a" />
        </linearGradient>
      </defs>
      <path d="M6 58C4 30 24 8 60 4c0 34-22 54-54 54z" fill="url(#leafLogoGrad)" />
      <path d="M6 58C20 40 34 26 50 14" stroke="#2d6a28" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M22 40l-2-12M30 32l-1-11M38 25l1-9M24 38l12 2M32 30l11 1" stroke="#2d6a28" strokeWidth="1.2" opacity=".55" />
    </svg>
  )
}

export function Apple({ size = 120 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={stroke} aria-hidden="true">
      <path d="M50 30c-6-5-14-7-22-5C16 28 10 40 12 54c2 14 9 28 18 32 6 3 12-1 20-1s14 4 20 1c9-4 16-18 18-32 2-14-4-26-16-29-8-2-16 0-22 5z" />
      <path d="M50 30c-1-7-4-12-8-16" />
      <path d="M52 26c2-10 10-16 22-17-1 11-9 17-22 17z" />
    </svg>
  )
}

export function Runner({ size = 120 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={stroke} aria-hidden="true">
      <circle cx="62" cy="14" r="7" />
      <path d="M40 46l8-15c1-2 3-3 5-3h12c2 0 3 1 4 2l6 10 9-4c3-1 5 3 2 5l-12 7c-2 1-4 0-5-1l-4-7-6 13 9 11c1 1 1 2 1 3v17c0 4-6 4-6 0V79l-11-12-9 13c-1 1-2 2-4 2H22c-4 0-4-6 0-6h14l14-24-1-1-3 0-5 9c-2 3-7 1-5-2z" />
    </svg>
  )
}

export function Brain({ size = 120 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={stroke} aria-hidden="true">
      <path d="M49 14v74" />
      <path d="M49 18c-2-6-8-9-14-8-6 1-10 6-10 12-6 1-10 7-9 13 1 3 2 5 4 6-5 3-7 9-5 15 2 5 6 8 11 8 0 7 6 12 13 12 5 0 9-3 10-8" />
      <path d="M49 18c2-6 8-9 14-8 6 1 10 6 10 12 6 1 10 7 9 13-1 3-2 5-4 6 5 3 7 9 5 15-2 5-6 8-11 8 0 7-6 12-13 12-5 0-9-3-10-8" />
      <path d="M36 42c5-1 9 3 9 8" />
      <path d="M62 42c-5-1-9 3-9 8" />
      <path d="M22 58c3 2 7 2 9 0" />
      <path d="M76 58c-3 2-7 2-9 0" />
    </svg>
  )
}

export function Drop({ size = 100 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={stroke} aria-hidden="true">
      <path d="M50 6C42 22 22 42 22 62c0 16 12 28 28 28s28-12 28-28C78 42 58 22 50 6z" />
    </svg>
  )
}

export function Shoe({ size = 130 }) {
  return (
    <svg width={size} height={size * 0.62} viewBox="0 0 130 80" style={stroke} aria-hidden="true">
      <path d="M8 18v52c0 2 2 4 4 4h110c2 0 4-2 4-4v-8c0-6-4-10-10-11l-28-6c-6-1-12-5-16-10L58 20c-2-3-6-3-8-1-5 5-12 8-20 8H16l-4-9c-1-2-4-2-4 0z" />
      <path d="M8 58h118" />
      <path d="M52 22l8 6M58 16l8 6M66 26l8 6" />
    </svg>
  )
}

export function Lotus({ size = 130 }) {
  return (
    <svg width={size} height={size * 0.8} viewBox="0 0 130 104" style={stroke} aria-hidden="true">
      <path d="M65 8c-12 12-16 28-12 44 3 10 8 18 12 22 4-4 9-12 12-22 4-16 0-32-12-44z" />
      <path d="M65 74c-6-12-18-26-36-32-2 18 8 32 26 34" />
      <path d="M65 74c6-12 18-26 36-32 2 18-8 32-26 34" />
      <path d="M48 40c-10-6-20-8-32-6 2 8 6 14 12 18" />
      <path d="M82 40c10-6 20-8 32-6-2 8-6 14-12 18" />
      <path d="M16 62c14 0 28 6 40 14" />
      <path d="M114 62c-14 0-28 6-40 14" />
      <path d="M6 70c18-4 36 0 50 10" />
      <path d="M124 70c-18-4-36 0-50 10" />
      <path d="M28 88c24 10 50 10 74 0" />
    </svg>
  )
}

export function Arrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

/* Rama decorativa con hojas */
export function LeafBranch({ className = '', flip = false }) {
  return (
    <svg
      className={className}
      width="80"
      height="200"
      viewBox="0 0 80 200"
      aria-hidden="true"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <defs>
        <linearGradient id="lb1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9bd197" />
          <stop offset="1" stopColor="#4c8f48" />
        </linearGradient>
        <linearGradient id="lb2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#89c785" />
          <stop offset="1" stopColor="#3e7d3a" />
        </linearGradient>
      </defs>
      <path d="M4 196C10 160 18 120 22 100c4-22 20-40 34-58" stroke="#3f8a3a" strokeWidth="2" fill="none" />
      <g transform="translate(58 38) rotate(-20)">
        <path d="M0 0C-12-10-12-28 0-40 12-28 12-10 0 0z" fill="url(#lb1)" />
        <path d="M0 0V-38" stroke="#2f6b2a" strokeWidth="1" opacity=".6" />
      </g>
      <g transform="translate(26 96) rotate(-70)">
        <path d="M0 0C-12-10-12-30 0-42 12-30 12-10 0 0z" fill="url(#lb2)" />
        <path d="M0 0V-40" stroke="#2f6b2a" strokeWidth="1" opacity=".6" />
      </g>
      <g transform="translate(28 96) rotate(65)">
        <path d="M0 0C-11-9-11-26 0-36 11-26 11-9 0 0z" fill="url(#lb1)" />
        <path d="M0 0V-34" stroke="#2f6b2a" strokeWidth="1" opacity=".6" />
      </g>
    </svg>
  )
}
