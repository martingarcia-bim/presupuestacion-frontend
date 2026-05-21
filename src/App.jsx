import React from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import Proyectos from './pages/Proyectos'
import Partidas from './pages/Partidas'
import Presupuesto from './pages/Presupuesto'

function Navigation() {
  const location = useLocation()
  
  return (
    <div className="header">
      <h1>Sistema de Presupuestación Inteligente</h1>
      <nav className="nav">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Proyectos
        </Link>
        <Link to="/partidas" className={location.pathname === '/partidas' ? 'active' : ''}>
          Base de Precios
        </Link>
      </nav>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<Proyectos />} />
          <Route path="/partidas" element={<Partidas />} />
          <Route path="/presupuesto/:proyectoId" element={<Presupuesto />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
