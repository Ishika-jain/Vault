import React from 'react'
import  Navbar  from './Navibar'
import Footer from './Footer'
import Center from './Center'
import  '../index.css'


const MainSection = () => {
  return (
    <div style={{width: "90vw"}}>
      <Navbar/> 
      <Center/>
      
    </div>
  )
}

export default MainSection