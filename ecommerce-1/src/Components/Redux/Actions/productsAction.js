import reduxStore from "../ReduxStore";

const productsAction = (productsData, setFilteredItems) => {
    if(productsData.length===0){
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => {
            setFilteredItems(data.products);
            reduxStore.dispatch({
                type:'PRODUCTS',
                payload:data.products
            });
        });
    } else {
        // setFilteredItems(productsData);
    }
}

const addFilterAction = (selectedCategory) => {
    reduxStore.dispatch({
        type:'ADDFILTER',
        payload:selectedCategory
    })
}

const removeFilterAction = (selectedCategory) => {
    reduxStore.dispatch({
        type:'REMOVEFILTER',
        payload:selectedCategory
    })
}

export {productsAction, addFilterAction, removeFilterAction};