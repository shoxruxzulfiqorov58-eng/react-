import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Authlayout from './layutes/Authlayout'
import { Login } from './pages/auth/Login'
import Dashbordlayute from './layutes/Dashbordlayute'
import Dashbord from './pages/dashbord/Dashbord'
import Profile from './pages/dashbord/Profile'
import Courses from './pages/dashbord/Courses'
import CoursesDetails from './pages/dashbord/CoursesDetails'
import MyLearning from './pages/dashbord/MyLearning'
import Settings from './pages/dashbord/Settings'

const App = () => {
  return (
    <>
      <Routes> 
        <Route element = {<Authlayout/>}>
          <Route path="/login" element={<Login/>}/>
        </Route> 

        <Route path='/' element = {<Dashbordlayute/>}>
          <Route path="/dashbord" element={<Dashbord/> }/>
          <Route path='courses' element={<Courses/> }/>
          <Route path='course/:id' element={<CoursesDetails/>}/>
          <Route path='my-learning' element={<MyLearning/>}/>
          <Route path='settings'element={<Settings/>}/>

          <Route path="/profile" element={<Profile/> }/>
        </Route>

      </Routes>
    </>
  )
}

export default App