import type { ReactNode } from 'react'
import { ArrowUpRight } from 'react-feather'
import './Button.css'

type Props = {
  type?: 'primary' | 'secondary' | 'transparent'
  icon?: boolean
  children: ReactNode
  className?: string
  onClick?: () => void
}

const Button = ({
  type = 'primary',
  icon = false,
  children,
  className,
  onClick
}: Props) => {
  return (
    <button className={`Button Button--${type} ${className}`} onClick={onClick}>
      {children}
      {icon && <ArrowUpRight className="Button__icon" size={24} />}
    </button>
  )
}

export default Button
