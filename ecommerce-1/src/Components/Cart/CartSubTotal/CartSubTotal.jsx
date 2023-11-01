import React, {useContext} from 'react'
import './CartSubTotal.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import loginContext from '../../Context/Context';

function CartSubTotal() {
  
    let cartLength = useSelector((store) => {return store.cart.cartItems.length});
    let subTotal = useSelector((store) => {
      let total = 0;
      store.cart.cartItems.forEach((ele) => {
        total+=ele.price*ele.quantity;
      });
      return total;
    });

    const {userData} = useContext(loginContext);
  
    const navigate = useNavigate();
  
    const handleClick = () => {
      if(userData.isLoggedIn) {
        navigate('/payment');
      } else {
        navigate('/signin', {
          state: {
            prevURL: '/cart'
          }
        });
      }
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