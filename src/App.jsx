import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Authlayout from './layutes/Authlayout'
import { Login } from './pages/auth/Login'
import Dashbordlayute from './layutes/Dashbordlayute'
import Dashbord from './pages/dashbord/Dashbord'

const App = () => {
  return (
    <>
      <Routes> 
        <Route element = {<Authlayout/>}>
          <Route path="/login" element={<Login/>}/>
        </Route> 

        <Route path='/' element = {<Dashbordlayute/>}>
          <Route path="/dashbord" element={<Dashbord/> }/>
        </Route>

      </Routes>
    </>
  )
}

export default App