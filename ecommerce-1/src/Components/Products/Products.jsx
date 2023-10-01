import React, { useState } from 'react';
import './Products.css';

function Products() {

    const [productCount, setProductCount] = useState(1);

    let obj = {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    }

    const handleAddToCart = () => {
        setProductCount(1);
    }

    const handleDecrement = () => {
        setProductCount(prev => prev-1);
    }
    const handleIncrement = () => {
        setProductCount(prev => prev+1);
    }
  return (
    <div className='HomeProductCard'>
      <div className='ProductImageContainer'>
        <img className='HomeProductImage' src={obj.thumbnail}/>
      </div>
      <div className='HomeProductDetailsContainer'>
        <h3>{obj.title}</h3>
        <p style={{marginBottom:'8px'}} className='HomeProductDesc'>{obj.description}</p>
        <p style={{marginBottom:'8px'}}>Rating: {obj.rating}</p>
        <div className='HomeProductPrice-CartBtn'>
            <h3 style={{marginBottom:'8px'}}>${obj.price}</h3>
            {
                productCount<1 ? <button className='HomeAddToCartBtn' onClick={handleAddToCart}>Add to Cart</button> : 
                <div className='HomeProductCounter'>
                    <button className='HomeProductDecrementBtn' onClick={handleDecrement}>-</button>
                    <span className='HomeProductCount'>{productCount}</span>
                    <button className='HomeProductIncrementBtn' onClick={handleIncrement}>+</button>
                </div>
            }
        </div>
        
        
        
      </div>
    </div>
  )
}

export default Products
