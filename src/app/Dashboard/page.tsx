'use client'
import { createContext } from 'react'
import { Inter } from 'next/font/google'
import Error404 from '../components/Error404'
// Define the Inter font with the Latin subset
import {FaPlay, FaPause, FaVolumeUp, FaVolumeMute} from 'react-icons/fa';
const inter = Inter({ subsets: ['latin'] })

import Audioplayer from '../components/Audioplayer';



export default function Dashboard () {
 
 
  //<Error404/>
 
  

  return (
    <>
    
    <div className="flex-1 flex justify-center items-center w-full relative overflow-hidden mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 ">

      <div className="flex w-full h-full justify-center items-center " >

        <div className=" w-80">
          <iframe className="px-4 sm:static sm:px-6 lg:px-8" src="https://open.spotify.com/embed/playlist/1tVd8oXBghV0IjtJHX0wSv?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div> 

        <div className="flex-1  flex flex-col justify-center items-end h-full ">
          

          <Audioplayer   src={"http://arenadistribuidora.com/wp-content/uploads/2023/07/rain-sound-on-window-with-thunder-soundsiheavy-rain-for-sleep-study-and-relaxation-meditation.mp3"} name={"Rain sound"}/>
          
          <Audioplayer src={"http://arenadistribuidora.com/wp-content/uploads/2023/07/coffee-shop-sounds-for-study-and-concentration.mp3"} name={"Coffee shop sound"}/>
          
          <Audioplayer src={"http://arenadistribuidora.com/wp-content/uploads/2023/07/burning-fireplace-and-crackling-fire-sounds-no-music.mp3"} name={"Fireplace sound"}/>
          
          
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