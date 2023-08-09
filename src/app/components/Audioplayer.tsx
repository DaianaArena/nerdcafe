import React from 'react'
import {FaPlay, FaPause, FaVolumeUp, FaVolumeMute} from 'react-icons/fa';

import {
  PlayerProvider,
  Player,
  PlayerSlider,
  VolumeSlider,
} from "headless-audioplayer-react";
import "headless-audioplayer-react/dist/cjs/css/slider.css";

interface AudioplayerProps {
    name: string;
    src: string; 
  }


  function Audioplayer(props: AudioplayerProps) {  
  return (
    <div className="w-full  md:w-2/3  xl:w-1/2  my-4 p-2 shadow-xl ring-1 ring-zinc-900 ring-opacity-10 rounded-md bg-custom-gray">
      <PlayerProvider
        src={props.src}
        loop={true}
        onPause={() => {}}
        onPlay={() => {}}
      >
        <Player>
          {(context) => {
            return (
              <>
                <div className="w-full flex  justify-center items-center">
                

                  <PlayerSlider
                    downloadProgress={context.downloadProgress}
                    onChange={context.onSliderChange}
                    progress={context.progress}
                  />
                </div>

                <div className="w-full  flex-col lg:flex-row gap-y-2 lg:gap-y-0 items-center lg:items-start justify-between flex mt-2 sm:items-center">
                  <div className='flex items-center'>

                    <div className='ml-2'>
                      <p className='font-semibold w-40 text-white text-center lg:text-left'>{props.name}</p>
                    </div>
                  </div>

                  <button onClick={context.togglePlay}>
                    {context.isPlaying ? <FaPause className=' text-white'/> : <FaPlay className=' text-white'/>}
                  </button>

                  <div className='flex justify-between   items-center'>
                  

                  <div className='flex justify-end   items-center'>
                  <button className='mr-2' onClick={context.toggleMute}>
                    {context.mute.state == "muted" ?  <FaVolumeMute className=' text-white'/> : <FaVolumeUp className=' text-white'/> }
                  </button>

                  <div className="w-32 ">
                  <VolumeSlider
                    onChange={context.onSliderVolumeChange}
                    volume={context.volume}
                  />
                  </div>
                  </div>
                  </div>
                
                </div>

                
              </>
            );
          }}
        </Player>
      </PlayerProvider>
      
    </div>
  )
}

export default Audioplayer