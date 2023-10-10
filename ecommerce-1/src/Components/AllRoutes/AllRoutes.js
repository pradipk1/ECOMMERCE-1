import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import ProductDetails from '../ProductDetails/ProductDetails'
import Cart from '../Cart/Cart'
import Payment from '../Payment/Payment'
import ThankYou from '../ThankYou/ThankYou'

function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productdetails/:id' element={<ProductDetails />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/payment' element={<Payment />}/>
        <Route path='/thankyou' element={<ThankYou />}/>
    </Routes>
    </>
  )
}

export default AllRoutes
