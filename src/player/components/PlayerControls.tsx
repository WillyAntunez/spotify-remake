
import LikedIcon from '../../assets/svg/liked.svg';
import UnLikedIcon from '../../assets/svg/unliked.svg';

import './PlayerControls.scss';

export const PlayerControls = () => {

  const song =  {
    album: {
      imageUrl: 'https://i.scdn.co/image/ab67616d000048511bd6d088d3d81972af4cb81d',
      name: 'album-name',
    },
    name: 'Cool kids',
    artist: 'Harmless',
    liked: false,
  }

  const { album, name, artist, liked } = song;

  return (
    <div className="playercontrols__container">
      <div className='playercontrols'>

        <div className="playercontrols__left">
            <div className="playercontrols__img">
              <img src={ album.imageUrl } alt={ album.name } />
            </div>
            <div className='flex flex--column playercontrols__song-info'>
              <a className='text text--white hover--underline hover--white cursor-pointer' 
                href='#'>
                  { name }
              </a>
              <a className='text text--small hover--underline hover--white cursor-pointer' 
                href='#'>
                  { artist }
              </a>
            </div>
            <button className='playercontrols__like playercontrols__icon cursor--pointer '>
              {
                liked 
                  ? <LikedIcon className='' />
                  : <UnLikedIcon className='' />
              }
            </button>
        </div>

        <div className="playercontrols__center">
            
        </div>

        <div className="playercontrols__right">
          
        </div>
        
      </div>
    </div>
  )
}
