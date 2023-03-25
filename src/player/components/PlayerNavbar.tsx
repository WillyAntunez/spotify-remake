import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useHistoryNavigation, useOutsideAlerter } from '../../hooks';
import { useNavbarRgba } from '../hooks';

import {
    ExternalSvg,
    NextPageSvg,
    PrevPageSvg,
    TriangleBottomSvg,
    TriangleUpSvg,
} from '../../assets/svg';
import userPhoto from '../../assets/img/user-image.jpeg';

import './PlayerNavbar.scss';


// TODO: Make it responsive

export const PlayerNavbar = () => {

    const { nextPageExists, prevPageExists, navigateBackward, navigateForward } = useHistoryNavigation();

    const { navBackgroundRgba } = useNavbarRgba();

    const [menuOpen, setMenuOpen] = useState<boolean>(false);


    const userName: string = 'Willy Antunez';

    // Handle menu
    const menuRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    const onToggleMenu = (): void => {
        setMenuOpen(!menuOpen);
    };

    const onCloseMenu = (event?: Event): void => {
        const target = event?.target as Node;
        if (menuButtonRef.current && !menuButtonRef.current.contains(target)) {
            setMenuOpen(false);
        }
    };

    useOutsideAlerter(menuRef, onCloseMenu);

    return (
        <header className='playernav' style={{ backgroundColor: navBackgroundRgba }}>

            <div className='playernav__left'>
                <div className="playernav__arrows">
                    <button
                        className={`playernav__navbtn ${prevPageExists ? 'playernav__navbtn--active' : ''}`}
                        onClick={navigateBackward}
                    >
                        <PrevPageSvg />
                    </button>
                    <button
                        className={`playernav__navbtn ${nextPageExists ? 'playernav__navbtn--active' : ''}`}
                        onClick={navigateForward}
                    >
                        <NextPageSvg />
                    </button>
                    <div className="playernav__context" id="navbarPortal">
                    </div>
                </div>
            </div>

            <div className="playernav__right">
                <div className="usermenu">
                    <button
                        className={`usermenu__button ${menuOpen ? 'usermenu__button--active' : ''}`}
                        onClick={onToggleMenu}
                        ref={menuButtonRef}
                    >
                        <div className="usermenu__photo">
                            <img src={userPhoto} alt={userName} />
                        </div>
                        <span className='usermenu__name'>{userName}</span>
                        <div className='usermenu__icon'>
                            {
                                menuOpen
                                    ? (<TriangleUpSvg />)
                                    : (<TriangleBottomSvg />)
                            }
                        </div>
                    </button>
                    {
                        menuOpen
                            ? (
                                <div className='usermenu__menu' ref={menuRef} onClick={() => onCloseMenu()}>
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
