import { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

export const PlayerLayout = ({ children }:Props) => {
  return (
    <div>
        <h1>PlayerLayout</h1>
        { children }
    </div>
  )
}
