import React, { useEffect } from 'react'
import './ThankYou.css'
import { Link, useNavigate } from 'react-router-dom'

function ThankYou() {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 2000);
    });
    
  return (
    <div className='ThankYouContainer'>
        <div className='ThankYouDiv'>
            <p>Thank You for Shopping</p>
            <Link className='ThankYouLink' to='/'>ContinueShopping→</Link>
        </div>
    </div>
  )
}

export default ThankYou