import React from 'react'
import './CartSubTotal.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CartSubTotal() {
  let cartLength = useSelector((store) => {return store.cart.cartItems.length});
  let subTotal = useSelector((store) => {
    // cartLength=store.cart.cartItems;
    let total = 0;
    store.cart.cartItems.forEach((ele) => {
      total+=ele.price*ele.quantity;
    });
    return total;
  });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/payment');
  }

  return (
    <>
      <div className='CartPriceTextContainer'>PRICE DETAILS</div>
      <div className='CartPriceFlexDiv'>
        <span>
          {
            `Price (${cartLength} ${cartLength > 1 ? "items" : "item"})`
          }
        </span>
        <span>
          {
            `$${subTotal}`
          }
        </span>
      </div>
      <div className='CartPriceFlexDiv'>
        <span>Delivery Charges</span>
        <span>
          {
            subTotal >= 500 ? "$0" : "$10"
          }
        </span>
      </div>
      <div className='CartTotalAmountDiv'>
        <span>Total Amount</span>
        <span>
          {
            subTotal >= 500 ? `$${subTotal}` : `$${subTotal+10}`
          }
        </span>
      </div>
      <div className='CartPlaceOrderBtnDiv'>
        <button onClick={handleClick}>Place Order</button>
      </div>
    </>
  )
}

export default CartSubTotal;