import type { ReactNode } from 'react'
import './Button.css'

type Props = {
  type?: 'primary' | 'secondary' | 'transparent'
  children: ReactNode
  className?: string
  onClick?: () => void
}

const Button = ({ type = 'primary', children, className, onClick }: Props) => {
  return (
    <button className={`Button Button--${type} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
