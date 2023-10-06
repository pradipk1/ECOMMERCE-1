import React from 'react'
import './EmptyCart.css'
import cartimage from '../../Images/cartimage.png'
import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className='EmptyCartContainer'>
        <div>
            <div className='EmptyCartDiv'>
                <img src={cartimage} alt='cartimage'/>
                <h2>Your Cart is empty.</h2>
            </div>
            <div className='ContinueShoppingDiv'>
                <Link className='ContinueShoppingLink' to='/'>←ContinueShopping</Link>
            </div>
        </div>
    </div>
    
  )
}

export default EmptyCart;