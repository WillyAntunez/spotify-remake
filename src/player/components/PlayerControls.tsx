
import LikedSvg from '../../assets/svg/liked.svg';
import UnLikedSvg from '../../assets/svg/unliked.svg';
import MicrophoneSvg from '../../assets/svg/microphone.svg';
import PlaylistSvg from '../../assets/svg/playlist.svg';
import ConnectSvg from '../../assets/svg/connect.svg';
import VolumeSvg from '../../assets/svg/volume.svg';
import ExpandSvg from '../../assets/svg/expand.svg';

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
            <button className='playercontrols__icon '>
              {
                liked 
                  ? <LikedSvg />
                  : <UnLikedSvg />
              }
            </button>
        </div>

        <div className="playercontrols__center">
            
        </div>

        <div className="playercontrols__right">
          <button className='playercontrols__icon playercontrols__icon--expand '>
              <MicrophoneSvg />
          </button>

          <button className='playercontrols__icon playercontrols__icon--expand '>
              <PlaylistSvg />
          </button>

          <button className='playercontrols__icon playercontrols__icon--expand '>
              <ConnectSvg />
          </button>

          <button className='playercontrols__icon '>
              <VolumeSvg />
          </button>
          <div className="progress-bar__container">
            <div className='progress-bar'>
                <div className='progress-bar__bar' style={{width: '50%'}}>
                  <div className="progress-bar__controller">

                  </div>
                </div>
            </div>
          </div>
          <button className='playercontrols__icon'>
              <ExpandSvg />
          </button>
        </div>
        
      </div>
    </div>
  )
}
