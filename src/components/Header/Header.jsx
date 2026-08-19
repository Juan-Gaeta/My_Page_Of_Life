import './Header.css'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/sobre-mi', label: 'Sobre mi' },
  { to: '/videojuegos', label: 'Videojuegos' },
]

function Header() {
  return (
    <header className="site-header">
      <NavLink className="site-brand" to="/" aria-label="Ir al inicio">
        S
      </NavLink>

      <nav className="site-nav" aria-label="Navegacion principal">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
