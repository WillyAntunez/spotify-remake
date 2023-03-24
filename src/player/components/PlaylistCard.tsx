import { NavLink } from "react-router-dom";

import { PlaySvg } from "../../assets/svg";

import './PlaylistCard.scss';

interface IProps {
  imageUrl: string;
  name: string;
  description: string;
  playlistId: string;
  url: string;
}

export const PlaylistCard = ({ name, description, playlistId, url, imageUrl }: IProps) => {

  

  return (
    <NavLink className="playlistcard" to={ url }>
        <div className="playlistcard__image">
          <img src={imageUrl} alt={`"${name}" cover image`} />

          <button className="playlistcard__play">
            <PlaySvg />
          </button>
        </div>
        
        <div className="playlistcard__title">
          {name}
        </div>

        <div className="playlistcard__description">
          {description}
        </div>
    </NavLink>
  )
}
