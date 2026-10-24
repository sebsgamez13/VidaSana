import { LeafLogo } from './Icons'

const links = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'retos', label: 'Mis retos' },
]

export default function Navbar({ view, onChange }) {
  return (
    <header className="navbar">
      <button className="brand" onClick={() => onChange('inicio')}>
        <LeafLogo />
        <span>VidaSana</span>
      </button>

      <nav className="nav">
        {links.map((l) => (
          <button
            key={l.id}
            className={`nav__link ${view === l.id ? 'nav__link--active' : ''}`}
            onClick={() => onChange(l.id)}
            aria-current={view === l.id ? 'page' : undefined}
          >
            {l.label}
          </button>
        ))}
      </nav>

      <div className="avatar" aria-label="Perfil de usuario" />
    </header>
  )
}
