import { ReactNode } from 'react'

import './PlayerLayout.scss';

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
