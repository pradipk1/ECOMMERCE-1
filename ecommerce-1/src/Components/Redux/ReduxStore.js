import {legacy_createStore, combineReducers, applyMiddleware} from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import logger from 'redux-logger'

const combinedReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

const reduxStore = legacy_createStore(combinedReducer, applyMiddleware(logger));

export default reduxStore;