import React, { useState } from "react";
import {Button,TextField,Link} from "@material-ui/core";
import log from "../images/bg.png"
import "../index.css";

export default function LoginSignup() {
  const [isSignup, setIsSignup] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    // handle signup form submission
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // handle login form submission
  };

  return (
    <div className="login-container">
      <div className="parentlogin">

        <div className="loginimage">
        <img src={log} alt='and' className="loginimage"/>
        </div>
        <div className="login-form">

        <h1 className="login-header">{isSignup ? "Sign up" : "Sign in"}</h1>
        <form className="form-handle" onSubmit={isSignup ? handleSignup : handleLogin}>
          {isSignup && ( <TextField variant="outlined" margin="normal" required fullWidth id="name" label="Name" name="name" autoComplete="name" autoFocus />)}
          <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" type="email" autoFocus={!isSignup}/>
          <TextField variant="outlined" margin="normal" required fullWidth id="password" label="Password" name="password" autoComplete="complete-password" type="password" autoFocus={!isSignup}/>
          {isSignup && (<TextField variant="outlined" margin="normal" required fullWidth id="confirmPassword" label="confirmPassword" name="confirmPassword" type="password" autoComplete="complete-password" autoFocus={!isSignup}/> )}
          
          <Button type="submit" fullWidth variant="contained" color="primary" className="submit" >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
            
            <div>
              <Link href="#" variant="body2" onClick={() => setIsSignup(!isSignup)} style={{display:"flex", justifyContent:"flex-end", padding:"1rem"}} >
                {isSignup? "Already have an account? Sign in": "Don't have an account? Sign up"}
              </Link>
            </div>
     </form>
      </div>
        </div>
      </div>
    
  );
}
