import React from 'react'
import { ProductList } from '../pages/HomePage/ProductList'

export const ContentContainer = ({ title, products }) => {
  return (
    <div className='pt-12 h-56 w-full '>
      <header className='ml-6h-10 grid items-center border-2 border-black bg-blue-200'><span className='ml-6'>{title}</span></header>
      <ProductList products={products} />
    </div>
  )
}
