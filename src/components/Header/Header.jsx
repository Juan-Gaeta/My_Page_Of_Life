import './Header.css'

const navItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mi' },
  { href: '#videojuegos', label: 'Videojuegos' },
]

function Header() {
  return (
    <header className="site-header">
      <a className="site-brand" href="#inicio" aria-label="Ir al inicio">
        S
      </a>

      <nav className="site-nav" aria-label="Navegacion principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
