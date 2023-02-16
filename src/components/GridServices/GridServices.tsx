import type { ReactNode } from 'react'
import './GridServices.css'

type Props = {
  children: ReactNode
}

const GridServices = ({ children }: Props) => {
  return <div className="GridServices">{children}</div>
}

export default GridServices
