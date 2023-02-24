import type { SocialMenu } from '../../types/SocialMenu'
import facebookIcon from '../../assets/icons/icon-facebook.svg'
import instagramIcon from '../../assets/icons/icon-instagram.svg'
import twitterIcon from '../../assets/icons/icon-twitter.svg'
import linkedinIcon from '../../assets/icons/icon-linkedin.svg'
import githubIcon from '../../assets/icons/icon-github.svg'

const socialMenu: SocialMenu = [
  {
    title: 'facebook',
    icon: facebookIcon,
    href: 'https://www.facebook.com/luisfalconmx'
  },
  {
    title: 'instagram',
    icon: instagramIcon,
    href: 'https://www.instagram.com/luisfalconmx'
  },
  {
    title: 'twitter',
    icon: twitterIcon,
    href: 'https://twitter.com/luisfalconmx'
  },
  {
    title: 'linkedin',
    icon: linkedinIcon,
    href: 'https://www.linkedin.com/in/luisfalconmx'
  },
  {
    title: 'github',
    icon: githubIcon,
    href: 'https://github.com/luisfalconmx'
  }
]

export default socialMenu
