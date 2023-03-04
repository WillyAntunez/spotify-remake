
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

export const PlayerNavbar = () => {

    const location = useLocation();

    const userName:string = 'Willy Antunez';

    return (
        <header className='playernav'>

            <div className='playernav__right'>
                <div className="playernav__arrows">
                    <button className='playernav__navbtn'>
                        <PrevPageSvg />
                    </button> 
                    <button className='playernav__navbtn'>
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
                            <img src={ userPhoto } alt={userName} />
                            <span className='usermenu__name'>{ userName }</span>
                            <span className='usermenu__icon'>
                                <TriangleBottomSvg />
                            </span>
                        </div>
                    </button>
                </div>
            </div>

        </header>
    )
}
