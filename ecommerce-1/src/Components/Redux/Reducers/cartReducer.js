
let initialData = {
    totalCartCount:0,
    cartItems:[]
}

const cartReducer = (state = initialData, action) => {
    if(action.type==='ADDTOCART') {
        action.payload.quantity = 1;
        state = {
            ...state,
            cartItems:[...state.cartItems, action.payload],
            totalCartCount:state.totalCartCount+1
        }
    } else if(action.type==='DECREMENT') {
        let index;
        state.cartItems.map((ele, i) => {
            if(ele.id==action.payload) {
                index=i;
            }
        });
        state.cartItems[index].quantity=state.cartItems[index].quantity-1;
        state = {
            ...state,
            totalCartCount:state.totalCartCount-1
        }
    } else if(action.type==='INCREMENT') {
        let index;
        state.cartItems.map((ele, i) => {
            if(ele.id==action.payload) {
                index=i;
            }
        });
        state.cartItems[index].quantity=state.cartItems[index].quantity+1;
        state = {
            ...state,
            totalCartCount:state.totalCartCount+1
        }
    } else if(action.type==='REMOVEFROMCART') {
        let index;
        state.cartItems.map((ele, i) => {
            if(ele.id==action.payload) {
                index=i;
            }
        });
        state.cartItems.splice(index,1);
        state = {
            ...state,
            totalCartCount:state.totalCartCount-1
        }
    } else if(action.type==='EMPTY') {
        state = {
            totalCartCount: 0,
            cartItems: []
        }
    }
    
    return state;
}

export default cartReducer;