import React from 'react'
import './login.css';
import netflixlogo from '../assets/netflixlogo.png';

function Login() {
  return (
    <>
    <div className="login-det">
    <div className='details'>
    <div className="login-container">  
      <img src={netflixlogo} alt="netflixlogo"
      className="sidelogo" />
      </div>

         <h1>Sign In</h1>
    <input type="text" placeholder="enter email id"></input>
    <input type="password" placeholder="Enter password"></input>
    <button>Sign In</button>
    </div>
    
  
  </div>
    </>
  )
}

export default Login