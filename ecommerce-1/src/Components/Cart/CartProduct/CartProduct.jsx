import React from 'react'
import './CartProduct.css'
import { decrementProductQuantity, incrementProductQuantity, removeFromCart } from '../../Redux/Actions/cartAction';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartProduct(props) {

    let obj = props.cartData

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

    let quantity = useSelector((store) => {
        let cartItems = store.cart.cartItems;
        let index;
        let f = false;
        for(let i=0; i<cartItems.length; i++) {
          if(props.cartData.id===cartItems[i].id) {
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

    const handleDecrement = () => {
        if(quantity===1) {
          removeFromCart(obj);
        } else {
          decrementProductQuantity(obj);
        }
    }

    const handleIncrement = () => {
        incrementProductQuantity(obj);
    }

  return (
    <>
        {
            quantity > 0 ? 
            <div className='CartProductCard'>

                <Link to={`/productdetails/${obj.id}`} className='CartProductImageContainer'>
                    <img src={obj.thumbnail}/>
                </Link>

                <div className='CartProductDetailsContainer'>
                    <h3>{obj.title}</h3>
                    <p style={{marginBottom:'8px'}} className='cartProductDescription'>{obj.description}</p>
                    <p style={{marginBottom:'8px'}}>Rating: <span className='CartProductRating'>{obj.rating}⭐</span></p>
                    <div className='CartProductPrice-Btn'>
                        <h3>${obj.price*quantity}</h3>
                        <div className='CartProductCounter'>
                            <button className='CartProductDecrementBtn' onClick={handleDecrement}>-</button>
                            <span className='CartProductCount'>{quantity}</span>
                            <button className='CartProductIncrementBtn' onClick={handleIncrement}>+</button>
                        </div>
                    </div>
                    
                </div>

            </div>
            : ""
        }
    </>
    
  )
}

export default CartProduct