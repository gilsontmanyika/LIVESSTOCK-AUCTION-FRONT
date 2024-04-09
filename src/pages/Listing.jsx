import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Listing = () => {
  const [form, setForm] = useState({
    image: '',
    breed: '',
    sex: '',
    age: '',
    location: '',
    price: '',
    weight: '',
    height: '',
    color: '',
    healthInfo: '',
    name: '',
    email: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('USER_API_URL');
        setForm(prevState => ({ ...prevState, name: response.data.name, email: response.data.email }));
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('API_URL', form);
      alert('Cattle registered successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
         <input type="file" name="image" onChange={handleChange} />
         <input type="text" name="breed" onChange={handleChange} placeholder="Breed" />
         <input type="text" name="sex" onChange={handleChange} placeholder="Sex" />
         <input type="number" name="age" onChange={handleChange} placeholder="Age" />
         <input type="text" name="location" onChange={handleChange} placeholder="Location" />
         <input type="number" name="price" onChange={handleChange} placeholder="Price" />
         <input type="number" name="weight" onChange={handleChange} placeholder="Weight" />
         <input type="number" name="height" onChange={handleChange} placeholder="Height" />
         <input type="text" name="color" onChange={handleChange} placeholder="Color" />
         <textarea name="healthInfo" onChange={handleChange} placeholder="Health Information"></textarea>
         <button type="submit">Register</button>
      </form>
      <Link to="/browsing">Browse Listings</Link>
    </div>
  );
};

export default Listing;
