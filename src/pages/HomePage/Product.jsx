import React from 'react'

export const Product = ({ product }) => {
  console.log(product);
  return (
    <div className='mt-1 h-72 w-72 flex flex-col justify-evenly bg-white' >
      <img className='h-full w-full object-cover' src={product.image.url} alt="pic" />
      <p>{product.name}</p>
      <p>{product.price.formatted_with_symbol}</p>
      <button>add</button>
    </div>
  )
}
