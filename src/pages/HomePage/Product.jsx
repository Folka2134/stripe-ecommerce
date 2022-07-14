import React from 'react'

export const Product = ({ product }) => {
  return (
    <div className='mt-1 h-72 w-72 flex flex-col justify-evenly bg-white' >
      <img className='h-full w-full object-cover' src={product.image} alt="pic" />
      <p>{product.name}</p>
      <p>{product.price}</p>
      <button>add</button>
    </div>
  )
}
