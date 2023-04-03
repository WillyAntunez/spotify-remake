import { NavLink } from "react-router-dom";

import { formatDate, msToSeconds } from "../../helpers";

import { PlaylistTrack } from "../../utils/types";

import { ClockSvg, EllipsisSvg, PlaySvg, UnLikedSvg } from "../../assets/svg";

import './TrackTable.scss';

interface IProps {
    tracks?: PlaylistTrack[];
}

export const TrackTable = ({tracks = []}:IProps) => {

    return (
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
                    tracks.map((track, index) =>
                        <div className="tracktable__row tracktable__row--track" key={index}>
                            <div className="tracktable__item tracktable__item--number">
                                {index + 1}
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
                                    {track.track.album.name}
                                </NavLink>
                            </div>
                            <div className="tracktable__item">
                                {track.added_at ? formatDate(track.added_at) : ''}
                            </div>
                            <div className="tracktable__item tracktable__item--last">
                                <div>
                                    <button className="tracktable__iconbtn tracktable__iconbtn--unliked">
                                        <UnLikedSvg />
                                    </button>
                                </div>
                                <span className="tracktable__time">
                                    {msToSeconds(track.track.duration_ms)}
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
    )
}
