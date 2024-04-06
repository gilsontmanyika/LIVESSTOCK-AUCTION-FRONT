import Navbar from '../Components/Navbar/Navbar'
import './styles/Auctions.css'
import { Link } from 'react-router-dom'

const Auctions = () => {
  return (
    <>
      <div className='auctions'>
        <Navbar />
      </div>
      <div className='contents'>
        <h1 className='head'>
          Welcome!
        </h1>
        <p className='para'>
          Choose your action. Creating your own Auction or Browse through
        </p>
        <div className="options">
          <ul className='optionList'>
            <li className='listItem'>
              <Link to="/listing" className='link'>
                CREATE A NEW AUCTION
              </Link>
            </li>
            <li className='listItem'>
              <Link to="/browsing" className='link'>
                AVAILABLE AUCTIONS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Auctions
