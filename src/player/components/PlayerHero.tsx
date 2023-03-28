import { NavLink } from 'react-router-dom';

import './PlayerHero.scss';
import noImage from '../../assets/img/no-user-image.jpg';
import { PublicUser } from '../../utils/types';


interface IProps {
    name: string;
    imageUrl?: string;
    type?: 'Playlist' | 'Album' | null;
    description?: string | null;
    owner?: PublicUser;
    followers?: number;
    count?: number;
}

import parser from 'html-react-parser'
import { usePlayerStore } from '../../hooks';
import { useMemo } from 'react';

export const PlayerHero = ({ imageUrl, name, type, description, owner, followers, count }: IProps) => {

  const { currentColor } = usePlayerStore();

  const gradient = useMemo<string>(() => {
    const { red, green, blue } = currentColor;

    if(red === 0 && green === 0 && blue === 0) {
      return (
        "linear-gradient(#181818 0,rgba(0,0,0,.5) 100%)"
      )
    }else{
      return (`
        linear-gradient(
        rgba( ${red},${green},${blue},.8) 0%,
        rgba( ${red},${green},${blue},.2) 100%)
        ` 
      )
    }
  }, [currentColor]);

  return (
    <div className="playerhero"
      style={ { background: gradient} }
    >
        { imageUrl
          ? (
            <div className='playerhero__cover'>
              <img src={ imageUrl } alt={ name } />
            </div> 
          ) : null
        }

        <div className="playerhero__content">
            {
              type 
              ? (
                <div className='playerhero__type'>
                  { type }
                </div>
                
              ) : null
            }

            <h1 className="playerhero__title">{name}</h1>

            {
              description 
              ? (
                <div className="playerhero__description"> 
                  {  parser( description ) }
                </div>
              ): null
            }

            <div className='playerhero__info'>
              {
                owner
                ? (
                  <NavLink to='' className='playerhero__owner'>
                    <div className='playerhero__ownerimage'>
                      <img src={ owner.images ? owner.images[0].url : noImage } alt={ owner.display_name || 'Unknown owner' } />
                    </div>
                    <span className='playerhero__ownername'>
                      { owner.display_name || 'Unknown' }
                    </span>
                  </NavLink>
                ) :null
              }
              
              {
                followers
                ? (
                  <div className='playerhero__followers'>
                    <span className='playerhero__point'>
                      &nbsp; • &nbsp; 
                    </span>
                    { followers.toLocaleString() }  me gusta
                  </div>
                ):null
              }

              {
                count
                ? (
                  <div className='playerhero__trackcount'>
                    <span className='playerhero__point'>
                      &nbsp; • &nbsp; 
                    </span>
                    {   count } canciones
                  </div>
                ):null
              }
            </div>
        </div>
    </div>
  )
}
