import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import ProductDetails from '../ProductDetails/ProductDetails'

function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productdetails' element={<ProductDetails />}/>
    </Routes>
    </>
  )
}

export default AllRoutes
