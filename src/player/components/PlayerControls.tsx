
// SVG imported as React Components
import { useEffect, useMemo, useRef, useState } from 'react';
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
import { usePlayerStore } from '../../hooks';




export const PlayerControls = () => {

  // example objects
  const song =  {
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

  const { liked } = song;
  const { isQueueOpen, areLyricsOpen, isMuted, isRandomActived, repeatMode, timeLapsed, totalTime, volume } = playerBarInfo;

  
  const lapsedTimeFormated:string = useMemo<string>( () => msToSeconds(timeLapsed), [ timeLapsed ]); 
  const totalTimeFormated:string = useMemo<string>( () => msToSeconds(totalTime), [ timeLapsed ]); 
  const lapsedTimePercent:number = useMemo<number>( () =>  (timeLapsed / totalTime) * 100, [timeLapsed, totalTime]);
  
  const { currentTrack } = usePlayerStore();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audio = useRef<HTMLAudioElement>();
  
  const playAudio = () => {
    if(currentTrack && audio.current){
      audio.current.play();
      setIsPlaying(true);
    }
  }

  const pauseAudio = () => {
    if(currentTrack && audio.current){
      audio.current.pause();
      setIsPlaying(false);
    }
  }

  const togglePlay = () => {
    if(currentTrack && audio.current){
      isPlaying ? pauseAudio() : playAudio();
    }
  }

  const resetAudio = () => {
    if(currentTrack && audio.current){
      audio.current.currentTime = 0;
    }
  } 

  useEffect(() => {
    if(currentTrack && currentTrack.preview_url) {
      pauseAudio();
      resetAudio();

      const newAudio = new Audio(currentTrack.preview_url)
      audio.current = newAudio;

      playAudio();
    }
  }, [currentTrack])
  

  return (
    <div className="playercontrols__container">
      <div className={`playercontrols ${currentTrack === null ? 'playercontrols__nosong' : ''}`}>

        {/* LEFT SIDE */}
        <div className="playercontrols__left">
            <div className="playercontrols__img">
              <img src={ currentTrack?.album.images[0].url || '' } alt={ currentTrack?.album.name || '' } />
            </div>
            <div className='flex flex--column playercontrols__song-info'>
              <a className='text text--white hover--underline hover--white cursor-pointer' 
                href='#'>
                  { currentTrack?.name }
              </a>
              <a className='text text--small hover--underline hover--white cursor-pointer' 
                href='#'>
                  { currentTrack?.artists.map(artist => artist.name).join(', ') }
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
                <button 
                  className={`playercontrols__icon ${ isRandomActived && currentTrack ? 'playercontrols__icon--active': '' } `}
                  disabled={!currentTrack}
                  >
                    <RandomSvg />
                </button>

                <button 
                  className='playercontrols__icon  '
                  disabled={!currentTrack}
                >
                    <PrevSvg />
                </button>
                
                <button 
                  className='playercontrols__icon playercontrols__icon--playpause '
                  disabled={!currentTrack}
                  onClick={togglePlay}
                  >
                  {
                    isPlaying 
                      ? ( <PauseSvg /> )
                      : ( <PlaySvg /> )
                  }
                </button>
                
                <button 
                  className='playercontrols__icon  '
                  disabled={!currentTrack}
                  >
                    <NextSvg />
                </button>

                <button 
                  className={`playercontrols__icon ${ repeatMode !== 'DISABLED' && currentTrack ? 'playercontrols__icon--active': '' } `}
                  disabled={!currentTrack}
                  >
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
                      <div className='progress-bar__bar progress-bar__bar--song' style={{width: `${lapsedTimePercent}%`}}>
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
            className={`
              playercontrols__icon playercontrols__icon--microphone playercontrols__icon--expand 
              ${ areLyricsOpen && currentTrack ? 'playercontrols__icon--active': '' }
              `}
            >
              <MicrophoneSvg />
          </button>

          <button 
            className={`playercontrols__icon  playercontrols__icon--expand ${ isQueueOpen && currentTrack ? 'playercontrols__icon--active': ''  }`}
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
