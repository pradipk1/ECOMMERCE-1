
let initialData = {
    products:[],
    selectedFilters:[]
}

const productsReducer = (state = initialData, action) => {
    if(action.type==='PRODUCTS'){
        state = {
            ...state,
            products:action.payload
        }
    } else if(action.type==='ADDFILTER') {
        state = {
            ...state,
            selectedFilters:[...state.selectedFilters, action.payload]
        }
    } else if(action.type==='REMOVEFILTER') {
        state = {
            ...state,
            selectedFilters:action.payload
        }
    }

    return state;
}

export default productsReducer;