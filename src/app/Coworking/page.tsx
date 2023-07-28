import { Inter } from 'next/font/google'
import Error404 from '../components/Error404'
// Define the Inter font with the Latin subset
const inter = Inter({ subsets: ['latin'] })
import {FaPlay, FaDiscord} from 'react-icons/fa';


export default function Coworking () {
 
  //<Error404/>
  //<feature.icon className="absolute left-1 top-1 h-5 w-5 main-text-color"  />

  
  const features = [
    {
      name: 'Motivating and focused environment.',
      description:
        "The shared atmosphere is conducive to maintaining high levels of motivation and concentration. ",
        icon: FaPlay,
    },
    {
      name: 'Networking opportunities.',
      description: "A valuable opportunity to make connections, share ideas and knowledge, and even find collaborators or new clients.",
      icon: FaPlay,
    },
  ]

  return (
    <div className="overflow-hidden  py-2 flex-1   bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 main-text-color">Sharing in community</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Online coworking space</p>
              <p className="mt-6 text-lg leading-8 text-gray-500">
              We are a community of people passionate about technology looking to facilitate coworking through different initiatives that promote collaboration and knowledge sharing.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-500 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                    <feature.icon className="absolute left-1 top-1 h-5 w-5 main-text-color" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <a
                href="https://discord.gg/sTEWa4te"
                className="inline-block rounded-md border border-transparent main-bg-color px-8 py-3 text-center font-medium text-white mt-8"
              >
                
                <FaDiscord className="inline-block mr-3"/>
                Join Now
                
                
              </a>
            </div>
          </div>
          <img
            src="https://i.imgur.com/duJlgy1.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}