import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div >
        <div className='product_class'>
        <img className='pimg' src={product.src}/>
        <span className='pname'>{product.name}</span>
        <button className='pprice'>{product.price}</button>
        </div>
    </div>
  )
}

export default ProductCard