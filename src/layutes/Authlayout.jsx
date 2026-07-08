import React from 'react'
import { Outlet } from 'react-router-dom'

const Authlayout = () => {
  return (
    <main className='min-h-screen bg-slate-100 flex justify-center items-center  '>
      <Outlet/>
    </main>
  )
}

export default Authlayout