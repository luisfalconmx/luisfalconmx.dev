import './Footer.css'
import Button from '../Button'
import socialMenu from '../../data/socialMenu'
import mainMenu from '../../data/mainMenu'

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__container">
        <div className="Footer__content">
          <strong className="Footer__title">
            Have a project in mind? Let's get to work.👋📫
          </strong>
          <Button>Say Hello</Button>
        </div>
        <div className="Footer__separator"></div>
        <div className="Footer__nav">
          <ul className="Footer__social">
            {socialMenu.map(({ href, icon, title }, key) => (
              <li key={key} className="Footer__social-item">
                <a className="Footer__social-item-link" href={href}>
                  <img src={icon} alt={title} />
                </a>
              </li>
            ))}
          </ul>
          <ul className="Footer__menu">
            {mainMenu.map(({ href, title }, key) => (
              <li key={key} className="Footer__item">
                <a className="Footer__item-link" href={href}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
