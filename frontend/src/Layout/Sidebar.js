import React from 'react'
import  './Layout.css'
import logo from "../images/logog.png"


const Sidebar = (props) => {
  return (
    <div className='sidebar' style={{borderRight:"1px solid black"}}>
  <div style={{height: "10.1%", background: "white", borderBottom:"1px solid black", display: "flex"}}>
    <img src={logo} alt='haha' style={{width: "6rem"}}></img>
    <div>ham</div>
  </div> 
      <div style={{height:"10%", borderBottom:"1px solid black", textAlign:"center", justifyContent:"center"}}>Docs</div>
      <div style={{height:"10%", borderBottom:"1px solid black", textAlign:"center", justifyContent:"center"}}>Profile</div>
      <div style={{height:"10%", borderBottom:"1px solid black", textAlign:"center", justifyContent:"center"}}>Projects</div>
      <div style={{height:"10%", borderBottom:"1px solid black", textAlign:"center", justifyContent:"center"}}>Certificates</div>
      <div style={{height:"10%", borderBottom:"1px solid black", textAlign:"center", justifyContent:"center"}}>Referrals</div>
      <div style={{height:"10%", borderBottom:"1px solid black", textAlign:"center", justifyContent:"center"}}>Calendar</div>
      <div style={{height:"10%", borderBottom:"1px solid black", textAlign:"center", justifyContent:"center"}}>Notes</div> 
      <div style={{height:"10%", borderBottom:"1px solid black", textAlign:"center", justifyContent:"center"}}>Track</div>

   </div> 
   

  )
}

export default Sidebar