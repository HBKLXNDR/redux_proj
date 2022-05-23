import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {productReducer, commentReducer} from "./slices";

const rootReducer = combineReducers({
    products: productReducer, comments: commentReducer
});

const store = configureStore({
    reducer: rootReducer
});

export {
    store
}