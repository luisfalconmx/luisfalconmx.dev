import { useState, useEffect } from 'react'
import Logo from '../../assets/images/logo.svg'
import { Menu, X, Sun, Moon } from 'react-feather'
import useDarkmode from '../../hooks/useDarkmode'
import type { Menu as MenuType } from '../../types/Menu'
import './Navbar.css'

type Props = {
  variant: 'normal' | 'transparent'
  logoUrl?: string
  links: MenuType
}

const Navbar = ({ variant = 'normal', logoUrl, links }: Props) => {
  const [sticky, setSticky] = useState(false)
  const [siteUrl, setSiteUrl] = useState(logoUrl)
  const [menuActive, setMenuActive] = useState(false)
  const { darkmode, toggleDarkmode } = useDarkmode()

  const toggleMenu = () => setMenuActive(!menuActive)

  const toggleSticky = () => {
    const stickyTrigger = 100
    const getScroll = window.scrollY

    if (getScroll > stickyTrigger) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  useEffect(() => {
    toggleSticky()
    window.addEventListener('scroll', () => toggleSticky())

    if (!logoUrl) {
      const fullSiteUrl = document.location.origin
      setSiteUrl(fullSiteUrl)
    }
  }, [])

  return (
    <header
      className={`Navbar Navbar--${variant} ${sticky && 'Navbar--sticky'}`}
      id="navbar"
    >
      <div className="Navbar__container">
        <a href={siteUrl}>
          <img className="Navbar__logo" src={Logo} alt="luisfalconmx logo" />
        </a>
        <nav
          className={`Navbar__nav ${menuActive ? 'Navbar__nav--active' : ''}`}
        >
          <button className="Navbar__x" type="button" onClick={toggleMenu}>
            <X size={32} />
          </button>
          <ul className="Navbar__list">
            {links &&
              links.map(({ href, title }, key) => (
                <li key={key} className="Navbar__item">
                  <a className="Navbar__item-link" href={href}>
                    {title}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
        <div className="Navbar__actions">
          {darkmode ? (
            <button type="button" onClick={toggleDarkmode}>
              <Sun className="Navbar__icon" size={28} />
            </button>
          ) : (
            <button type="button" onClick={toggleDarkmode}>
              <Moon className="Navbar__icon" size={28} />
            </button>
          )}
          <button className="Navbar__menu" type="button" onClick={toggleMenu}>
            <Menu size={32} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
