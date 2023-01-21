import { useState, useEffect } from 'react'
import Button from '../Button'
import Logo from '../../assets/images/logo.png'
import './Navbar.css'

type NavbarLinks = {
  title: string
  href: string
}[]

const links: NavbarLinks = [
  {
    title: 'home',
    href: '/'
  },
  {
    title: 'projects',
    href: 'projects'
  },
  {
    title: 'blog',
    href: '/blog'
  },
  {
    title: 'GitHub',
    href: 'https://github.com/luisfalconmx'
  },
  {
    title: 'linkedIn',
    href: 'https://www.linkedin.com/in/luisfalconmx'
  }
]

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const trigger = 50

  const toggleSticky = () => {
    if (window.pageYOffset > trigger) {
      console.log('activar sticky')
      setSticky(true)
    } else {
      console.log('desactivar sticky')
      setSticky(false)
    }
  }

  useEffect(() => {
    console.log('useEffect')
    window.addEventListener('scroll', () => toggleSticky())
  }, [])

  return (
    <header className={`Navbar ${sticky && 'Navbar--sticky'}`}>
      <div className="Navbar__container">
        <img className="Navbar__logo" src={Logo} alt="luisfalconmx logo" />
        <nav className="Navbar__nav">
          <ul className="Navbar__list">
            {links.map(({ href, title }, key) => (
              <li key={key} className="Navbar__item">
                <a className="Navbar__item-link" href={href}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="/contact" className="Navbar__button-link">
          <Button>Contact</Button>
        </a>
      </div>
    </header>
  )
}

export default Navbar
