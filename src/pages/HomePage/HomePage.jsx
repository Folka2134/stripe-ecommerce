import React from 'react'
import { ContentContainer } from '../../components/ContentContainer'
import { ProductList } from '../../pages/HomePage/ProductList'

export const HomePage = ({ products, featuredProducts }) => {
  return (
    <div className='px-12 h-screen w-full bg-slate-100'>
      <ContentContainer title="Products" children={<ProductList products={products} />} />
      <ContentContainer title="Featured Products" children={<ProductList products={featuredProducts} />} />
    </div>
  )
}
