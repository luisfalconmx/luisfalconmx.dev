import './Hero.css'

type Props = {
  image: string
  title: string
  headline?: string
  description: string
}

const Hero = ({ image, title, headline, description }: Props) => (
  <section className="Hero">
    <div className="Hero__container">
      <img className="Hero__image" src={image} alt={title} />
      <div className="Hero__content">
        <h1 className="Hero__title">{title}</h1>
        {headline && <strong className="Hero__headline">{headline}</strong>}
        <p className="Hero__description">{description}</p>
      </div>
    </div>
    {/* Decorators */}
    <div className="Hero__decorator-1"></div>
    <div className="Hero__decorator-2"></div>
    <div className="Hero__decorator-3"></div>
  </section>
)

export default Hero
