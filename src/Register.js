import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Register = () => {

  const [registerData, setRegisterData] = useState({
    username : '',
    email : '',
    password : ''
  })
  
  //Submit
  const handleRegisterSubmit= async (e)=>{
    e.preventDefault();

    try{
      const response = await axios.post('http://localhost:8000/register',registerData);
      const{success,message} = response.data;

      if(success){
        console.log("Registeration Successfully");
      }else{
        console.log(message);
      }
    }catch(error){
      console.error('Registeration error', error);
    }

    setRegisterData({
      username : '',
      email : '',
      password : ''
    })
  }

  const handleRegisterChange =(e)=>{
    const {name,value}= e.target;
    setRegisterData((prevData) => (
      {...prevData, [name]:value}
    ))
  }

  return (
    <div className="auth-wrapper">
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegisterSubmit}>
        <div className="input-group">
          <input type="text" name='username' required onChange={handleRegisterChange} value={registerData.username}/>
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Username</label>
        </div>
        <div className="input-group">
          <input type="email" name='email' required onChange={handleRegisterChange} value={registerData.email}/>
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Email</label>
        </div>
        <div className="input-group">
          <input type="password" name='password' required onChange={handleRegisterChange} value={registerData.password}/>
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Password</label>
        </div>
        <button type="submit" className="submit-btn">Register</button>
      </form>
      <p className="toggle-text">
        Already have an account?
        <Link to = '/login' className="toggle-btn">
          Login
        </Link>
      </p>
    </div>
    </div>
  );
};
export default Register;