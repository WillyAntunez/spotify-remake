import { ReactNode } from 'react'
import { PlayerAside, PlayerControls } from '../components';

import './PlayerLayout.scss';

interface Props {
    children: ReactNode;
}

export const PlayerLayout = ({ children }:Props) => {
  return (
    <main>
        <PlayerAside />
        <PlayerControls />
        <div className='content'>
          { children }
        </div>
    </main>
  )
}
