'use client'
import { createContext } from 'react'
import { Inter } from 'next/font/google'
import Error404 from '../components/Error404'
// Define the Inter font with the Latin subset
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
 
  const [src, setSrc] = useState(
    "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3"
  );

  const changeSrc = () => {
    setSrc((prev) =>
      prev ==
      "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3"
        ? "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3"
        : "https://audioplayer.madza.dev/Madza-Persistence.mp3"
    );
  };

  return (
    <>
    
    <div className="flex-1 flex justify-center items-center w-full relative overflow-hidden mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 bg-red-400">

      <div className="flex w-full h-full justify-center items-center bg-blue-400" >

        <div className=" w-80">
          <iframe className="px-4 sm:static sm:px-6 lg:px-8" src="https://open.spotify.com/embed/playlist/1tVd8oXBghV0IjtJHX0wSv?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div> 

        <div className="flex-1 h-full bg-green-400">
          a

          <div className="w-full p-4 shadow-xl ring-1 ring-zinc-900 ring-opacity-10 rounded-md bg-gray-400">
      <PlayerProvider
        src={src}
        loop={true}
        onEnded={() => {
          changeSrc();
        }}
        onPause={() => {}}
        onPlay={() => {}}
      >
        <Player>
          {(context) => {
            return (
              <div className="w-full max-w-lg mt-10">
                <PlayerSlider
                  downloadProgress={context.downloadProgress}
                  onChange={context.onSliderChange}
                  progress={context.progress}
                />
                <button onClick={context.togglePlay}>
                  {context.isPlaying ? "Pause" : "Play"}
                </button>
                <p>{context.timestamp.current}</p>
                <p>{context.timestamp.total}</p>
                <button onClick={context.increaseVolume}>+1</button>
                <button onClick={context.decreaseVolume}>-1</button>
                <VolumeSlider
                  onChange={context.onSliderVolumeChange}
                  volume={context.volume}
                />
                <button onClick={context.toggleMute}>
                  {context.mute.state == "muted" ? "Unmute" : "Mute"}
                </button>
              </div>
            );
          }}
        </Player>
      </PlayerProvider>
      <button onClick={changeSrc}>Change src</button>
    </div>
          
          
          
        </div>
      </div>    
    
    
    </div>
    
    </>
   
  )
}