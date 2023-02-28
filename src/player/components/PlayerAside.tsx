
import { useMemo } from 'react';

import {
  LogoSvg,
  HomeSvg,
  HomeActiveSvg,
  SearchSvg,
  SearchActive,
  LibrarySvg,
  LibraryActiveSvg,
  CreateSvg,
  HeartSvg,
  SavedSvg,
  DownloadSvg,
} from '../../assets/svg';

import './PlayerAside.scss';

interface PlayerAsideNavItemProps {
  SvgComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
  url: string;
  iconModifier?: string;
}

const PlayerAsideNavItem = ({ SvgComponent, text, url, iconModifier }:PlayerAsideNavItemProps):JSX.Element => {
  const modifier:string = useMemo<string>( () => (iconModifier ? `playerAside__icon--${ iconModifier }` : '') , [])

  return (
    <li className='playeraside__li'>
      <a href={url} className='playeraside__navitem'>
        <div className={`playerAside__icon ${modifier}`}>
          <SvgComponent />
        </div>
        <span>{text}</span>
      </a>
    </li>
  )
}

export const PlayerAside = () => {
  return (
    <aside className='playeraside'>

      <div className='playeraside__logo'>
        <LogoSvg />
      </div>

      <nav className='playeraside__nav'>
        <ul className='playeraside__ul'>
          <PlayerAsideNavItem SvgComponent={ HomeSvg } text='Inicio' url='#' />

          <PlayerAsideNavItem SvgComponent={ SearchSvg } text='Buscar' url='#' />

          <PlayerAsideNavItem SvgComponent={ LibrarySvg } text='Tu biblioteca' url='#' />
        </ul>

        <ul className='playeraside__ul'>
          <PlayerAsideNavItem SvgComponent={ CreateSvg } text='Crear playlist' url='#' />

          <PlayerAsideNavItem SvgComponent={ HeartSvg } text='Buscar' url='#' />

          <PlayerAsideNavItem SvgComponent={ SavedSvg } text='Tu biblioteca' url='#' />
        </ul>
      </nav>

      <hr className='playeraside__hr' />

      <div className="playeraside__playlists"> {/* Fixed height */}
        <div className="playlists__container"> {/* scrollable */}
          <nav className='playlists'> 
            <ul className='playeraside__ul'>
              <li className='playeraside__li'>
                <a href="#" className='playlists__playlist'>Radio de Avici</a>
              </li>
            </ul>
            
            <ul className='playeraside__ul'>
              <li className='playeraside__li'>
                <a href="#" className='playlists__playlist'>Exitos del rock</a>
              </li>
            </ul>

            <ul className='playeraside__ul'>
              <li className='playeraside__li'>
                <a href="#" className='playlists__playlist'>Top Hits de los 80</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </aside>
  )
}
