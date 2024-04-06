import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

//importing the pages


//importing images
import  logo from '../../assets/logo.png'
import {IoIosCloseCircle} from 'react-icons/io'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {

  //holding the Navbar
  const [navbar, setNavbar] = useState('navbar')

  //showing navbar on small screens
  const showNavbar = () => {
    setNavbar('navbar showNavbar')
  }

  //removing navbar in small screens
  const removeNavbar = () => {
    setNavbar('navbar removeNavbar')
  }

  //adding background to the Navbar
  const [header, setHeader] = useState('header')
  const addBg = ()=>{
    if(window.scrollY >= 20){
      setHeader('header addBg')
    }
  }
  
  window.addEventListener( "scroll", addBg)

  return (
    <div className={header}>
      <div className='logoDiv flex'>
        <img src={logo} alt="Logo Image" className='logo'/>
        <h1>COWSTOCK</h1>
      </div> 
      <div className={navbar}>
        <ul className='menu'>
          <li onClick={removeNavbar} className='listItem'>
            <a href="/" className='link'>Home</a>
          </li>
          <li onClick={removeNavbar} className='listItem'>
            <a href="/Auctions" className='link'>Auctions</a>
          </li>
          <li onClick={removeNavbar} className='listItem'>
            <a href="/" className='link'>Directions</a>
          </li>
          <li onClick={removeNavbar} className='listItem'>
            <Link to='/Auctions'>About</Link>
          </li>
        </ul>
        <IoIosCloseCircle className='closeIcon'  onClick={removeNavbar}/>
      </div>
      
      <div className='signUp flex'>
        <a href="/signin">
          <div className='text1'>Sign In</div>
        </a>
        <a href= '/signup'>
          <div className='text2'>Sign Up</div>
        </a>
        <TbGridDots className='icon toggleNavbarIcon'  onClick={showNavbar}/>
      </div>
    </div>
  )
}

export default Navbar
