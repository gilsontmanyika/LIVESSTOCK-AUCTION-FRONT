import { useState } from 'react';
import axios from 'axios';
import Navbar from "../Components/Navbar/Navbar";
import "./styles/Signin.css";
import { Link } from 'react-router-dom';
import {BASE_URL} from '../services/http';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      // Prepare data as a JSON object
      const data = {
        email,
        password,
      };
  
      try {
        console.log(`The data is as follows : ${data}`);
        const response = await axios.post(
          `${BASE_URL}/auth/api-token-auth/`,
          data, // Send data as the request body
          {
            headers: { 'Content-Type': 'application/json' }, // Set content type header
          }
        );
  
        console.log('Signin successful:', response.data);
        // Saving access token and refresh token
        setAccessToken(response.data.access); 
        setRefreshToken(response.data.refresh); 
      } catch (error) {
        console.error('Signing in  failed:', error.response.data);
        // handle how to display wrong password and email
      }
    };    
    
    return (
        <>
       <div className='login-nav'>
        <Navbar/>
       </div>
       <div className='log1-contents'>
            <h1>SIGN IN</h1>
            <form className='this1-form' onSubmit={handleSubmit}>
                    <input type="email" value={email} 
                    onChange={e => setEmail(e.target.value)} required placeholder='Email'/>
                    <input type="password" value={password} 
                    onChange={e => setPassword(e.target.value)} required placeholder='Password' />
                <button className='the-button' type="submit">Login</button>
            </form>
           <div className='low-links'>
            <Link to="/forgot-password">Forgot Password?</Link>
            <Link to="/register">Register</Link>
           </div>
        </div>
        </>
    );
};

export default SignIn