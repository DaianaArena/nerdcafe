import { Inter } from 'next/font/google'
import Error404 from '../components/Error404'
// Define the Inter font with the Latin subset
const inter = Inter({ subsets: ['latin'] })

export default function Dashboard () {
 
 
  //<Error404/>
 

  

  return (
    <>
    
    <div className="flex-1 flex justify-center items-center w-full relative overflow-hidden mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 bg-red-400">

      <div className="flex w-full h-full justify-center items-center bg-blue-400" >

        <div className=" w-80">
          <iframe className="px-4 sm:static sm:px-6 lg:px-8" src="https://open.spotify.com/embed/playlist/1tVd8oXBghV0IjtJHX0wSv?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div> 

        <div className="flex-1 h-full bg-green-400">
          a

        </div>
      </div>    
    
    
    </div>
    
    </>
   
  )
}