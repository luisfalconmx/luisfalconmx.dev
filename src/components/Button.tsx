import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Button = ({ children }: Props) => {
  return (
    <button className="py-4 px-6 bg-dark-400 font-sans font-bold leading-6 text-white rounded-lg first-letter:uppercase cursor-pointer">
      {children}
    </button>
  )
}

export default Button
