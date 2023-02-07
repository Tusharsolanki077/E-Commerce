// import { combineReducers, applyMiddleware } from "redux";
import { configureStore   } from '@reduxjs/toolkit';

import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

import { productsReducer ,productDetailsReducer} from "./reducers/productReducer";

const reducer = ({
    products: productsReducer,
    productDetails: productDetailsReducer,
});

// let initialState = {};

const middleware = [thunk];

const store = configureStore   ({
    reducer,
    middleware,
    
});

export default store;