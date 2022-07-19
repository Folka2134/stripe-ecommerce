import React from 'react'
import { Product } from './Product'

// import { products } from '../../data/p roducts'

export const ProductList = ({ products, handleAddToCart }) => {
  // console.log(products[0].image.url);
  return (
    <div className='flex w-full'>
      {products.map((product) => (
        <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  )
}
