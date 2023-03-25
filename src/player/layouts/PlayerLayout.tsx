import { ReactNode } from 'react'
import { PlayerAside, PlayerControls, PlayerNavbar } from '../components';

import './PlayerLayout.scss';

interface Props {
    children: ReactNode;
}

export const PlayerLayout = ({ children }:Props) => {
  return (
    <main className='player'>
        <PlayerAside />
        <PlayerControls />
        
        <div className='player__container'>
          <PlayerNavbar />
          <div className="player__view" id='playerView'>
            { children }
          </div>
        </div>
    </main>
  )
}
