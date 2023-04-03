import { FastAverageColor } from "fast-average-color";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom"
import { getPlaylistById } from "../../api";
import { hexToRgb } from "../../helpers/hexToRGB";
import { usePlayerStore } from "../../hooks";
import { Playlist as IPlaylist } from "../../utils/types";
import { PlayerHero, PlayerViewFooter } from "../components"
import { ClockSvg, EllipsisSvg, ExternalSvg, HeartSvg, PlaySvg, UnLikedSvg } from "../../assets/svg";

import './Playlist.scss';
import { useMenuHandler } from "../hooks";
import { formatDate } from "../../helpers/formatDate";
import { msToSeconds } from "../../helpers/msToSeconds";

export const Playlist = () => {

    const { id = '' } = useParams();

    const [playlist, setPlaylist] = useState<IPlaylist>();

    const { setCurrentColor } = usePlayerStore();

    const Fac = new FastAverageColor()

    const getDominantColor = async (url: string): Promise<void> => {
        const dominantColor = await Fac.getColorAsync(url);
        const [red, green, blue] = dominantColor.value;

        setCurrentColor({ red, green, blue });
    }

    const getPlaylist = async (id: string) => {
        const playlistResponse = await getPlaylistById(id);
        setPlaylist(playlistResponse);
    }

    useEffect(() => {
        getPlaylist(id);
    }, [])

    useEffect(() => {

        if (playlist?.primary_color && playlist.primary_color !== '#ffffff' && playlist.primary_color !== '#FFFFFF') {
            const RGBColor = hexToRgb(playlist.primary_color);
            setCurrentColor(RGBColor);
        } else if (playlist?.images[0].url) {
            getDominantColor(playlist?.images[0].url);
        }

        return () => {
            setCurrentColor({ red: 0, green: 0, blue: 0 })
        }

    }, [playlist])

    const { menuRef, menuButtonRef, menuOpen, onToggleMenu, onCloseMenu } = useMenuHandler();

    return (
        <div className="playlist">

            <div className="playlist__hero">
                <PlayerHero
                    name={playlist?.name ?? ''}
                    imageUrl={playlist?.images[0].url}
                    type="Playlist"
                    description={playlist?.description}
                    owner={playlist?.owner}
                    followers={playlist?.followers.total}
                    count={playlist?.tracks.total}
                />
                <div className="playlist__content">

                    <div className="playlist__options">
                        <button className="playlist__play">
                            <PlaySvg />
                        </button>
                        <button className="playlist__like">
                            <UnLikedSvg />
                        </button>

                        <div className="playlist__menu">
                            <button className="playlist__menubtn" 
                                onClick={onToggleMenu}
                                ref={menuButtonRef} 
                            >
                                <EllipsisSvg />
                            </button>
                            {
                                menuOpen
                                    ? (
                                        <div className='dropdown__menu' ref={menuRef} onClick={() => onCloseMenu()}>
                                            <ul className='dropdown__ul'>
                                                <li className='dropdown__item'>
                                                    <NavLink to='' className='dropdown__link'>
                                                        <span>Agregar a la lista de reproduccion</span>
                                                    </NavLink>
                                                </li>
                                                <li className='dropdown__item'>
                                                    <NavLink to='' className='dropdown__link'>
                                                        <span>Ir a radio de playlist</span>
                                                    </NavLink>
                                                </li>
                                                <li className='dropdown__item'>
                                                    <NavLink to='' className='dropdown__link'>
                                                        <span>Reportar</span>
                                                        <ExternalSvg />
                                                    </NavLink>
                                                </li>
                                                <li className='dropdown__item'>
                                                    <NavLink to='' className='dropdown__link'>
                                                        <span>Agregar a tu biblioteca</span>
                                                    </NavLink>
                                                </li>
                                                <li className='dropdown__item dropdown__item--bottom-border'>
                                                    <NavLink to='' className='dropdown__link'>
                                                        <span>Excluir de tu perfil de gustos musicales</span>
                                                    </NavLink>
                                                </li>
                                                <li className='dropdown__item dropdown__item--bottom-border'>
                                                    <NavLink to='' className='dropdown__link'>
                                                        <span>Compartir</span>
                                                    </NavLink>
                                                </li>
                                                <li className='dropdown__item dropdown__item--bottom-border'>
                                                    <NavLink to='' className='dropdown__link'>
                                                        <span>Acerca de las recomendaciones</span>
                                                    </NavLink>
                                                </li>
                                                <li className='dropdown__item'>
                                                    <NavLink to='' className='dropdown__link'>
                                                        <span>Abrir en la aplicacion de escritorio</span>
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                    : null
                            }
                        </div>
                    </div>

                    <div className="playlist__table">
                        <div className="tracktable">
                            <div className="tracktable__head">
                                <div className="tracktable__row tracktable__row--head">
                                    <span className="tracktable__item">
                                        #
                                    </span>
                                    <span className="tracktable__item">
                                        Título
                                    </span>
                                    <span className="tracktable__item">
                                        Álbum
                                    </span>
                                    <span className="tracktable__item">
                                        Fecha en que se agrego
                                    </span>
                                    <span className="tracktable__item tracktable__item--clock">
                                        <ClockSvg />
                                    </span>
                                </div>
                            </div>

                            <div className="tracktable__body">
                                {
                                    playlist?.tracks.items.map((track, index) => 
                                        <div className="tracktable__row tracktable__row--track" key={index}>
                                            <div className="tracktable__item tracktable__item--number">
                                                { index + 1 }
                                            </div>
                                            <button className="tracktable__item tracktable__item--play tracktable__iconbtn tracktable__iconbtn--play">
                                                <PlaySvg />
                                            </button>

                                            <div className="tracktable__item">
                                                <div className="tracktable__cover">
                                                    <img src={track.track.album.images[0].url} alt={track.track.name} />
                                                </div>
                                                <div className="tracktable__titleandartist">
                                                    <NavLink to='' className="tracktable__link tracktable__link--title">
                                                        {track.track.name}
                                                    </NavLink>
                                                    <NavLink to='' className="tracktable__link">
                                                        {track.track.artists.map(artist => artist.name).join(', ')}
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="tracktable__item">
                                                <NavLink to="" className="tracktable__link">
                                                    { track.track.album.name }
                                                </NavLink>
                                            </div>
                                            <div className="tracktable__item">
                                                { track.added_at ? formatDate( track.added_at ) : '' }
                                            </div>
                                            <div className="tracktable__item tracktable__item--last">
                                                <div>
                                                    <button className="tracktable__iconbtn tracktable__iconbtn--unliked">
                                                        <UnLikedSvg />
                                                    </button>
                                                </div>
                                                <span className="tracktable__time">
                                                    { msToSeconds(track.track.duration_ms) }
                                                </span>
                                                <div>
                                                    <button className="tracktable__iconbtn tracktable__iconbtn--ellipsis">
                                                        <EllipsisSvg />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>

                        </div>
                    </div>
                    
                    <PlayerViewFooter />
                </div>
            </div>

        </div>
    )
}
