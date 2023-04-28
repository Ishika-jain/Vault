import React from 'react'
import  Sidebar from './Sidebar';
import MainSection from './MainSection';
import  './Layout.css'

const Homepage = () => {
  return (
    <div style={{display: "flex"}}>
        <Sidebar toggle="false"/>
        <MainSection/>
    </div>
  )
}

export default Homepage