import { useState} from 'react';
//import {useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./styles/Listing.css"
import Navbar from "../Components/Navbar/Navbar"

const Listing = () => {
  const [form, setForm] = useState({
    name: '',
    breed: '',
    age: '',
    weight: '',
    gender: '',
    color: '',
    health_info: '',
    video: '',
    pictures: '',
    status: 'true',
    //location: '',
    //price: '',
    //sellerName: '',
    //sellerEmail: ''
  });

  //useEffect(() => {
    //const fetchUser = async () => {
      //try {
        //const response = await axios.get('USER_API_URL');
        //setForm(prevState => ({ ...prevState, sellerName: response.data.name, sellerEmail: response.data.email, location: response.data.location }));
      //} catch (error) {
        //console.error(error);
      //}
    //};

    //fetchUser();
  //}, []);
  const [feedback, setFeedback] = useState(null);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/v1//livestock/animals/', form);
      setFeedback('Cattle registered successfully!');
    } catch (error) {
      console.error(error);
      setFeedback('An error occured while registering. Please try again')
    }
  };

  return (
    <div className='listing'>
    <div className='list-nav'>
      <Navbar/>
    </div>
     <div className='list-contents'>
      <h1 className='the-title'>Register your Livestock</h1>
      <form className='the-form' onSubmit={handleSubmit}>
         <input type="text" name="name" onChange={handleChange} placeholder="Name" />
         <input type="text" name="breed" onChange={handleChange} placeholder="Breed"/>
         <input type="number" name="age" onChange={handleChange} placeholder="Age"/>
         <input type="number" name="weight" onChange={handleChange} placeholder="Weight in Kgs"/>
         <input type="text" name="gender" onChange={handleChange} placeholder="Sex"/>
         <textarea name="health_Info" onChange={handleChange} placeholder="Health Information"></textarea>
         <input type="text" name="color" onChange={handleChange} placeholder="Color" />
         {/*
         <input type="text" name="location" onChange={handleChange} placeholder="Location" />
         <input type="number" name="price" onChange={handleChange} placeholder="Price" />
         <input type="text" name="sellerName" onChange={handleChange} placeholder="Seller Name" />
         <input type="email" name="sellerEmail" onChange={handleChange} placeholder="Selle Email" />  
         */}
         <label htmlFor="pictures" className='labell' >Upload image/s
         <input type="file" name="pictures" onChange={handleChange} placeholder='Upload your Pictures' />
         </label>
         <label htmlFor="video" className='labell' >Upload your Video here <input type="file" onChange={handleChange}/></label>
         <button className='register' type="submit">Register</button>
         <Link to="/browsing" className='browse'>Browse Listings</Link>
         {feedback && <p className='feedback'>{feedback}</p>}
      </form>
      
      </div>
    </div>
  );
};

export default Listing;
