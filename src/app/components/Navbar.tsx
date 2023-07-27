import React from 'react'
import Image from 'next/image'
import Logo from '/public/nerd_cafe_logo.png'
import Link from 'next/link'

//clases select page link 

//desktop
//<a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
//mobile
//<a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
                          

//List of pages in this project
const Links = [
  {
    label: "Home",
    route: "/"
  },
  {
    label: "Dashboard",
    route: "/dashboard"
  },
  {
    label: "Games",
    route: "/games"
  },
  {
    label: "News",
    route: "/news"
  }  

]




const Navbar = () => {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
            <Image
              className="h-8 w-auto" 
              src={Logo}
              alt="Nerd café"
              width={100}
              height={100}
            />
              
            </div>
            <ul className="hidden sm:ml-6 sm:block">
              <ul className="flex space-x-4">
                {Links.map(({ label, route}) => (

                <li key={route} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  <Link href={route}>{label}</Link>
                </li>

                ))}
                </ul>
            </ul>
          </div>
          
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
        <ul className="">
                {Links.map(({ label, route}) => (

                <li key={route} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                  <Link href={route}>{label}</Link>
                </li>

                ))}
          </ul>
         </div>
      </div>
    </div>
  )
}

export default Navbar