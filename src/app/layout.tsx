import './globals.css'
import Navbar from './components/Navbar'

//Tab info
export const metadata = {
  title: 'Nerd Café',
  description: "Café cozy creado por Daiana Arena",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      {/*Head meta data for social media*/}
      <head>
      
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>

      <meta name="title" content="Cafe Nerd"/>
      <meta name="description" content="Sumérgete en una experiencia única mientras disfrutas de la tranquilidad y comodidad que solo un lugar acogedor puede brindar."/>


      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://daianaarena.vercel.app/"/>
      <meta property="og:title" content="Cafe Nerd"/>
      <meta property="og:description" content="Sumérgete en una experiencia única mientras disfrutas de la tranquilidad y comodidad que solo un lugar acogedor puede brindar."/>
      <meta property="og:image" content="https://i.imgur.com/9HFm2Wo.png"/>


      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://daianaarena.vercel.app/"/>
      <meta property="twitter:title" content="Cafe Nerd"/>
      <meta property="twitter:description" content="Sumérgete en una experiencia única mientras disfrutas de la tranquilidad y comodidad que solo un lugar acogedor puede brindar."/>
      <meta property="twitter:image" content="https://i.imgur.com/9HFm2Wo.png"/>


      </head>

      <body className="flex flex-col h-screen bg-gray-900">

        <Navbar/>
        {children}
        
      </body>
    </html>
  )
}
