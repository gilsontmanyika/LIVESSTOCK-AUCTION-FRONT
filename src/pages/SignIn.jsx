import { useState } from 'react';
import axios from 'axios';
import Navbar from "../Components/Navbar/Navbar"
import "./styles/Logins.css";
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/api-token-auth/', {
                email,
                password
            });

            if (response.data.success) {
                // Handle successful login here, e.g. redirecting to another page
                console.log('Login successful');
            } else {
                // Handle error here
                console.log('Login failed');
            }
        } catch (error) {
            // Handle error here
            console.log('An error occurred:', error);
        }
    };

    return (
        <>
       <div className='login-nav'>
        <Navbar/>
       </div>
       <div className='log-contents'>
            <h1>SIGN IN</h1>
            <form className='this-form' onSubmit={handleSubmit}>
                    <input type="email" value={email} 
                    onChange={e => setEmail(e.target.value)} required placeholder='Email' />
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