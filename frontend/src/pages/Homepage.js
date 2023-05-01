import React from 'react'
import  Sidebar from '../Components/Sidebar';
import MainSection from '../Components/MainSection';
import  '../index.css'
const Homepage = () => {
  return (
    <div style={{display: "flex"}}>
        <Sidebar toggle="false"/>
        <MainSection/>
    </div>
  )
}

export default Homepage