import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom'
import searchicon from '../../Images/searchicon.png'
import carticon from '../../Images/carticon.png'

function Navbar() {

    let linkStyle ={
        color:"white",
        textDecoration:"none",
        marginRight:"50px",
        marginLeft:"30px",
    }
  return (
    <div className='NavbarContainer'>
      <Link className='logo' style={linkStyle} to="/">Pk</Link>

      <div className='SearchBarContainer'>
        <img src={searchicon} alt='searchicon'/>
        <input id='SearchBarInput' type='text' placeholder='Search Something!'/>
      </div>

      <div className='NavLinkContainer'>
        <Link style={linkStyle} to="/">Signin</Link>
      </div>

      <div className='CartIconContainer'>
        <img src={carticon} alt='NavCarticon'/>
        <span className='NavCartCount'>0</span>
        <span>Cart</span>
      </div>
    </div>
  )
}

export default Navbar
