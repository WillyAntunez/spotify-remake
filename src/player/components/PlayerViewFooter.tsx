import { NavLink } from "react-router-dom"

import { FacebookIconSvg, TwitterIconSvg, InstagramIconSvg } from "../../assets/svg";

import './PlayerViewFooter.scss';

export const PlayerViewFooter = () => {

    return (
        <footer className="playerfooter">
            <div className="playerfooter__top">
                <div className="playerfooter__links playerfooter__links--groups">
                    <div className="playerfooter__group">
                        <span className="playerfooter__title">Compañía</span>
                        <ul>
                            <li>
                                <NavLink
                                    to='https://www.spotify.com/hn/about-us/contact/'
                                    target='_blank'
                                    className='playerfooter__link' >
                                    Acerca de
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='https://www.lifeatspotify.com/'
                                    target='_blank'
                                    className='playerfooter__link' >
                                    Empleo
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='https://newsroom.spotify.com/'
                                    target='_blank'
                                    className='playerfooter__link' >
                                    For the Records
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="playerfooter__group">
                        <span className="playerfooter__title">Comunidades</span>
                        <ul>
                            <li>
                                <NavLink
                                    to='https://artists.spotify.com/es-419'
                                    target='_blank'
                                    className='playerfooter__link' >
                                    Para artistas
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='https://developer.spotify.com/'
                                    target='_blank'
                                    className='playerfooter__link' >
                                    Desarrolladores
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='https://ads.spotify.com/en-US/'
                                    target='_blank'
                                    className='playerfooter__link' >
                                    Publicidad
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='https://investors.spotify.com/'
                                    target='_blank'
                                    className='playerfooter__link' >
                                    Inversionistas
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='https://spotifyforvendors.com/'
                                    target='_blank'
                                    className='playerfooter__link' >
                                    Proveedores
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="playerfooter__group">
                        <span className="playerfooter__title">Enlaces útiles</span>
                        <ul>
                            <li>
                                <NavLink
                                    to='https://support.spotify.com/hn/'
                                    target='_blank'
                                    className='playerfooter__link' >
                                    Ayuda
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='https://www.spotify.com/download'
                                    target='_blank'
                                    className='playerfooter__link' >
                                    App móvil gratis
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="playerfooter__social">
                    <NavLink to="https://www.instagram.com/spotify/"
                        className='playerfooter__iconbutton'>
                        <InstagramIconSvg />
                    </NavLink>

                    <NavLink to="https://twitter.com/spotify"
                        className='playerfooter__iconbutton'>
                        <TwitterIconSvg />
                    </NavLink>

                    <NavLink to="https://www.facebook.com/SpotifyLatino/"
                        className='playerfooter__iconbutton'>
                        <FacebookIconSvg />
                    </NavLink>

                </div>
            </div>

            <hr className="playerfooter__separator" />

            <div className="playerfooter__bottom">
                <div className="playerfooter__links playerfooter__links--list">
                    <NavLink
                        to='https://www.spotify.com/hn/legal/end-user-agreement/'
                        target='_blank'
                        className='playerfooter__link playerfooter__link--small' >
                        Legal
                    </NavLink>
                    <NavLink
                        to='https://www.spotify.com/hn/privacy'
                        target='_blank'
                        className='playerfooter__link playerfooter__link--small' >
                        Centro de privacidad
                    </NavLink>
                    <NavLink
                        to='https://www.spotify.com/hn/privacy'
                        target='_blank'
                        className='playerfooter__link playerfooter__link--small' >
                        Políticas de privacidad
                    </NavLink>
                    <NavLink
                        to='https://www.spotify.com/hn/legal/cookies-policy/'
                        target='_blank'
                        className='playerfooter__link playerfooter__link--small' >
                        Cookies
                    </NavLink>
                    <NavLink
                        to='https://www.spotify.com/hn/legal/privacy-policy/#s3'
                        target='_blank'
                        className='playerfooter__link playerfooter__link--small' >
                        Sobre los anuncios
                    </NavLink>
                </div>

                <span className="playerfooter__copy">
                    © 2023 Spotify AB
                </span>
            </div>
        </footer>
    )
}
