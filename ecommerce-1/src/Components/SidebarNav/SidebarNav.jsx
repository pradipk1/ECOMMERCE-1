import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './SidebarNav.css';
import homeLogo from '../../Images/homeLogo.png';
import signinLogo from '../../Images/signinLogo.png';
import cartLogo from '../../Images/sidebarCartLogo.png';
import closeLogo from '../../Images/closeLogo.png';

function SidebarNav(props) {

    const location = useLocation();
    // console.log(location);

    let sidebarNavClasses = 'SidebarNavContainer';

    if(props.isSidebarNavOpen){
        sidebarNavClasses = 'SidebarNavContainer open'
    }

    const handleSideNavClose = () => {
        props.setIsSidebarNavOpen(false);
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
            <li>
                <img style={{width:'25px', marginRight:'5px'}} src={signinLogo} alt="signinLogo" />
                <Link state={{prevURL: location.pathname}} to="/signin" onClick={handleSideNavClose}>Sign In</Link>
            </li>
            <li>
                <img style={{width:'25px', marginRight:'5px'}} src={cartLogo} alt="cartLogo" />
                <Link to="/cart" onClick={handleSideNavClose}>Go to Cart</Link>
            </li>
        </ul>
    </nav>
  )
}

export default SidebarNav