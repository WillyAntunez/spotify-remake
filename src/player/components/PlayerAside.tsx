
import { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import {
  LogoSvg,
  HomeSvg,
  HomeActiveSvg,
  SearchSvg,
  SearchActiveSvg,
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
  ActiveSvgComponent?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
  url: string;
  iconModifier?: string;
}

const PlayerAsideNavItem = ({ SvgComponent, text, url, iconModifier, ActiveSvgComponent }:PlayerAsideNavItemProps):JSX.Element => {
  const modifier:string = useMemo<string>( () => (iconModifier ? `playeraside__icon--${ iconModifier }` : '') , [])

  const location = useLocation();

  const isActive = location.pathname === url

  return (
    <li className='playeraside__li'>
      <NavLink to={url} className={({ isActive }) => `playeraside__navitem ${isActive? 'playeraside__navitem--active': ''}`} >
        <div className={`playeraside__icon ${modifier}`}>
          {ActiveSvgComponent && isActive 
            ? <ActiveSvgComponent />
            : <SvgComponent />
          }
        </div>
        <span>{text}</span>
      </NavLink>
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
          <PlayerAsideNavItem 
            SvgComponent={ HomeSvg } 
            ActiveSvgComponent={ HomeActiveSvg }
            text='Inicio' 
            url='/' 
          />

          <PlayerAsideNavItem 
            SvgComponent={ SearchSvg } 
            ActiveSvgComponent={SearchActiveSvg}
            text='Buscar' 
            url='/search' 
          />

          <PlayerAsideNavItem 
            SvgComponent={ LibrarySvg } 
            ActiveSvgComponent={ LibraryActiveSvg }
            text='Tu biblioteca' 
            url='/collection/playlists' 
          />
        </ul>

        <ul className='playeraside__ul'>
          <PlayerAsideNavItem SvgComponent={ CreateSvg } text='Crear playlist' url='/playlist/create' iconModifier='create' />

          <PlayerAsideNavItem SvgComponent={ HeartSvg } text='Tus me gusta' url='/collection/tracks' iconModifier='heart' />

          <PlayerAsideNavItem SvgComponent={ SavedSvg } text='Tus episodios' url='/collection/episodes' iconModifier='saved' />
        </ul>
      </nav>

      <hr className='playeraside__hr' />

      <div className="playeraside__playlists"> {/* Fixed height */}
        <div className="playlists__container"> {/* scrollable */}
          <nav className='playlists'> 
            
              <li className='playeraside__li'>
                <a href="#" className='playlists__playlist'>
                  <span>Radio de Avici</span>
                </a>
              </li>

              <li className='playeraside__li'>
                <a href="#" className='playlists__playlist'>Exitos del rock</a>
              </li>

              <li className='playeraside__li'>
                <a href="#" className='playlists__playlist'>Top Hits de los 80</a>
              </li>

              {/* TODO: Scroll bar personalizado 
                Ideas: 
                * Usar un ref para el elemento que tiene el scroll, para hacer calculos de tamaño y posicion
                  o si aparece o no aparece
                * El componente <ScrollBar ref={ scrollElementRef } /> debe de ir dentro del elemento scrolleable
              */}
              
          </nav>
        </div>
      </div>

    </aside>
  )
}
