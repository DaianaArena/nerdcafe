import { Inter } from 'next/font/google'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'
import Error404 from '../components/Error404'
// Define the Inter font with the Latin subset
const inter = Inter({ subsets: ['latin'] })



async function getData() {
  const res = await fetch('https://newsapi.org/v2/everything?q=gaming%20OR%20ai&apiKey=ad6fcdeb48ef4523afc5307fe680da5b&pageSize=10&page=1&sortBy=publishedAt&language=en&domains=techcrunch.com')
  


  if (res.status != 200) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function News () {
  const data = await getData()
  const news = data.articles
   
 

  if (data.status == 'error') {
    return (
      <>
      <Error404/>
      </>
    )
  } else {
  return (
    <>
    <div className="flex-1 relative  bg-gray-900">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold main-text-color">NerdieNews</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {news.map((article) => (
              <div key={article.source.id} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                  
                    src={article.urlToImage}
                    alt={article.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="text-base font-semibold text-white mt-6 ">
                  <a target="_blank" href={article.url}>
                    <span className="absolute inset-0" />
                    {article.title}
                  </a>
                </h3>
                <p className="text-sm text-gray-500 lg:mb-8">{article.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
    
  )
  }
}

//