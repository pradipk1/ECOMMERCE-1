import React from 'react'
import '../../Cart/CartSubTotal/CartSubTotal.css'
import { useSelector } from 'react-redux';

function TotalPayable() {
  
    let cartLength = useSelector((store) => {return store.cart.cartItems.length});
    let subTotal = useSelector((store) => {
      let total = 0;
      store.cart.cartItems.forEach((ele) => {
        total+=ele.price*ele.quantity;
      });
      return total;
    });
  
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
        <div className='CartTotalAmountDiv' style={{borderBottom:'none'}}>
          <span>Total Payable</span>
          <span>
            {
              subTotal >= 500 ? `$${subTotal}` : `$${subTotal+10}`
            }
          </span>
        </div>
      </>
    )
}

export default TotalPayable