import Button from '../Button'
import './ProjectCard.css'

type Props = {
  type?: 'large' | 'medium' | 'small'
  image: {
    src: string
    alt: string
  }
  title: string
  headline: string
  link: string
  target?: '_blank' | '_parent' | '_self' | '_top'
  colorScheme?: 'light' | 'dark'
  buttonText?: string
  color?: string
}

const ProjectCard = ({
  type = 'large',
  image,
  title,
  headline,
  link,
  target = '_self',
  colorScheme = 'dark',
  buttonText = 'Case study',
  color = '#FFEFB5',
}: Props) => {
  const cardType = `ProjectCard--${type}`

  const colorPreference = `ProjectCard--${colorScheme}`

  return (
    <div
      className={`ProjectCard ${cardType} ${colorPreference}`}
      style={{
        backgroundColor: color,
      }}
    >
      <div className="ProjectCard__content">
        <h3 className="ProjectCard__title">{title}</h3>
        <span className="ProjectCard__headline">{headline}</span>
        <a href={link} target={target}>
          <Button type="secondary" className="ProjectCard__button">
            {buttonText}
          </Button>
        </a>
      </div>
      <img src={image.src} alt={image.alt} className="ProjectCard__image" />
    </div>
  )
}

export default ProjectCard
