import { Inter } from 'next/font/google'
import Error404 from '../components/Error404'
// Define the Inter font with the Latin subset
const inter = Inter({ subsets: ['latin'] })

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function News () {
  const data = await getData()
  console.log(data);
  
  return (
    <>
    <div>{data.userId}</div>
    <Error404/>
    </>
    
  )
}

//