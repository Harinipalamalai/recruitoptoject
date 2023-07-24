import React, { useState } from 'react';
import './createac.css';
import { Link, useNavigate } from 'react-router-dom';
import identifycreate from './identifycreate.png';
import axios from 'axios';

function Createac() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = {
        name:formData.name,
        username:formData.username,
        email:formData.email,
        password:formData.password
    }
    
    await axios.post('http://127.0.0.1:8080/api/v1/auth/register',data)
    alert("Register Successful");
    navigate("/Login");
    
        
    }

  return (
    <body>
      <header class="header"></header>
      <div class="background"></div>
      <div class="container">
        <div class="item">
          <img className="solorrs" src={identifycreate} alt="Identify Create" />
          <div class="text-item">
            <h1 className="heading">
              Recruito<br />
              <span></span>
            </h1>
            <p>"Unlock Your Potential: Join Our Winning Team!"</p>
          </div>
        </div>
        <div class="login-section">
          <div class="form-box login">
            <form onSubmit={handleSubmit}>
              <h2>CREATE AN ACCOUNT</h2>
              <div class="input-box">
                <span class="icon">
                  <i class="bx bxs-envelope"></i>
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Name"
                  required
                  onChange={handleChange}
                />
              </div>
              <div class="input-box">
                <span class="icon">
                  <i class="bx bxs-envelope"></i>
                </span>
                <input
                  type="text"
                  value={formData.username}
                  name="username"
                  placeholder="Username"
                  required
                  onChange={handleChange}
                />
              </div>
              <div class="input-box">
                <span class="icon">
                  <i class="bx bxs-lock-alt"></i>
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div class="input-box">
                <span class="icon">
                  <i class="bx bxs-lock-alt"></i>
                </span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Password"
                  required
                  onChange={handleChange}
                />
              </div>
              <br />
              <div class="remember-password">
                <label>
                  <input type="checkbox" />
                  I agree to all terms, Privacy Policy and Fees
                </label>
              </div>
              <br />
              <button type="submit" class="btn" >
                Sign Up
              </button>
              <div class="create-account">
                <p>
                  Already have an account?{' '}
                  {/* <button className='register-link' type='submit'>Sign Up</button> */}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Createac;
