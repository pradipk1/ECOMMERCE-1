import React from 'react'
import './Cart.css'
import EmptyCart from '../EmptyCart/EmptyCart';
import CartProduct from './CartProduct/CartProduct';
import { useSelector } from 'react-redux';
import CartSubTotal from './CartSubTotal/CartSubTotal';


function Cart(props) {

  const cartItems = useSelector((store) => {
    return store.cart.cartItems;
  });
  const cartLength = useSelector((store) => {
    return store.cart.cartItems.length;
  });

  return (
    <>
      {
        cartLength > 0 ? 
          <div className='CartContainer'>

            <div className='CartDiv'>
              <div className='CartShoppintTextContainer'>Shopping Cart</div>
              {
                cartItems.map((ele,i) => (
                  <CartProduct cartData={ele} key={`cartData-${i}`}/>
                ))
              }
            </div>

            <div className='cartSubTotalContainer'>
              <CartSubTotal />
            </div>

          </div> 
        : <EmptyCart />
      }
    </>
  )
}

export default Cart;