import reduxStore from "./ReduxStore";

const productsAction = (productsData, setFilteredItems) => {
    if(productsData.length===0){
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => {
            setFilteredItems(data.products);
            // console.log(data.products);
            let newData = data.products.map((ele) => {
                let obj = ele;
                obj.quantity = 0;
                return obj;
            })
            // console.log(newData);
            reduxStore.dispatch({
                type:'PRODUCTS',
                payload:data.products
            });
        });
    } else {
        // console.log(productsData);
        setFilteredItems(productsData);
    }
}

export default productsAction;