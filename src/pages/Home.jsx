import React from 'react'
import './styles/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className="secContainer">
        <div className="homeText">
          <h1 className="homeTitle">
            Connecting the Nation through business!!!
          </h1>
          <p className="homePara">Join others today</p>
          <div className="btns flex">
            <button className='btn primaryBtn'>
              <Link to="/directions">More Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home
