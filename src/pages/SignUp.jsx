import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./styles/Logins.css";
import Navbar from '../Components/Navbar/Navbar';

const SignUp = () => {
  const [formData, setFormData] = useState({
    userType: '',
    name: '',
    surname: '',
    email: '',
    location: '',
    password: '',
    confirmPassword: ''
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
      await axios.post('YOUR_API_ENDPOINT', formData);
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
        <label>
          User Type:
          <select name="userType" onChange={handleChange}>
            <option value="">Select...</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
            <option value="admin">Admin</option>
          </select>
        </label>
          <input type="text" name="name" onChange={handleChange} placeholder='Name'/>
          <input type="text" name="surname" onChange={handleChange} placeholder='Surname' />
          <input type="email" name="email" onChange={handleChange} placeholder='Email'/>
          <input type="text" name="location" onChange={handleChange} placeholder='Location (City)'/>
          <input type="password" name="password" onChange={handleChange} placeholder='Enter Password'/>
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
