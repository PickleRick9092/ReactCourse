import React from 'react'
import { useState } from 'react'


const Card = ({data}) => {

    //use only in fucntion (component) body
const [myPrice , setMyPrice] = useState(data.price)
    
    const IncreaseFunc = () =>{
        setMyPrice(myPrice+1)
    }
    const DecreaseFunc = () =>{
      setMyPrice(myPrice-1)
    }
  return (
    <div>
        <h1>{data.type}</h1>
        <h1>{myPrice}</h1>
        <button onClick={IncreaseFunc}>+</button>
        <button onClick={DecreaseFunc}>-</button>
    </div>
  )
}

export default Card