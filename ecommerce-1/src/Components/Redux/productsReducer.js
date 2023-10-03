
let initialData = {
    products:[]
}

const productsReducer = (state = initialData, action) => {
    if(action.type==='PRODUCTS'){
        state = {
            ...state,
            products:action.payload
        }
    }

    return state;
}

export default productsReducer;