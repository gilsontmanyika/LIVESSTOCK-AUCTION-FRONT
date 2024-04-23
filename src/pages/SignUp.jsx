import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./styles/Logins.css";
import Navbar from '../Components/Navbar/Navbar';
import {BASE_URL} from '../services/http';

const SignUp = () => {
  const [formData, setFormData] = useState({
    user: {
      email: '',
      password: ''
    },
    contact1: '',
    contact2: '',
    address1: '',
    address2: '',
    city: '',
    country: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await axios.post(`${BASE_URL}/user-profile/users/`, formData,
      {
        headers: { 'Content-Type': 'application/json' }, // Set content type header
      }
    );
      alert('Registration successful');
    } catch (error) {
      console.error(error);
      alert('Registration failed');
    }
  };

  return (
   <>
   <div className='login-nav'>
    <Navbar/>
   </div>
    <div className='log-contents'>
      <h1>Sign Up</h1>
      <form className='this-form' onSubmit={handleSubmit}>
        {/*<label>
          User Type:
          <select name="userType" onChange={handleChange}>
            <option value="">Select...</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
            <option value="admin">Admin</option>
          </select>
        </label>*/}
          {/*
          <input type="text" name="name" onChange={handleChange} placeholder='Name'/>
          */}
          <input type="email" name="email" onChange={handleChange} required placeholder='Email'/>
          <input type="text" name="contact1" onChange={handleChange} required placeholder='Mobile Contact' />
          <input type="text" name="contact2" onChange={handleChange} placeholder='Alternate Contact' />
          <input type="text" name="address1" onChange={handleChange} required placeholder='Home Address' />
          <input type="text" name="address2" onChange={handleChange} placeholder='Postal Address' />
          <input type="text" name="city" onChange={handleChange} placeholder='Location (City)'/>
          <input type="text" name="country" onChange={handleChange} placeholder='Location (Country)'/>
          <input type="password" name="password" onChange={handleChange} required placeholder='Enter Password'/>
          <input type="password" name="confirmPassword" onChange={handleChange} placeholder='Confirm Password'/>
        <button type="submit" className='the-button'>SIGN UP</button>
      </form>
      <div className='low-links'>
        <Link to="/signin">SIGN IN INSTEAD</Link>
        <Link to="/forgot-password">FORGOT PASSWORD</Link>
      </div>
    </div>
   </> 
  );
};
export default SignUp;
