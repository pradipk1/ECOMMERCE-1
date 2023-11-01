import React, { useEffect, useState } from 'react'
import './Home.css'
import Products from '../Products/Products';
import {useSelector} from 'react-redux';
import {addFilterAction, productsAction, removeFilterAction} from '../Redux/Actions/productsAction';
import Cart from '../Cart/Cart';

function Home() {
  
  // const [selectedFilters, setSelectedFilters] = useState([]);

  const [filteredItems, setFilteredItems] = useState([]);

  const selectedFilters = useSelector((storeData) => {
    return storeData.products.selectedFilters;
  });

  const productsData = useSelector((storeData) => {
    return storeData.products.products;
  });
  // console.log(selectedFilters)

  const handleFilter = (selectedCategory) => {
    if(selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((ele) => ele !== selectedCategory);
      removeFilterAction(filters);
    } else {
      addFilterAction(selectedCategory);
    }
  }
  
  let filters = ["smartphones","laptops","fragrances","skincare","groceries","home-decoration"];

  useEffect(() => {

    if(productsData.length!==0) {
      filterItems();
    } else {
      productsAction(setFilteredItems);
    }
  }, [selectedFilters])

  const filterItems = () => {
    if(selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = productsData.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems(productsData);
    }
  }

  return (
    <div className='HomeContainer'>

      <div className='SideBarFiltersContainer'>
        <h3 style={{textAlign:'center'}}>Filter By:</h3>
        <div className='SideBarFiltersDiv'>
          {
            filters.map((category,i)=>(
              <button
                onClick={() => handleFilter(category)} 
                className={`FilterButton ${
                  selectedFilters.includes(category) ? "active" : ""
                }`} 
                key={`filterButton-${i}`}
              >{category.toUpperCase()}</button>
            ))
          }
        </div>
        
      </div>

      <div className='ProductContainer'>
        {
          filteredItems.length > 0 ? 
            filteredItems.map((ele,i) => (
              <Products productData={ele} key={`product-${i}`}/>
            ))
           : <div style={{display:'flex', justifyContent:'center', marginTop:'50px', width:'200%'}}><h3>...Loading...</h3></div>
        }
      </div>

      {/* <Cart /> */}
    </div>
  )
}

export default Home
