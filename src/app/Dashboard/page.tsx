'use client'
import { createContext } from 'react'
import { Inter } from 'next/font/google'
import Error404 from '../components/Error404'
// Define the Inter font with the Latin subset
import {FaPlay, FaPause, FaVolumeUp, FaVolumeMute} from 'react-icons/fa';
const inter = Inter({ subsets: ['latin'] })
import {
  PlayerProvider,
  Player,
  PlayerSlider,
  VolumeSlider,
} from "headless-audioplayer-react";
import "headless-audioplayer-react/dist/cjs/css/slider.css";
import { useState } from "react";

export default function Dashboard () {
 
 
  //<Error404/>
 
  

  return (
    <>
    
    <div className="flex-1 flex justify-center items-center w-full relative overflow-hidden mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 bg-red-400">

      <div className="flex w-full h-full justify-center items-center bg-blue-400" >

        <div className=" w-80">
          <iframe className="px-4 sm:static sm:px-6 lg:px-8" src="https://open.spotify.com/embed/playlist/1tVd8oXBghV0IjtJHX0wSv?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div> 

        <div className="flex-1  flex flex-col justify-center items-end h-full bg-green-400">
          a

          <div className="w-1/2 p-2 shadow-xl ring-1 ring-zinc-900 ring-opacity-10 rounded-md bg-gray-700">
      <PlayerProvider
        src={"https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3"}
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

                <div className="w-full flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-start justify-between flex mt-2 sm:items-center">
                  <div className='flex items-center'>

                    <div className='ml-2'>
                      <p className='font-semibold text-white'>Rain sounds</p>
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
          
          
          
        </div>
      </div>    
    
    
    </div>
    
    </>
   
  )
}
/*

<div className="w-32 flex max-w-lg mt-10 justify-center items-center">
                <VolumeSlider
                  onChange={context.onSliderVolumeChange}
                  volume={context.volume}
                />
                <button onClick={context.toggleMute}>
                  {context.mute.state == "muted" ?  <FaVolumeMute/> : <FaVolumeUp/> }
                </button>
              </div>

*/