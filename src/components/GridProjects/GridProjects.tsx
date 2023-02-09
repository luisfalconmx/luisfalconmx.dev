import type { ReactNode } from "react"
import './GridProjects.css'

type Props = {
  children: ReactNode
}

const GridProjects = ({children}: Props) => {
  return (
    <div className="GridProjects">
      {children}
    </div>
  )
}

export default GridProjects