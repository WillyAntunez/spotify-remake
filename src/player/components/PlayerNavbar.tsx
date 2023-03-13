import { useMemo, useRef, useState } from 'react';

import {  NavLink, useLocation, useNavigate, } from 'react-router-dom';

import { useOutsideAlerter } from '../../hooks/useOutsideAlerter';

import {
    CloseXSvg,
    ExternalSvg,
    NextPageSvg,
    PrevPageSvg,
    SearchSvg,
    TriangleBottomSvg,
    TriangleUpSvg,
} from '../../assets/svg';

import userPhoto from '../../assets/img/user-image.jpeg';
import './PlayerNavbar.scss';
import { useHistoryNavigation } from '../../hooks/useHistoryNavigation';


export const PlayerNavbar = () => {

    const { nextPageExists, prevPageExists, navigateBackward, navigateForward } = useHistoryNavigation();

    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [inputText, setInputText] = useState<string>('');

    const menuRef = useRef<HTMLDivElement>( null );
    const menuButtonRef = useRef<HTMLButtonElement>( null );
    const searchInputRef = useRef<HTMLInputElement>(null);

    const location = useLocation();

    const userName: string = 'Willy Antunez';
    const currentColor: number[] = [72, 32, 176];

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

    const onInputFocus = ():void => {
        searchInputRef.current?.focus();
    }
    
    const onInputChange = ({target}:React.ChangeEvent<HTMLInputElement>):void => {
        setInputText(target.value);
    }

    const onClearInput = ():void => {
        setInputText('');
    }
    
    useOutsideAlerter( menuRef, onCloseMenu );

    

    return (
        <header className='playernav' style={{ backgroundColor: navBackgroundRgba }}>

            <div className='playernav__left'>
                <div className="playernav__arrows">
                    <button 
                        className={`playernav__navbtn ${prevPageExists ? 'playernav__navbtn--active' : ''  }`}
                        onClick={ navigateBackward }
                        >
                        <PrevPageSvg />
                    </button>
                    <button 
                        className={`playernav__navbtn ${nextPageExists ? 'playernav__navbtn--active' : ''  }`}
                        onClick={ navigateForward }
                        >
                        <NextPageSvg />
                    </button>
                    <div className='playernav__context'>
                        {
                            location.pathname === '/search'
                            ? (
                                <div className="playernav__search" onClick={ onInputFocus }>
                                    <SearchSvg className='playernav__search-icon' />
                                    <input 
                                        type="text" 
                                        placeholder='¿Qué quieres escuchar?' 
                                        className='playernav__search-input'
                                        onChange={ onInputChange }
                                        value={ inputText }
                                        ref={ searchInputRef }
                                        />
                                    {
                                        inputText.length > 0 
                                        ? ( <CloseXSvg className='playernav__x-icon' onClick={ onClearInput } /> )
                                        : null
                                    }
                                </div>
                            )
                            : null
                        }
                    </div>
                </div>
            </div>

            <div className="playernav__right">
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
