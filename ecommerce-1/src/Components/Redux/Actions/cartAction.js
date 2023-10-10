import reduxStore from "../ReduxStore";

const cartAction = (cartData) => {
    // let obj = cartData;
    // obj.quantity = 1
    // console.log(obj)
    reduxStore.dispatch({
        type:'ADDTOCART',
        payload:cartData
    });
}

const decrementProductQuantity = (cartData) => {
    reduxStore.dispatch({
        type:'DECREMENT',
        payload:cartData.id
    });
}

const incrementProductQuantity = (cartData) => {
    reduxStore.dispatch({
        type:'INCREMENT',
        payload:cartData.id
    });
}

const removeFromCart = (cartData) => {
    reduxStore.dispatch({
        type:'REMOVEFROMCART',
        payload:cartData.id
    });
}

export {cartAction, decrementProductQuantity, incrementProductQuantity, removeFromCart};