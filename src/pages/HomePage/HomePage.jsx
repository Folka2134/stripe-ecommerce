import React from 'react'
import { ContentContainer } from '../../components/ContentContainer'
import { NavBar } from '../../components/NavBar'

export const HomePage = () => {
  return (
    <div className='px-12 h-screen w-full bg-slate-100'>
      <NavBar />
      <ContentContainer />
    </div>
  )
}
