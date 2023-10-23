import {legacy_createStore, combineReducers, applyMiddleware} from 'redux';
import productsReducer from './Reducers/productsReducer';
import cartReducer from './Reducers/cartReducer';
// import logger from 'redux-logger'

const combinedReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

const reduxStore = legacy_createStore(combinedReducer, applyMiddleware());

export default reduxStore;