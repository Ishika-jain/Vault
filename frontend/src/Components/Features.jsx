import React from 'react'

const featurearray = [
    {
        id: 1,
        details: "some random text here and then more random text in the next one",
        img: "url"
    },
    {
        id: 2,
        details: "some random text here and then more random text in the next one",
        img: "url"
    } ,
    {
        id: 3,
        details: "some random text here and then more random text in the next one",
        img: "url"
    }
];
const features = () => {
  return (
    <div > 
        <h2 style={{textAlign:"center", margin:"5rem",  fontSize:"40px"}}>Features</h2>
        <div style={{display:"flex", justifyContent:"space-between", margin:"50px"}}>

        {featurearray.map((feature)=>{
            console.log(feature)
            return (
                <div key={feature.id} style={{width:"30%", height:"15rem", margin:"10px", padding:"10px", background:"#340ba7b0", display:"flex", alignItems:"center", borderRadius:"10px"}}>
                    <div>{feature.id}</div>
                    <div>{feature.details}</div>
                    <div>{feature.img}</div>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default features