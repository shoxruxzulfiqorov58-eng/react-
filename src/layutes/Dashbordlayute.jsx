import React from 'react'
import Saidbar from '../componets/Saidbar'
import Header from '../componets/Header'
import { Outlet } from 'react-router-dom'

const Dashbordlayute = () => {
  return (
    <div className='flex min-h-screen bg-slate-100'>
      <Saidbar/>
      <div className='flex flex-col border flex-1 '>
        <Header/>
        <main className='flex-1 p-8 '>
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default Dashbordlayute