import React from 'react'
import Navbar from '../global/Navbar/Navbar'

const Layout = ({children}) => {
  return (
    <>
      <Navbar/>
      {children}
    </>
  )
}

export default Layout
