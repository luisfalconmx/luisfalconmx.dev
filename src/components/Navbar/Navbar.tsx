import { useState, useEffect } from 'react'
import Logo from '../../assets/images/logo.svg'
import { Sun, Moon } from 'react-feather'
import useDarkmode from '../../hooks/useDarkmode'
import type { Menu } from '../../types/Menu'
import './Navbar.css'

type Props = {
  variant: 'normal' | 'transparent'
  logoUrl?: string
  links: Menu
}

const Navbar = ({ variant = 'normal', logoUrl, links }: Props) => {
  const [sticky, setSticky] = useState(false)
  const [siteUrl, setSiteUrl] = useState(logoUrl)
  const { darkmode, toggleDarkmode } = useDarkmode()

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
          <img
            width="160px"
            className="Navbar__logo"
            src={Logo}
            alt="luisfalconmx logo"
          />
        </a>
        <nav className="Navbar__nav">
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
        <div>
          {darkmode ? (
            <button type="button" onClick={toggleDarkmode}>
              <Sun className="Navbar__icon" size={28} />
            </button>
          ) : (
            <button type="button" onClick={toggleDarkmode}>
              <Moon className="Navbar__icon" size={28} />
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
