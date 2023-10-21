import React, {useContext} from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../Home/Home'
import ProductDetails from '../ProductDetails/ProductDetails'
import Cart from '../Cart/Cart'
import Payment from '../Payment/Payment'
import ThankYou from '../ThankYou/ThankYou'
import SignIn from '../SignIn/SignIn'
import Register from '../Register/Register'
import loginContext from '../Context/Context'
import PageNotFound from '../PageNotFound/PageNotFound'

function AllRoutes() {

  const {userData} = useContext(loginContext);
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productdetails/:id' element={<ProductDetails />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/payment' element={<Payment />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/thankyou' element={<ThankYou />}/>
        <Route path='*' element={<PageNotFound />}/>
    </Routes>
    </>
  )
}

export default AllRoutes
