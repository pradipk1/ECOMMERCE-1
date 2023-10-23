import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import { cartAction, decrementProductQuantity, incrementProductQuantity, removeFromCart } from '../Redux/Actions/cartAction';

function ProductDetails() {

    const {id} = useParams();
    const productData = useSelector((store) => {
        let data = store.products.products.filter((ele) => ele.id==id);
        return data[0] || {};
    });

    let quantity = useSelector((store) => {
        let cartItems = store.cart.cartItems;
        let index;
        let f = false;
        for(let i=0; i<cartItems.length; i++) {
          if(id==cartItems[i].id) {
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

      const handleAddToCart = () => {
        cartAction(productData);
    }

    const handleDecrement = () => {
        if(quantity===1) {
          removeFromCart(productData);
        } else {
          decrementProductQuantity(productData);
        }
    }

    const handleIncrement = () => {
        incrementProductQuantity(productData);
    }

  return (
    <>
      {
        Object.keys(productData).length===0 ? 
        <div style={{textAlign:'center', marginTop:'50px'}}>
          <h2>OOPs! Something went wrong</h2>
          <p>Please go back and come back again!</p>
        </div> 
        : <div className='ProductDetailsFlex'>
            <div className='ProductDetailsContainer'>
                <div className='ProductImageContainer'>
                    <img className='ProductImageTag' src={productData.thumbnail==='undefined' ? '' : productData.thumbnail} alt={`ProductImage:${id}`}/>
                </div>
                <div className='ProductDetailsDiv'>
                    <h3>{productData.title}</h3>
                    <p style={{marginBottom:'10px'}}>{productData.description}</p>
                    <p style={{marginBottom:'10px'}}><b>Rating:</b> <span className='PoductDetailsStar'>{productData.rating}⭐</span></p>
                    <h3 style={{marginBottom:'10px'}}>${productData.price}</h3>
                    {
                        quantity<1 ? <button className='ProductDetailsAddToCartBtn' onClick={handleAddToCart}>Add to Cart</button> : 
                        <div className='ProductDetailsProductCounter'>
                            <button className='ProductDetailsProductDecrementBtn' onClick={handleDecrement}>-</button>
                            <span className='ProductDetailsProductCount'>{quantity}</span>
                            <button className='ProductDetailsProductIncrementBtn' onClick={handleIncrement}>+</button>
                        </div>
                    }
                </div>
            </div>
        </div>
      }
    </>
    
    
  )
}

export default ProductDetails
