import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './SidebarNav.css';
import homeLogo from '../../Images/homeLogo.png';
import signinLogo from '../../Images/signinLogo.png';
import cartLogo from '../../Images/sidebarCartLogo.png';
import closeLogo from '../../Images/closeLogo.png';
import loginContext from '../Context/Context';
import profileLogo from '../../Images/profileLogo.png'
import cartEmptyAction from '../Redux/Actions/cartEmptyAction';
import { useSelector } from 'react-redux';

function SidebarNav(props) {

    const location = useLocation();

    const sidebarNavTotalCartCount = useSelector((store) => {
        return store.cart.totalCartCount
    })

    const {userData, fnLoggedOut} = useContext(loginContext);

    let sidebarNavClasses = 'SidebarNavContainer';

    if(props.isSidebarNavOpen){
        sidebarNavClasses = 'SidebarNavContainer open'
    }

    const handleSideNavClose = () => {
        props.setIsSidebarNavOpen(false);
    }

    const handleSidebarNavLogout = () => {
        fnLoggedOut();
        props.setIsSidebarNavOpen(false);
        cartEmptyAction();
    }
  return (
    <nav className={sidebarNavClasses}>
        <button className='SidebarNavCloseBtn' onClick={handleSideNavClose}>
            <img src={closeLogo} alt="closeLogo" />
        </button>
        <ul>
            <li style={{marginLeft:'-3px'}}>
                <img style={{width:'30px', marginRight:'2px'}} src={homeLogo} alt="homeLogo" />
                <Link to="/" onClick={handleSideNavClose}>Home</Link>
            </li>
            {
                userData.isLoggedIn ? 
                <li>
                    <img style={{width:'25px', marginRight:'5px'}} src={profileLogo} alt="profileLogo"/>
                    <p>{userData.userName}</p>
                </li>
                : <li>
                    <img style={{width:'25px', marginRight:'5px'}} src={signinLogo} alt="signinLogo"/>
                    <Link state={{prevURL: location.pathname}} to="/signin" onClick={handleSideNavClose}>Sign In</Link>
                </li>
            }
            <li>
                <img style={{width:'25px', marginRight:'5px'}} src={cartLogo} alt="cartLogo" />
                <Link to="/cart" onClick={handleSideNavClose}>Go to Cart ({sidebarNavTotalCartCount})</Link>
            </li>
            {
                userData.isLoggedIn && <button className='SidebarNavLogoutBtn' onClick={handleSidebarNavLogout}>Logout</button>
            }
        </ul>
    </nav>
  )
}

export default SidebarNav