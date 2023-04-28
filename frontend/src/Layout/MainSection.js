import React from 'react'
import  Navbar  from './Navibar'
import Footer from './Footer'
import Center from './Center'
import  './Layout.css'


const MainSection = () => {
  return (
    <div style={{width: "100vw"}}>
      <Navbar/> 
      <Center/>
      <Footer/>
    </div>
  )
}

export default MainSection