import { useState } from 'react';
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
  });


  const [feedback, setFeedback] = useState(null);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/v1/livestock/animals/', form);
      setFeedback('Cattle registered successfully!');
    } catch (error) {
      console.error(error);
      setFeedback('An error occured while registering. Please try again')
    }
  };

  return (
    <div className='listing'>
      <div className='list-nav'>
        <Navbar />
      </div>
      <div className='list-contents'>
        <h1 className='the-title'>Register your Cattle</h1>
        <form className='the-form' onSubmit={handleSubmit}>
          <input type="string" name="name" onChange={handleChange} placeholder="Name" />
          <input type="string" name="breed" onChange={handleChange} placeholder="Breed" />
          <input type="integer" name="age" onChange={handleChange} placeholder="Age" />
          <input type="number" name="weight" onChange={handleChange} placeholder="Weight in Kgs" />
          <input type="string" name="gender" onChange={handleChange} placeholder="Sex" />
          <textarea type="string" name="health_Info" onChange={handleChange} placeholder="Health Information"></textarea>
          <input type="string" name="color" onChange={handleChange} placeholder="Color" />
          <input type="string" name="videos" onChange={handleChange} placeholder='Your video' />
          <input type="string" name="pictures" onChange={handleChange} placeholder='Upload your Pictures' />
          <input type="boolean" name="status" onChange={handleChange} placeholder="status" />
          <button className='register' type="submit">Register</button>
          <Link to="/browsing" className='browse'>Browse Listings</Link>
          {feedback && <p className='feedback'>{feedback}</p>}
        </form>

      </div>
    </div>
  );
};

export default Listing;
