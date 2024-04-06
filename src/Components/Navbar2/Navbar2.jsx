import React, {useState} from 'react'
import './Navbar2.css'

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
      </div> 
      <div className={navbar}>
        <ul className='menu'>
          <li onClick={removeNavbar} className='listItem'>
            <a href="/" className='link'>Home</a>
          </li>
          <li onClick={removeNavbar} className='listItem'>
            <a href="/" className='link'>Auctions</a>
          </li>
          <li onClick={removeNavbar} className='listItem'>
            <a href="/" className='link'>Directions</a>
          </li>
        </ul>
        <IoIosCloseCircle className='closeIcon'  onClick={removeNavbar}/>
      </div>
      
      <div className='signUp flex'>
        <div className='text'>Sign In</div>
        <div className='text'>Sign Up</div>
        <TbGridDots className='icon toggleNavbarIcon'  onClick={showNavbar}/>
      </div>
    </div>
  )
}

export default Navbar
