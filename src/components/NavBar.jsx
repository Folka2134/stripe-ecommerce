import React from 'react'
import { BsFillBasket2Fill } from 'react-icons/bs'

export const NavBar = () => {
  return (
    <nav className='mb-12 h-12 w-full flex items-center bg-slate-500'>
      <span className='ml-6 cursor-pointer'><BsFillBasket2Fill size={25} /></span>
    </nav>
  )
}
