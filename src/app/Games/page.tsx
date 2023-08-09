import { Inter } from 'next/font/google'
import Error404 from '../components/Error404'
// Define the Inter font with the Latin subset
const inter = Inter({ subsets: ['latin'] })

export default function Games () {
 

  /*
  callouts 

  imageSrc
  imageAlt
  callout.href
  
  callout.name
  callout.description
  */
 
  //List of games
const callouts  = [
  {
    imageSrc: "https://i.imgur.com/rIher35.png",
    imageAlt: "Memotest image",
    href: "https://daianaarena.github.io/memoji-test/",
    name: "Memoji Test",
    description: "Emoji memo-test game."

  }

]

//<Error404/>
  return (
    <>
    <div className="flex-1 relative  bg-gray-900">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold main-text-color">Gamelist</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                  
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="text-base font-semibold text-white mt-6 ">
                  <a target="_blank" href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500 lg:mb-8">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}