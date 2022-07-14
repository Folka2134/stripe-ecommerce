import React from 'react'
import { Product } from './Product'

import { products } from '../../data/products'

export const ProductList = () => {
  return (
    <div className='flex'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
