import React from 'react'
import "../index.css"

const featurearray = [
    {
        id: 1,
        details: "Easily store and organize your placement-related documents in one secure location.",
    },
    {
        id: 2,
        details: "Access your documents from anywhere, whether on your computer or mobile device.",
    } ,
    {
        id: 3,
        details: " Enjoy a clean and intuitive interface that makes managing your documents a breeze.",
    }
];
const features = () => {
  return (
    <div id='Features' > 
        <h2 style={{textAlign:"center", margin:"5rem",  fontSize:"40px"}}>Features</h2>
        <div style={{display:"flex", justifyContent:"space-between", margin:"50px"}}>

        {featurearray.map((feature)=>{
            return (
                <div key={feature.id} className="feature-container">
                    <div>{feature.details}</div>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default features