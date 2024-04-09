import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          User Type:
          <select name="userType" onChange={handleChange}>
            <option value="">Select...</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          Surname:
          <input type="text" name="surname" onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label>
          Location:
          <input type="text" name="location" onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" onChange={handleChange} />
        </label>
        <button type="submit">Register</button>
      </form>
      <Link to="/signin">Sign In</Link>
      <Link to="/forgot-password">Forgot Password</Link>
    </div>
  );
};

export default SignUp;
