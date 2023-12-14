import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './Component/ProductCard'

function App() {
const products = [
  {name:"mobile", price:1000, src:"src/assets/img/mobile.webp"},
  {name:"headphone", price:2000, src:"src/assets/img/headphone.webp"},
  {name:"watch", price:3000, src:"src/assets/img/watch.webp"},
]

  return (
   products.map((item)=>{
return <ProductCard product={item}/>
   }

   )
   
  )
}

export default App
