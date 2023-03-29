import { FastAverageColor } from "fast-average-color";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom"
import { getPlaylistById } from "../../api";
import { hexToRgb } from "../../helpers/hexToRGB";
import { usePlayerStore } from "../../hooks";
import { Playlist as IPlaylist } from "../../utils/types";
import { PlayerHero } from "../components"
import { EllipsisSvg, ExternalSvg, HeartSvg, PlaySvg, UnLikedSvg } from "../../assets/svg";

import './Playlist.scss';
import { useMenuHandler } from "../hooks";

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

        if (playlist?.primary_color && playlist.primary_color !== '#FFFFFF') {
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

                </div>
            </div>

        </div>
    )
}
