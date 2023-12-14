import React from 'react'
import { useState } from 'react'

const Form = () => {
    // const [mytype, setMytype] = useState('')
    // const [myprice, setMyPrice] = useState(0)
    const [myFormData , setMyFormData] = useState({type:'' , price:0})
    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(myFormData)

   
    }
    const typeChangeHandler = (e) =>{
      //  setMytype(e.target.value)
      setMyFormData({...myFormData , type: e.target.value})
       
    }  
    const priceChangeHandler = (e) =>{
        setMyFormData({...myFormData ,  price:e.target.value})
       
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
      <input type="text" placeholder='cost type' onChange={typeChangeHandler}/>
      <input type="number" placeholder='cost price' onChange={priceChangeHandler}/>
      <button>add</button>

        </form>
    </div>
  )
}

export default Form
