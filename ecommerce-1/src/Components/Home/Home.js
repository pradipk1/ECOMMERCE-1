import React, { useEffect, useState } from 'react'
import './Home.css'
import Products from '../Products/Products';
import {useSelector} from 'react-redux';
import productsAction from '../Redux/productsAction';

function Home() {
  
  // const [products, setProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const [filteredItems, setFilteredItems] = useState([]);

  const productsData = useSelector((storeData) => {
    // console.log(storeData);
    // setFilteredItems(storeData.products.products);
    return storeData.products.products;
  });
  // setFilteredItems(productsData);
  // console.log(productsData);

  const handleFilter = (selectedCategory) => {
    if(selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((ele) => ele !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  }
  
  let filters = ["smartphones","laptops","fragrances","skincare","groceries","home-decoration"];

  useEffect(() => {

    if(productsData.length!==0) {
      setFilteredItems(productsData);
    }

    productsAction(productsData, setFilteredItems);

    // filterItems();
  }, [selectedFilters])

  const filterItems = () => {
    if(selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = productsData.filter((item) => item.categoryegory === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([]);
    }
  }

  return (
    <div className='HomeContainer'>

      <div className='SideBarFiltersContainer'>
        <h3 style={{textAlign:'center'}}>Filter By:</h3>
        {
          filters.map((category,i)=>(
            <button
              onClick={() => handleFilter(category)} 
              className={`FilterButton ${
                selectedFilters.includes(category) ? "active" : ""
              }`}
            >{category.toUpperCase()}</button>
          ))
        }
      </div>

      <div className='ProductContainer'>
        {
          filteredItems.length > 0 ? 
            filteredItems.map((ele,i) => (
              <Products productData={ele} key={`product-${i}`}/>
            ))
           : "Loading..."
        }

      </div>

    </div>
  )
}

export default Home
