import React from 'react'
import Navbar from './component/Navbar'
import Login from './component/user/Login'
import Notification from './component/Notification'
import Loading from './component/Loading'

const App = () => {
  return (
    <>
    <Loading />
    <Notification />
    <Navbar/>
    <Login/>
  </>
  )
   
  
}

export default App
