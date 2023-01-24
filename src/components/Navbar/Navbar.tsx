import { useState, useEffect } from 'react'
import Button from '../Button'
import Logo from '../../assets/images/logo.svg'
import mainMenu from '../../data/mainMenu'
import './Navbar.css'

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
    toggleSticky()
    window.addEventListener('scroll', () => toggleSticky())
  }, [])

  return (
    <header className={`Navbar ${sticky && 'Navbar--sticky'}`}>
      <div className="Navbar__container">
        <img
          width="160px"
          className="Navbar__logo"
          src={Logo}
          alt="luisfalconmx logo"
        />
        <nav className="Navbar__nav">
          <ul className="Navbar__list">
            {mainMenu.map(({ href, title }, key) => (
              <li key={key} className="Navbar__item">
                <a className="Navbar__item-link" href={href}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="/contact" className="Navbar__button-link">
          <Button
            type="transparent"
            className={sticky ? 'Navbar__button--sticky' : ''}
          >
            Contact
          </Button>
        </a>
      </div>
    </header>
  )
}

export default Navbar
