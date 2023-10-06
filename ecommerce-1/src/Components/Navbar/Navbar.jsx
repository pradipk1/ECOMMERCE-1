import React, { useState } from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom'
import searchicon from '../../Images/searchicon.png'
import carticon from '../../Images/carticon.png'
import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart';

function Navbar() {

  const navTotalCartCount = useSelector((store) => {
    return store.cart.totalCartCount;
  })

  let linkStyle ={
      color:"white",
      textDecoration:"none",
      marginRight:"50px",
      marginLeft:"30px",
  }

  return (
    <>
      <div className='NavbarContainer'>
        <Link className='logo' style={linkStyle} to="/">Pk</Link>

        <div className='SearchBarContainer'>
          <img src={searchicon} alt='searchicon'/>
          <input id='SearchBarInput' type='text' placeholder='Search Something!'/>
        </div>

        <div className='NavLinkContainer'>
          <Link style={linkStyle} to="/">Signin</Link>
        </div>

        <Link className='CartIconContainer' to='/cart'>
          <img src={carticon} alt='NavCarticon'/>
          <span className='NavCartCount'>{navTotalCartCount}</span>
          <span>Cart</span>
        </Link>
      </div>
    </>
    
  )
}

export default Navbar
