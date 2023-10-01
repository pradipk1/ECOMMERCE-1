import React, { useEffect, useState } from 'react'
import './Home.css'
import Products from '../Products/Products';

function Home() {
  
  const [products, setProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(products);

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
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
      console.log(data.products);
      setProducts(data.products);
    });
    filterItems();
  }, [selectedFilters])

  const filterItems = () => {
    if(selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items.filter((item) => item.categoryegory === selectedCategory);
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
        <Products />
        <Products />
        <Products />
        <Products />
      </div>
    </div>
  )
}

export default Home
