import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import { industries, services } from '../../data/siteContent'

const navigation = [
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
]

const dropdowns = {
  services: {
    label: 'Services',
    path: '/services',
    summary: 'Find the leak, fix the route and leave with a website you own.',
    items: services.map((service) => ({
      label: service.title,
      summary: service.summary,
      path: `/services/${service.slug}`,
      icon: service.icon,
    })),
  },
  solutions: {
    label: 'Solutions',
    path: '/solutions',
    summary: 'Customer journeys shaped around how your industry earns enquiries and bookings.',
    items: industries.map((industry) => ({
      label: industry.shortName,
      summary: industry.headline,
      path: `/solutions/${industry.slug}`,
      icon: industry.icon,
    })),
  },
}

type DropdownKey = keyof typeof dropdowns
const dropdownOrder: DropdownKey[] = ['services', 'solutions']
const dropdownCloseDelay = 150
const dropdownExitDuration = 120

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [dropdownDirection, setDropdownDirection] = useState<'left' | 'right'>('right')
  const [mobileSection, setMobileSection] = useState<DropdownKey | null>(null)
  const dropdownGroupRef = useRef<HTMLDivElement>(null)
  const triggerRefs = useRef<Partial<Record<DropdownKey, HTMLAnchorElement>>>({})
  const closeTimerRef = useRef<ReturnType<typeof setTimeout>>()
  const exitTimerRef = useRef<ReturnType<typeof setTimeout>>()
  const { pathname } = useLocation()

  const clearDropdownTimers = () => {
    clearTimeout(closeTimerRef.current)
    clearTimeout(exitTimerRef.current)
  }

  const closeDropdown = () => {
    clearDropdownTimers()
    setDropdownOpen(false)
    exitTimerRef.current = setTimeout(() => setActiveDropdown(null), dropdownExitDuration)
  }

  const closeMenu = () => {
    setMenuOpen(false)
    setMobileSection(null)
    closeDropdown()
  }

  const openDropdown = (key: DropdownKey) => {
    clearDropdownTimers()
    if (activeDropdown && activeDropdown !== key) {
      setDropdownDirection(dropdownOrder.indexOf(key) > dropdownOrder.indexOf(activeDropdown) ? 'right' : 'left')
    }
    setActiveDropdown(key)
    setDropdownOpen(true)
  }

  const scheduleDropdownClose = () => {
    clearTimeout(closeTimerRef.current)
    closeTimerRef.current = setTimeout(closeDropdown, dropdownCloseDelay)
  }

  const focusDropdownLink = () => {
    requestAnimationFrame(() => dropdownGroupRef.current?.querySelector<HTMLAnchorElement>('.site-nav__panel-link')?.focus())
  }

  const handleTriggerKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>, key: DropdownKey) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      openDropdown(key)
      focusDropdownLink()
      return
    }
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
      return
    }
    event.preventDefault()
    const direction = event.key === 'ArrowRight' ? 1 : -1
    const nextIndex = (dropdownOrder.indexOf(key) + direction + dropdownOrder.length) % dropdownOrder.length
    triggerRefs.current[dropdownOrder[nextIndex]]?.focus()
  }

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 0)

    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  useEffect(() => {
    closeMenu()
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) {
      return
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen])

  useEffect(() => () => clearDropdownTimers(), [])

  const headerClassName = [
    'site-header',
    pathname === '/' ? 'site-header--home' : '',
    isScrolled ? 'site-header--scrolled' : '',
    menuOpen ? 'site-header--menu-open' : '',
  ].filter(Boolean).join(' ')

  return (
    <header className={headerClassName}>
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
          <div className="site-nav__links site-nav__links--desktop">
            <div
              className="site-nav__dropdown-group"
              ref={dropdownGroupRef}
              onMouseEnter={clearDropdownTimers}
              onMouseLeave={scheduleDropdownClose}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  scheduleDropdownClose()
                }
              }}
              onKeyDown={(event) => {
                if (event.key !== 'Escape') {
                  return
                }
                const trigger = activeDropdown ? triggerRefs.current[activeDropdown] : null
                closeDropdown()
                trigger?.focus()
              }}
            >
              <div className="site-nav__triggers">
                {dropdownOrder.map((key) => {
                  const dropdown = dropdowns[key]
                  const isActive = pathname.startsWith(dropdown.path)
                  const isExpanded = dropdownOpen && activeDropdown === key
                  return (
                    <NavLink
                      className={`site-nav__link site-nav__trigger ${isActive ? 'site-nav__link--active' : ''}`}
                      key={key}
                      ref={(element) => {
                        triggerRefs.current[key] = element ?? undefined
                      }}
                      to={dropdown.path}
                      aria-expanded={isExpanded}
                      aria-controls="site-nav-dropdown"
                      onMouseEnter={() => openDropdown(key)}
                      onClick={closeMenu}
                      onKeyDown={(event) => handleTriggerKeyDown(event, key)}
                    >
                      {dropdown.label}
                      <ChevronDown aria-hidden="true" size={14} strokeWidth={2} />
                    </NavLink>
                  )
                })}
              </div>

              {activeDropdown && (
                <div
                  className={`site-nav__viewport site-nav__viewport--${activeDropdown} ${dropdownOpen ? 'site-nav__viewport--open' : ''}`}
                  id="site-nav-dropdown"
                >
                  <div
                    className="site-nav__panel"
                    data-direction={dropdownDirection}
                    key={activeDropdown}
                  >
                    <div className="site-nav__panel-intro">
                      <span>{dropdowns[activeDropdown].label}</span>
                      <p>{dropdowns[activeDropdown].summary}</p>
                      <Link to={dropdowns[activeDropdown].path} onClick={closeMenu}>
                        View all
                        <ArrowUpRight aria-hidden="true" size={15} />
                      </Link>
                    </div>
                    <div className="site-nav__panel-links">
                      {dropdowns[activeDropdown].items.map((item) => {
                        const Icon = item.icon
                        return (
                          <NavLink className="site-nav__panel-link" key={item.path} to={item.path} onClick={closeMenu}>
                            <Icon aria-hidden="true" size={20} strokeWidth={1.7} />
                            <span>
                              <strong>{item.label}</strong>
                              <small>{item.summary}</small>
                            </span>
                            <ArrowUpRight aria-hidden="true" className="site-nav__panel-arrow" size={15} />
                          </NavLink>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
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

          <div className="site-nav__mobile">
            {dropdownOrder.map((key) => {
              const dropdown = dropdowns[key]
              const sectionOpen = mobileSection === key
              return (
                <div className="mobile-nav__section" key={key}>
                  <button
                    className="mobile-nav__trigger"
                    type="button"
                    aria-expanded={sectionOpen}
                    onClick={() => setMobileSection(sectionOpen ? null : key)}
                  >
                    {dropdown.label}
                    <ChevronDown aria-hidden="true" size={17} />
                  </button>
                  <div className={`mobile-nav__submenu ${sectionOpen ? 'mobile-nav__submenu--open' : ''}`}>
                    <div>
                      <NavLink to={dropdown.path} onClick={closeMenu}>All {dropdown.label.toLowerCase()}</NavLink>
                      {dropdown.items.map((item) => (
                        <NavLink key={item.path} to={item.path} onClick={closeMenu}>{item.label}</NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
            {navigation.map((item) => (
              <NavLink className="site-nav__link" key={item.path} to={item.path} onClick={closeMenu}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
