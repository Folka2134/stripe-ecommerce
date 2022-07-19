import React from 'react'
import { ContentContainer } from '../../components/ContentContainer'
import { ProductList } from '../HomePage/ProductList'

export const ShoppingCart = ({ cart }) => {
  console.log(cart);
  return (
    <div className='px-12 h-screen w-full bg-slate-100'>
      <ContentContainer title="Products" children={<ProductList products={cart} />} />
    </div>
  )
}
