
import './styles/Home.css'
import { Link } from 'react-router-dom'
import { SlPaperPlane } from "react-icons/sl";

const Home = () => {
  return (
    <div className='home'>
      <div className="secContainer">
        <div className="homeText">
          <h1 className="homeTitle">
            Connecting the Nation through business!!!
          </h1>
          <p className="homePara">Join others today</p>
          <div className="detail-btns flex">
            <button className='the-btn'>
              <Link to="/directions">
                <SlPaperPlane className= "this-icon"/><span>More Details</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home
