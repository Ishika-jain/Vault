import React from 'react'
import { Login, Signup } from "../Utils";


const Homepage = () => {
  return (
    <div>
         <div className="landing-page">
      <div className="login-signup-container">
        <div className="login-signup-row">
          <Login />
          <Signup />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Homepage