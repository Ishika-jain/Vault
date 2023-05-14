import React, { useState } from "react";
import { Button, TextField, Link } from "@material-ui/core";
import log from "../images/bg.png";
import axios from "axios";
import "../index.css";

const LoginSignup = ({ onLogin }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [user, setUser] = useState({
    name:"",
    email:"",
    password: "",
    confirmPassword:""
  })
  const [error, setError] = useState("");


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser(values => ({...values, [name]: value}))
  }

  const handleSignup = async(e) => {
    e.preventDefault();
    const {name, email, password, confirmPassword} = user;
    if (name && email && password && (password===confirmPassword)){
      try {
        await axios.post("http://localhost:5000/api/signup", user)
        .then(res=>console.log(res.data.message))
        
        onLogin();
      } catch (err) {
        console.log(err);
      }
    }  
    
  };

  const handleLogin = async(e) => {
    e.preventDefault();
    const {email, password} = user;
    if (email && password ){
      try {
        await axios.post("http://localhost:5000/api/login", user)
        .then(res=>console.log(res.data.message))

        onLogin();
      } catch (err) {
        setError("Invalid email or password");
      }
    }
    
  };


  return (
    <div className="login-container">
      <div className="parentlogin">
        <div className="loginimage">
          <img src={log} alt="and" className="loginimage" />
        </div>
        <div className="login-form">
          <h1 className="login-header">{isSignup ? "Sign up" : "Sign in"}</h1> 
          <form className="form-handle" >
            {isSignup && <TextField value={user.name|| ""} margin="normal" required fullWidth id="name" label="Name" name="name" autoComplete="name" autoFocus onChange={handleChange}/>}
            <TextField value={user.email|| ""}  margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" type="email" autoFocus={!isSignup} onChange={handleChange}/>
            <TextField value={user.password|| ""} margin="normal" required fullWidth id="password" label="Password" name="password" autoComplete="complete-password" type="password" autoFocus={!isSignup} onChange={handleChange}/>
            {isSignup && <TextField value={user.confirmPassword || ""} margin="normal" required fullWidth id="confirmPassword" label="confirmPassword" name="confirmPassword" type="password" autoComplete="complete-password" autoFocus={!isSignup} onChange={handleChange}/>}

            <Button type="submit" fullWidth variant="contained" color="primary" className="submit" onClick={isSignup? handleSignup: handleLogin}>
              {isSignup ? "Sign Up" : "Sign In"}
            </Button>

            <div>
              <Link
                href="#"
                variant="body2"
                onClick={() => setIsSignup(!isSignup)}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "1rem",
                }}
              >
                {isSignup ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
              </Link>
              <div style={{color:"red", textAlign:"center"}}>{error}</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
