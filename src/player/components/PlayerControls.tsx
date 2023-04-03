
// SVG imported as React Components
import { useMemo } from 'react';
import {
  LikedSvg,
  UnLikedSvg,
  MicrophoneSvg,
  PlaylistSvg,
  ConnectSvg,
  VolumeSvg,
  ExpandSvg,
  PrevSvg,
  NextSvg,
  PlaySvg,
  RandomSvg,
  RepeatDisabledSvg,
  VolumeMutedSvg,
  RepeatOneSvg,
  PauseSvg,
} from '../../assets/svg';
import { msToSeconds } from '../../helpers/msToSeconds';

import './PlayerControls.scss';




export const PlayerControls = () => {

  // example objects
  const song =  {
    album: {
      imageUrl: 'https://i.scdn.co/image/ab67616d000048511bd6d088d3d81972af4cb81d',
      name: 'album-name',
    },
    name: 'Cool kids',
    artist: 'Harmless',
    liked: true,
  }
  const playerBarInfo = {
    timeLapsed: 10000,
    totalTime: 60000,
    isPlaying: true,
    isRandomActived: true,
    areLyricsOpen: true,
    isQueueOpen: false,
    isMuted: false,
    repeatMode: 'DISABLED', // ALL, ONE, 'DISABLED'
    volume: 37,
  }

  const { album, name, artist, liked } = song;
  const { isPlaying, isQueueOpen, areLyricsOpen, isMuted, isRandomActived, repeatMode, timeLapsed, totalTime, volume } = playerBarInfo;


  const lapsedTimeFormated:string = useMemo<string>( () => msToSeconds(timeLapsed), [ timeLapsed ]); 
  const totalTimeFormated:string = useMemo<string>( () => msToSeconds(totalTime), [ timeLapsed ]); 
  const lapsedTimePercent:number = useMemo<number>( () =>  (timeLapsed / totalTime) * 100, [timeLapsed, totalTime]);

  return (
    <div className="playercontrols__container">
      <div className='playercontrols'>

        {/* LEFT SIDE */}
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
            <button className={`playercontrols__icon ${liked ? 'playercontrols__icon--liked': ''}`}>
              {
                liked 
                  ? <LikedSvg />
                  : <UnLikedSvg />
              }
            </button>
        </div>

        {/* CENTER */}
        <div className="playercontrols__center">
              <div className='playercontrols__song-buttons'>
                <button className={`playercontrols__icon ${ isRandomActived ? 'playercontrols__icon--active': '' } `}>
                    <RandomSvg />
                </button>

                <button className='playercontrols__icon  '>
                    <PrevSvg />
                </button>
                
                <button className='playercontrols__icon playercontrols__icon--playpause '>
                  {
                    isPlaying 
                      ? ( <PauseSvg /> )
                      : ( <PlaySvg /> )
                  }
                </button>
                
                <button className='playercontrols__icon  '>
                    <NextSvg />
                </button>

                <button className={`playercontrols__icon ${ repeatMode !== 'DISABLED' ? 'playercontrols__icon--active': '' } `}>
                    {
                      repeatMode !== 'ONE'
                        ? ( <RepeatDisabledSvg /> )
                        : ( <RepeatOneSvg /> )
                    }
                </button>
              </div>
              
              <div className="playercontrols__song-progress">
                <div className='text text--small'>
                  { lapsedTimeFormated }
                </div>

                <div className="progress-bar__container">
                  <div className='progress-bar'>
                      <div className='progress-bar__bar' style={{width: `${lapsedTimePercent}%`}}>
                        <div className="progress-bar__controller">
                        </div>
                      </div>
                  </div>
                </div>

                <div className='text text--small'>
                  { totalTimeFormated }
                </div>
              </div>
        </div>

        {/* RIGHT */}
        <div className="playercontrols__right">
          <button 
            className={`playercontrols__icon playercontrols__icon--expand ${ areLyricsOpen ? 'playercontrols__icon--active': '' }`}
            >
              <MicrophoneSvg />
          </button>

          <button 
            className={`playercontrols__icon  playercontrols__icon--expand ${ isQueueOpen ? 'playercontrols__icon--active': ''  }`}
            >
              <PlaylistSvg />
          </button>

          <button 
            className={`playercontrols__icon playercontrols__icon--expand`}
            >
              <ConnectSvg />
          </button>

          <button className='playercontrols__icon '>
            { isMuted
              ? (<VolumeMutedSvg />)
              : (<VolumeSvg />)
            }
          </button>

          <div className="progress-bar__container--volume">
            <div className='progress-bar progress-bar'>
                <div className='progress-bar__bar' style={{width: `${volume}%`}}>
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
