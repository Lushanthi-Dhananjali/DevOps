import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.png'
import navProfile from '../../assets/nav-profile.png'

const Navbar = () => {
  return (
    <div className='navbar'> 
    <div className="nav-logo-1">
      <img src={navlogo} alt="" className="nav-logo" />
      <p>SHOPPER</p>
    </div>
    <img src={navProfile} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar