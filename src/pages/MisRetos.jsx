import { Shoe, Apple, Drop, Lotus, Arrow, LeafBranch } from '../components/Icons'
import { ProgressRing, ProgressBar, CheckCircle, ImagePlaceholder } from '../components/Progress'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco'

const retoIcons = { correr: Shoe, ensalada: Apple, batido: Drop, flexiones: Lotus }

export default function MisRetos({ retos, onToggle, accepted, onAccept }) {
  const done = retos.filter((r) => r.done).length
  const percent = Math.round((done / retos.length) * 100)

  return (
    <main className="page">
      {/* RETO DEL DÍA */}
      <section className="hero hero--reverse">
        <LeafBranch className="deco deco--left deco--retos" />
        <ImagePlaceholder className="reto__img" />
        <div className="reto__text">
          <p className="eyebrow">Reto saludable del dia</p>
          <h1 className="reto__title">Empieza con pequeños cambios</h1>
          <p className="body">{lorem}</p>
          <button className={`btn btn--lg ${accepted ? 'btn--done' : ''}`} onClick={onAccept}>
            {accepted ? 'Reto aceptado ✓' : <>Aceptar reto <Arrow /></>}
          </button>
        </div>
      </section>

      {/* MI RETO DIARIO */}
      <section className="section section--last">
        <h2 className="section__title section__title--lg">Mi reto diario</h2>
        <p className="section__subtitle">Activate con tu reto diario</p>

        <div className="retos__progress">
          <ProgressRing percent={percent} label="Progreso del reto" />
          <ProgressBar done={done} total={retos.length} noun="retos" />
        </div>

        <div className="retos">
          <LeafBranch className="deco deco--bottom-right" flip />
          {retos.map((r) => {
            const Icon = retoIcons[r.id]
            return (
              <div key={r.id} className="reto">
                <div className="reto__icon">
                  <Icon size={r.id === 'batido' ? 120 : r.id === 'ensalada' ? 125 : 135} />
                </div>
                <span className="reto__label">{r.label}</span>
                <CheckCircle checked={r.done} onToggle={() => onToggle(r.id)} label={r.label} />
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
