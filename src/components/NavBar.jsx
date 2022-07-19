import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsFillBasket2Fill } from 'react-icons/bs'
import { ImBin2 } from 'react-icons/im'
import { Link } from "react-router-dom";

export const NavBar = ({ emptyCart }) => {
  return (
    <nav className='h-12 w-full flex items-center bg-slate-500'>
      <ul className='ml-6 flex'>
        <li>
          <Link to="/" className=''><span className='cursor-pointer'><AiFillHome size={25} /></span></Link>
        </li>
        <li>
          <Link to="/shoppingcart"><span className='cursor-pointer'><BsFillBasket2Fill size={25} /></span></Link>
        </li>
        <li>
          <button onClick={() => emptyCart()}><span><ImBin2 size={25} /></span></button>
        </li>
      </ul>
    </nav>
  )
}
