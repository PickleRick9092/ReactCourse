import React from 'react'
import { useState } from 'react'


const Card = ({data}) => {

    //use only in fucntion (component) body
const [myPrice , setMyPrice] = useState(data.price)
    
    const clickhandler = () =>{
        alert("click shod")
    }
 
  return (
    <div>
        <h1>{data.type}</h1>
        <h1>{data.price}</h1>
        <button onClick={clickhandler}>change</button>
    </div>
  )
}

export default Card