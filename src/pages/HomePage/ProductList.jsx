import React from 'react'
import { Product } from './Product'

// import { products } from '../../data/p roducts'

export const ProductList = ({ products }) => {
  // console.log(products[0].image.url);
  return (
    <div className='flex'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
