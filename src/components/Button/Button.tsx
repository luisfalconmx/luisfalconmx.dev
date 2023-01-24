import type { ReactNode } from 'react'
import './Button.css'

type Props = {
  type?: 'primary' | 'secondary' | 'transparent'
  children: ReactNode
  className?: string
}

const Button = ({ type = 'primary', children, className }: Props) => {
  return (
    <button className={`Button Button--${type} ${className}`}>
      {children}
    </button>
  )
}

export default Button
