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

export const PlayerHero = ({ imageUrl, name, type, description, owner, followers, count }: IProps) => {

  return (
    <div className="playerhero">
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
