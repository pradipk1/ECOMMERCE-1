import reduxStore from "../ReduxStore";

const productsAction = (setFilteredItems) => {
    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
        setFilteredItems(data.products);
        reduxStore.dispatch({
            type:'PRODUCTS',
            payload:data.products
        });
    });
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