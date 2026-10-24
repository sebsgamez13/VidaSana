import { useState } from 'react'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import MisRetos from './pages/MisRetos'

const initialHabits = [
  { id: 'agua', label: 'Beber agua', done: true },
  { id: 'caminar', label: 'Caminar', done: false },
  { id: 'fruta', label: 'Comer una fruta', done: true },
  { id: 'pausa', label: 'Pausa de activa', done: false },
]

const initialRetos = [
  { id: 'correr', label: 'Correr 2 Km', done: true },
  { id: 'ensalada', label: 'Preparar una ensalada', done: false },
  { id: 'batido', label: 'Tomar un batido', done: false },
  { id: 'flexiones', label: 'Hacer 15 flexiones', done: true },
]

const toggleById = (list, id) => list.map((item) => (item.id === id ? { ...item, done: !item.done } : item))

export default function App() {
  const [view, setView] = useState('inicio')
  const [habits, setHabits] = useState(initialHabits)
  const [retos, setRetos] = useState(initialRetos)
  const [accepted, setAccepted] = useState(false)

  const changeView = (v) => {
    setView(v)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Navbar view={view} onChange={changeView} />
      <div key={view} className="view-fade">
        {view === 'inicio' ? (
          <Inicio
            habits={habits}
            onToggle={(id) => setHabits((h) => toggleById(h, id))}
            onDiscover={() => changeView('retos')}
          />
        ) : (
          <MisRetos
            retos={retos}
            onToggle={(id) => setRetos((r) => toggleById(r, id))}
            accepted={accepted}
            onAccept={() => setAccepted((a) => !a)}
          />
        )}
      </div>
    </>
  )
}
