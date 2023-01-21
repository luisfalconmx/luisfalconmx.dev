import Button from './Button'
import Logo from '../assets/images/logo.png'

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

const Navbar = () => (
  <header className="py-6 px-16 shadow-custom">
    <div className="max-w-[1170px] mx-auto grid grid-cols-[auto,auto,1fr] gap-x-16 items-center">
      <img className="filter invert" src={Logo} alt="luisfalconmx logo" />
      <nav>
        <ul className="flex items-center">
          {links.map(({ href, title }) => (
            <li className="mr-10 first-letter:uppercase cursor-pointer font-normal text-dark-300">
              <a href={href}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <a href="/contact" className="w-fit ml-auto block">
        <Button>Contact</Button>
      </a>
    </div>
  </header>
)

export default Navbar
