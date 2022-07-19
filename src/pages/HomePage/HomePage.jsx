import React from 'react'
import { ContentContainer } from '../../components/ContentContainer'
import { ProductList } from '../../pages/HomePage/ProductList'

export const HomePage = ({ products, featuredProducts, handleAddToCart }) => {
  return (
    <div className='px-12 h-screen w-full'>
      <ContentContainer title="Products" children={<ProductList products={products} handleAddToCart={handleAddToCart} />} />
      <ContentContainer title="Featured Products" children={<ProductList products={featuredProducts} handleAddToCart={handleAddToCart} />} />
    </div>
  )
}
