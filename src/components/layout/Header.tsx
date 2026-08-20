import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../../assets/logo.svg'

const navigation = [
  { label: 'Services', path: '/services' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'About', path: '/about' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" to="/" aria-label="Leakproof home" onClick={closeMenu}>
          <img src={logo} alt="Leakproof" />
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`} aria-label="Main navigation">
          <div className="site-nav__links">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                className={({ isActive }) => `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`}
                to={item.path}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <Link className="button button--small" to="/contact" onClick={closeMenu}>
            Get a free leak check
          </Link>
        </nav>
      </div>
    </header>
  )
}
