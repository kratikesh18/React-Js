import React from 'react'
import './App.css'
import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  

  return (
    // so the below are using the context so they should  be in the wrapper or context 
    <UserContextProvider>
    <div className="flex flex-col gap-[1rem] items-center justify-center">
      <h1>Hey User</h1>    
    <Login/>
    <Profile/>
    </div>
    </UserContextProvider>
  )
}

export default App
