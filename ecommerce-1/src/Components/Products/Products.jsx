import React, { useEffect, useState } from 'react';
import './Products.css';
import {Link} from 'react-router-dom'
import {cartAction, decrementProductQuantity, incrementProductQuantity, removeFromCart} from '../Redux/Actions/cartAction';
import { useSelector } from 'react-redux';

function Products(props) {

    let quantity = useSelector((store) => {
      let cartItems = store.cart.cartItems;
      let index;
      let f = false;
      for(let i=0; i<cartItems.length; i++) {
        if(props.productData.id===cartItems[i].id) {
          index=i;
          f = true;
          break;
        }
      }
      if(f) {
        return cartItems[index].quantity;
      } else {
        return 0;
      }
    });

    const obj = props.productData;

    // let obj = {
    //     "id": 1,
    //     "title": "iPhone 9",
    //     "description": "An apple mobile which is nothing like apple",
    //     "price": 549,
    //     "discountPercentage": 12.96,
    //     "rating": 4.69,
    //     "stock": 94,
    //     "brand": "Apple",
    //     "category": "smartphones",
    //     "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    // }

    const handleAddToCart = () => {
        cartAction(props.productData);
    }

    const handleDecrement = () => {
        if(quantity===1) {
          removeFromCart(props.productData);
        } else {
          decrementProductQuantity(props.productData);
        }
    }
    
    const handleIncrement = () => {
        incrementProductQuantity(props.productData);
    }

  return (
    <div className='HomeProductCard'>

      <Link to={`/productdetails/${obj.id}`} className='ProductImageContainer'>
        <img className='HomeProductImage' src={obj.thumbnail}/>
      </Link>

      <div className='HomeProductDetailsContainer'>
        <h3 className='HomeProductTitle'>{obj.title}</h3>
        <p style={{marginBottom:'8px'}} className='HomeProductDesc'>{obj.description}</p>
        <p style={{marginBottom:'8px'}}>Rating: <span className='ProductStar'>{obj.rating}⭐</span></p>
        <div className='HomeProductPrice-CartBtn'>
            <h3 style={{marginBottom:'8px'}}>${obj.price}</h3>
            {
                quantity<1 ? <button className='HomeAddToCartBtn' onClick={handleAddToCart}>Add to Cart</button> : 
                <div className='HomeProductCounter'>
                    <button className='HomeProductDecrementBtn' onClick={handleDecrement}>-</button>
                    <span className='HomeProductCount'>{quantity}</span>
                    <button className='HomeProductIncrementBtn' onClick={handleIncrement}>+</button>
                </div>
            }
        </div>
      </div>

    </div>
  )
}

export default Products;
