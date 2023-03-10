
import './PlayerNavbar.scss';

import {
    CloseXSvg,
    ExternalSvg,
    NextPageSvg,
    PrevPageSvg,
    SearchSvg,
    TriangleBottomSvg,
    TriangleUpSvg,
} from '../../assets/svg';

import { NavLink, useLocation } from 'react-router-dom';

import userPhoto from '../../assets/img/user-image.jpeg';
import { useMemo, useRef, useState } from 'react';
import { useOutsideAlerter } from '../../hooks/useOutsideAlerter';

export const PlayerNavbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>( null );
    const menuButtonRef = useRef<HTMLButtonElement>( null );

    const userName: string = 'Willy Antunez';
    const currentColor = [72, 32, 176];

    const [currentRed, currentGreen, currentBlue] = currentColor;
    const navOpacity = 0; // 0 to 100

    const navBackgroundRgba = useMemo<string>(() => `rgba(${currentRed}, ${currentGreen}, ${currentBlue}, ${navOpacity}%)`, []);

    const onToggleMenu = ():void => {
        setMenuOpen( !menuOpen );
    };

    const onCloseMenu = (event?:Event):void => {
        const target = event?.target as Node; 

        if (menuButtonRef.current && !menuButtonRef.current.contains(target)){
            setMenuOpen(false);
        }
    };

    useOutsideAlerter( menuRef, onCloseMenu );

    return (
        <header className='playernav' style={{ backgroundColor: navBackgroundRgba }}>

            <div className='playernav__right'>
                <div className="playernav__arrows">
                    <button className='playernav__navbtn playernav__navbtn--active'>
                        <PrevPageSvg />
                    </button>
                    <button className='playernav__navbtn '>
                        <NextPageSvg />
                    </button>
                    <div className='playernav__context'>
                        {/* {
                            location.pathname === '/search'
                            ? (
                                <div className="playernav__search">
                                    <SearchSvg />
                                    <input type="text" placeholder='¿Qué quieres escuchar?' />
                                    <CloseXSvg />
                                </div>
                            )
                            : null
                        } */}
                    </div>
                </div>
            </div>

            <div className="playernav__left">
                <div className="usermenu">
                    <button 
                        className={`usermenu__button ${ menuOpen ? 'usermenu__button--active' : '' }`}
                        onClick={ onToggleMenu }
                        ref={ menuButtonRef }
                    >
                        <div className="usermenu__photo">
                            <img src={userPhoto} alt={userName} />
                        </div>
                        <span className='usermenu__name'>{userName}</span>
                        <div className='usermenu__icon'>
                            {
                                menuOpen 
                                ? ( <TriangleUpSvg /> )
                                : ( <TriangleBottomSvg /> )
                            }
                        </div>
                    </button>
                    {
                        menuOpen
                            ? (
                                <div className='usermenu__menu' ref={ menuRef } onClick={ () => onCloseMenu() }>
                                    <ul className='usermenu__ul'>
                                        <li className='usermenu__item'>
                                            <NavLink to='#' target='_blank' className='usermenu__link'>
                                                <span>Cuenta</span>
                                                <ExternalSvg />
                                            </NavLink>
                                        </li>
                                        <li className='usermenu__item'>
                                            <NavLink to='#' className='usermenu__link'>
                                                <span>Perfil</span>
                                            </NavLink>
                                        </li>
                                        <li className='usermenu__item'>
                                            <NavLink to='#' target='_blank' className='usermenu__link'>
                                                <span>Ayuda</span>
                                                <ExternalSvg />
                                            </NavLink>
                                        </li>
                                        <li className='usermenu__item'>
                                            <NavLink to='#' target='_blank' className='usermenu__link'>
                                                <span>Descargar</span>
                                                <ExternalSvg />
                                            </NavLink>
                                        </li>
                                        <li className='usermenu__item usermenu__item--bottom-border'>
                                            <NavLink to='#' className='usermenu__link'>
                                                <span>Preferencias</span>
                                            </NavLink>
                                        </li>
                                        <li className='usermenu__item'>
                                            <NavLink to='#' className='usermenu__link'>
                                                <span>Cerrar sesión</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            )
                            : null
                    }

                </div>
            </div>

        </header>
    )
}
