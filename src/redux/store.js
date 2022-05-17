import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {productReducer} from "./slices";

const rootReducer = combineReducers({
    products: productReducer
});

const store = configureStore({
    reducer: rootReducer
});

export {
    store
}