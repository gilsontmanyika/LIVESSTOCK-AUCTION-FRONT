import { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('https://your-api-url.com/login', {
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
        <div>
            <h1>SIGN IN</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} 
                    onChange={e => setEmail(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} 
                    onChange={e => setPassword(e.target.value)} required />
                </label>
                <button type="submit">Login</button>
            </form>
            <a href="/forgot-password">Forgot Password?</a>
            <a href="/register">Register</a>
        </div>
    );
};

export default SignIn
