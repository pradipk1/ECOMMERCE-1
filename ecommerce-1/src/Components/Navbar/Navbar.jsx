import React, { useContext } from 'react'
import './Navbar.css';
import {Link, useLocation} from 'react-router-dom'
import searchicon from '../../Images/searchicon.png'
import carticon from '../../Images/carticon.png'
import { useSelector } from 'react-redux';
import loginContext from '../Context/Context';
import profileLogo from '../../Images/profileLogo.png'
import cartEmptyAction from '../Redux/Actions/cartEmptyAction';
import homeLogo from '../../Images/homeLogo.png'

function Navbar() {

  const navTotalCartCount = useSelector((store) => {
    return store.cart.totalCartCount;
  });

  const location = useLocation();

  const {userData, fnLoggedOut} = useContext(loginContext);

  let linkStyle ={
      color:"white",
      textDecoration:"none",
      marginRight:"50px",
      marginLeft:"30px",
  }

  const handleSignOut = () => {
    cartEmptyAction();
    fnLoggedOut();
  }

  return (
    <>
      <div className='NavbarContainer'>
        <Link className='HomeLogo' style={linkStyle} to="/">
          <img style={{width:'30px'}} src={homeLogo} alt="homeLogo" />
          <span>Home</span>
        </Link>

        <div className='SearchBarContainer'>
          <img src={searchicon} alt='searchicon'/>
          <input id='SearchBarInput' type='text' placeholder='Search Something!'/>
        </div>

        {
          userData.isLoggedIn ? 
            <div className='NavProfileContainer'>
              <div style={{display:'flex', alignItems:'center', marginRight:'50px'}}>
                <img style={{width:'25px'}} src={profileLogo} alt="profileLogo" />
                <span>{userData.userName}</span>
              </div>
              <button className='NavSignOutBtn' onClick={handleSignOut}>SignOut</button>
            </div>
          : <div className='NavLinkContainer'>
              <Link state={{prevURL: location.pathname}} className='NavSignInLink' to="/signin">SignIn</Link>
            </div>
        }

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
