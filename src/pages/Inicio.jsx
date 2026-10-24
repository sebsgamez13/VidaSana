import { Apple, Runner, Brain, Drop, Shoe, Lotus, Arrow, LeafBranch } from '../components/Icons'
import { ProgressRing, ProgressBar, CheckCircle, ImagePlaceholder } from '../components/Progress'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco'

const topics = [
  { title: 'Alimentacion saludable', Icon: Apple },
  { title: 'Actividad fisica', Icon: Runner },
  { title: 'Salud mental', Icon: Brain },
]

const habitIcons = { agua: Drop, caminar: Shoe, fruta: Apple, pausa: Lotus }

export default function Inicio({ habits, onToggle, onDiscover }) {
  const done = habits.filter((h) => h.done).length
  const percent = Math.round((done / habits.length) * 100)

  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        <LeafBranch className="deco deco--left" />
        <div className="hero__text">
          <p className="eyebrow">Hola, usuario</p>
          <h1 className="hero__title">
            Peuqeños Hábitos,
            <br />
            grandes cambios
          </h1>
          <p className="body">{lorem}</p>
          <button className="btn" onClick={onDiscover}>
            Descubrir mi reto <Arrow />
          </button>
        </div>
        <div className="hero__media">
          <span className="sparks" aria-hidden="true">
            <i /> <i /> <i />
          </span>
          <span className="blob blob--a" />
          <span className="blob blob--b" />
          <ImagePlaceholder className="hero__img" />
        </div>
      </section>

      {/* INFORMACIÓN */}
      <section className="section">
        <h2 className="section__title">Información para tu bienestar</h2>
        <p className="section__subtitle">Explora temas que te ayudaran a llevar una vida mas sana</p>

        <div className="topics">
          <LeafBranch className="deco deco--right" flip />
          {topics.map(({ title, Icon }) => (
            <article key={title} className="topic">
              <div className="topic__icon">
                <Icon size={250} />
              </div>
              <h3 className="topic__title">{title}</h3>
              <p className="body">{lorem}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ACCIONES SANAS */}
      <section className="section section--last">
        <h2 className="section__title">Acciones sanas</h2>
        <p className="section__subtitle">Mantén el control de tus habitos y avanza hacia una mejor versión de ti</p>

        <div className="actions">
          <LeafBranch className="deco deco--bottom-left" />
          <div className="actions__progress">
            <ProgressRing percent={percent} label="Progreso del dia" />
            <ProgressBar done={done} total={habits.length} noun="habitos" />
          </div>

          <div className="habits">
            {habits.map((h) => {
              const Icon = habitIcons[h.id]
              return (
                <div key={h.id} className="habit">
                  <div className="habit__icon">
                    <Icon size={h.id === 'agua' ? 110 : 135} />
                  </div>
                  <span className="habit__label">{h.label}</span>
                  <CheckCircle checked={h.done} onToggle={() => onToggle(h.id)} label={h.label} />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
