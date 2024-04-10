import { useState} from 'react';
//import {useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./styles/Listing.css"
import Navbar from "../Components/Navbar/Navbar"

const Listing = () => {
  const [form, setForm] = useState({
    pictures: '',
    breed: '',
    gender: '',
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

  //useEffect(() => {
    //const fetchUser = async () => {
      //try {
        //const response = await axios.get('USER_API_URL');
        //setForm(prevState => ({ ...prevState, name: response.data.name, email: response.data.email }));
      //} catch (error) {
        //console.error(error);
      //}
    //};

    //fetchUser();
  //}, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/v1/livestock/animals/', form);
      alert('Cattle registered successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <div className='list-nav'>
      <Navbar/>
    </div>
     <div className='list-contents'>
      <form className='the-form' onSubmit={handleSubmit}>
         <label htmlFor="pictures">Upload image/s
         <input type="file" name="pictures" onChange={handleChange} />
         </label>
         <input type="text" name="breed" onChange={handleChange} placeholder="Breed" />
         <input type="text" name="gender" onChange={handleChange} placeholder="Sex" />
         <input type="number" name="age" onChange={handleChange} placeholder="Age" />
         <input type="text" name="location" onChange={handleChange} placeholder="Location" />
         <input type="number" name="price" onChange={handleChange} placeholder="Price" />
         <input type="number" name="weight" onChange={handleChange} placeholder="Weight" />
         <input type="number" name="height" onChange={handleChange} placeholder="Height" />
         <input type="text" name="color" onChange={handleChange} placeholder="Color" />
         <textarea name="health_Info" onChange={handleChange} placeholder="Health Information"></textarea>
         <button className='register' type="submit">Register</button>
         <Link to="/browsing" className='browse'>Browse Listings</Link>
      </form>
      
      </div>
    </>
  );
};

export default Listing;
