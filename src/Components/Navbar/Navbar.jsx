
import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
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

      <div className='signUp flex'>
        <a href="/signin">
          <Link to="/signin" className='text1'>Sign In</Link>
        </a>
        <a href='/signup'>
          <div className='text2'>Sign Up</div>
        </a>
      </div>
    </div>
  )
}

export default Navbar
