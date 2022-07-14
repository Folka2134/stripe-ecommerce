import React from 'react'

export const ContentContainer = (title) => {
  console.log(title);
  return (
    <div className='pt-12 h-auto w-full '>
      <header className='ml-6h-10 grid items-center border-2 border-black bg-blue-200'><span className='ml-6'>{title.title}</span></header>
      {/* ProductList */}
    </div>
  )
}
