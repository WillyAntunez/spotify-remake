
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

import { useLocation } from 'react-router-dom';

import userPhoto from '../../assets/img/user-image.jpeg';
import { useMemo } from 'react';

export const PlayerNavbar = () => {

    const location = useLocation();

    const userName:string = 'Willy Antunez';
    const currentColor = [72, 32, 176];

    const [ currentRed, currentGreen, currentBlue ] = currentColor; 
    const navOpacity = 0; // 0 to 100

    const navBackgroundRgba = useMemo<string>(() => `rgba(${currentRed}, ${currentGreen}, ${currentBlue}, ${navOpacity}%)`, [])

    return (
        <header className='playernav' style={ { backgroundColor: navBackgroundRgba } }>

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
                    <button className="usermenu__button">
                        <div className="usermenu__photo">
                            <img src={ userPhoto } alt={userName}  />
                        </div>
                        <span className='usermenu__name'>{ userName }</span>
                        <div className='usermenu__icon'>
                            <TriangleBottomSvg />
                        </div>
                    </button>
                </div>
            </div>

        </header>
    )
}
