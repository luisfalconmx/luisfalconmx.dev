import { useState, useEffect } from 'react'
import Button from '../Button'
import Logo from '../../assets/images/logo.svg'
import type { Menu } from '../../types/Menu'
import './Navbar.css'

type Props = {
  variant: 'normal' | 'transparent'
  logoUrl?: string
  links: Menu
  buttonLink: string
  buttonText: string
}

const Navbar = ({
  variant = 'normal',
  logoUrl,
  links,
  buttonLink,
  buttonText
}: Props) => {
  const [sticky, setSticky] = useState(false)
  const [siteUrl, setSiteUrl] = useState(logoUrl)

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
        <a href={buttonLink} className="Navbar__button-link">
          <Button type="primary" className="Navbar__button">
            {buttonText}
          </Button>
        </a>
      </div>
    </header>
  )
}

export default Navbar
