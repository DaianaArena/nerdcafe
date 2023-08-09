'use client'
import { createContext } from 'react'
import { Inter } from 'next/font/google'
import Error404 from '../components/Error404'
// Define the Inter font with the Latin subset
import {FaPlay, FaPause, FaVolumeUp, FaVolumeMute} from 'react-icons/fa';
const inter = Inter({ subsets: ['latin'] })

import Audioplayer from '../components/Audioplayer';



export default function Dashboard () {
 
 
 
  //overflow-hidden

  return (
    <>
    
    <div className="flex-1 flex justify-center items-center w-full relative  mx-auto  px-4 sm:static sm:px-6 lg:px-8  ">

      <div className="flex flex-col  w-full h-full justify-center items-center  lg:flex-row" >

        <div className=" w-80 my-4 md:my-10">
          <iframe className="px-4 sm:static sm:px-6 lg:px-8" src="https://open.spotify.com/embed/playlist/1tVd8oXBghV0IjtJHX0wSv?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div> 

        <div className="flex-1  w-72 flex flex-col justify-center items-end h-full lg:w-80 ">
          

          <Audioplayer   src={"http://arenadistribuidora.com/wp-content/uploads/2023/07/rain-sound-on-window-with-thunder-soundsiheavy-rain-for-sleep-study-and-relaxation-meditation.mp3"} name={"Rain sound"}/>
          
          <Audioplayer src={"http://arenadistribuidora.com/wp-content/uploads/2023/07/coffee-shop-sounds-for-study-and-concentration.mp3"} name={"Coffee shop sound"}/>
          
          <Audioplayer src={"http://arenadistribuidora.com/wp-content/uploads/2023/07/burning-fireplace-and-crackling-fire-sounds-no-music.mp3"} name={"Fireplace sound"}/>
          
          
        </div>
      </div>    
    
    
    </div>
    
    </>
   
  )
}
