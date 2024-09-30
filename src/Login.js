import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Login = () => {

  const [loginData, setLoginData] = useState({
    username : '',
    password : ''
  })
  
  //Submit
  const handleLoginSubmit= async (e)=>{
    e.preventDefault();

    try{
      const response = await axios.post('http://localhost:8000/login',loginData);
      const{success,message} = response.data;

      if(success){
        console.log("Login Successfully");
      }else{
        console.log(message);
      }
    }catch(error){
      console.error('Login error', error);
    }

    setLoginData({
      username : '',
      password : ''
    })
  }

  const handleLoginChange =(e)=>{
    const {name,value}= e.target;
    setLoginData((prevData) => (
      {...prevData, [name]:value}
    ))
  }

  return (
    <div className="auth-wrapper">
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <div className="input-group">
          <input type="text" name='username' required onChange={handleLoginChange} value={loginData.username}/>
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Username</label>
        </div>
        <div className="input-group">
          <input type="password" name='password' required onChange={handleLoginChange} value={loginData.password}/>
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Password</label>
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
      <p className="toggle-text">
        Don't have an account?
        <Link to = '/register' className="toggle-btn">
          Register
        </Link>
      </p>
    </div>
    </div>
  );
};
export default Login;