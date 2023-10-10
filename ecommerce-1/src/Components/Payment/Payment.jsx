import React, { useState } from 'react'
import './Payment.css'
import TotalPayable from './TotalPayable/TotalPayable';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cartEmptyAction from '../Redux/Actions/cartEmptyAction';

function Payment() {

  const [paymentMethod, setPaymentMethod] = useState(null);

  const navigate = useNavigate();

  const cartLength = useSelector((store) => {
    return store.cart.cartItems.length;
  });

  const handleChange = (e) => {
    setPaymentMethod(e.target.value);
  }

  const handlePayment = () => {
    cartEmptyAction();
    navigate('/thankyou');
  }
  return (
    <>
      {
        cartLength === 0 ? <Navigate to='/'/> : 
        <div className='PaymentContainer'>

          <div className='PaymentMethodContainer'>

            <div className='PaymentSelectTextDiv'>
              <p>Please Select Payment Method</p>
            </div>
            
            <div className='PaymentMethodDiv'>
              <div className='PaymentMethodInputDiv'>
                <input onChange={handleChange} value='option1' type='radio' checked={paymentMethod==='option1'}/>
                <label htmlFor="">Wallets</label>
              </div>
              <div className={`PaymentBtnDiv ${paymentMethod==='option1' ? 'active' : ''}`}>
                <button onClick={handlePayment}>Make Payment</button>
              </div>
            </div>

            <div className="PaymentMethodDiv">
              <div className='PaymentMethodInputDiv'>
                <input onChange={handleChange} value='option2' type='radio' checked={paymentMethod==='option2'}/>
                <label htmlFor="">Credit/Debit/ATM Card</label>
              </div>
              <div className={`PaymentBtnDiv ${paymentMethod==='option2' ? 'active' : ''}`}>
                <button onClick={handlePayment}>Make Payment</button>
              </div>
            </div>
            
            <div className="PaymentMethodDiv">
              <div className='PaymentMethodInputDiv'>
                <input onChange={handleChange} value='option3' type='radio' checked={paymentMethod==='option3'}/>
                <label htmlFor="">Net Banking</label>
              </div>
              <div className={`PaymentBtnDiv ${paymentMethod==='option3' ? 'active' : ''}`}>
                <button onClick={handlePayment}>Make Payment</button>
              </div>
            </div>
            
            <div className="PaymentMethodDiv">
              <div className='PaymentMethodInputDiv'>
                <input onChange={handleChange} value='option4' type='radio' checked={paymentMethod==='option4'}/>
                <label htmlFor="">EMI (Easy Installments)</label>
              </div>
              <div className={`PaymentBtnDiv ${paymentMethod==='option4' ? 'active' : ''}`}>
                <button onClick={handlePayment}>Make Payment</button>
              </div>
            </div>

            <div className="PaymentMethodDiv">
              <div className='PaymentMethodInputDiv'>
                <input onChange={handleChange} value='option5' type='radio' checked={paymentMethod==='option5'}/>
                <label htmlFor="">UPI</label>
              </div>
              <div className={`PaymentBtnDiv ${paymentMethod==='option5' ? 'active' : ''}`}>
                <button onClick={handlePayment}>Make Payment</button>
              </div>
            </div>

            <div className="PaymentMethodDiv">
              <div className='PaymentMethodInputDiv'>
                <input onChange={handleChange} value='option6' type='radio' checked={paymentMethod==='option6'}/>
                <label htmlFor="">Cash on Delivery</label>
              </div>
              <div className={`PaymentBtnDiv ${paymentMethod==='option6' ? 'active' : ''}`}>
                <button onClick={handlePayment}>Continue</button>
              </div>
            </div>
            
          </div>

          <div className='PaymentTotalPriceContainer'>
            <TotalPayable />
          </div>

        </div>
      }
    </>
    
  )
}

export default Payment