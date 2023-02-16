import type { Key } from 'react'
import './ServiceCard.css'

type Props = {
  key: Key
  image: string
  title: string
  description: string
}

const ServiceCard = ({ image, title, description }: Props) => {
  return (
    <div className="ServiceCard">
      <img className="ServiceCard__image" src={image} alt={title} />
      <h3 className="ServiceCard__title">{title}</h3>
      <p className="ServiceCard__description">{description}</p>
    </div>
  )
}

export default ServiceCard
