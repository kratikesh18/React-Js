import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import {Outlet} from 'react-router-dom'
function Layout() {
  return (
    <>
        <Header/>
        {/* we want to add dynamically componnetns  so ue use outlats */}
        <Outlet/>   

        <Footer/>
    </>
  )
}

export default Layout