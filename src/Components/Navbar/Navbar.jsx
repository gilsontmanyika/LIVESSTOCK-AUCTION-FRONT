
import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';


//importing the pages


//importing images
import logo from '../../assets/logo.png'


const Navbar = () => {

  //holding the Navbar
  const [navbar] = useState('navbar')

  //adding background to the Navbar
  const [header, setHeader] = useState('header')
  const addBg = () => {
    if (window.scrollY >= 20) {
      setHeader('header addBg')
    }
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add this line

    const handleLogout = () => {
        setIsLoggedIn(false);
        // Add your logout logic here
    }
    const navigate = useNavigate();

    const handleIconClick = () => {
        navigate('/userprofile');
         // replace '/your-page-path' with the path of the page you want to navigate to
    };

  window.addEventListener("scroll", addBg)

  return (
    <div className={header}>
      <div className='logoDiv flex'>
        <img src={logo} alt="Logo Image" className='logo' />
        <h1>COWSTOCK</h1>
      </div>
      <div className={navbar}>
        <ul className='menu'>
          <li className='listItem'>
            <a href="/" className='link'>Home</a>
          </li>
          <li className='listItem'>
            <Link to="/auctions" className='link'>Auctions</Link>
          </li>
          <li className='listItem'>
            <Link to="/directions" className='link'>Directions</Link>
          </li>
          <li className='listItem'>
            <Link to="/about" className='link'>About</Link>
          </li>
        </ul>
      </div>

      {isLoggedIn ? ( // Add this conditional rendering
                <div className='signUp flex'>
                    <FaUser onClick={handleIconClick} style={{ cursor: 'pointer' }}/>
                    <Link to="/userprofile" className='text1'>MY PROFILE</Link>
                    <button onClick={handleLogout}>Sign Out</button>
                </div>
            ) : (
                <div className='signUp flex'>
                  <FaUser onClick={handleIconClick} style={{ cursor: 'pointer' }} />
                        <Link to="/signin" className='text1'>Sign In</Link>
                        <Link to="/signup" className='text2'>Sign Up</Link>
                </div>
            )}
    </div>
  )
}

export default Navbar
