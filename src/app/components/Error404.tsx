import React from 'react'
import Image from 'next/image'
import errorCafe from '/public/404.png'

function Error404() {
  return (
    <div className="flex flex-col h-screen">
    <main className="grid min-h-full place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          
          <div >
          <Image
              className="h-24 w-auto m-auto" 
              src={errorCafe}
              alt="Nerd café 404"
              width={900}
              height={900}
            />
          </div>
          
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Oops! We have had a sugar crisis.</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Drink a fresh pot of coffee while we sort it out.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md main-bg-color px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm "
            >
              Go back home
            </a>
            <a href="https://daianaarena.vercel.app/contact" className="text-sm font-semibold text-white" target='_blank'>
              Contact me <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Error404