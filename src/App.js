import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { AuthContextprovider } from './Context/AuthContext'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Account from './pages/Account'
import ProtectedRout from './components/ProtectedRout'


function App() {
  return (
  <>
  <AuthContextprovider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/LogIn' element={<LogIn/>}/>
      <Route path='/SignUp' element ={<SignUp/>}/>
      <Route path='/Account' element={<ProtectedRout><Account/></ProtectedRout>}/>
    </Routes>

  </AuthContextprovider>



   
  </>
  )
}

export default App
