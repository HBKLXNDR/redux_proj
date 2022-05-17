import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    products: []
}



const productSLice = createSlice({
    name: "productSlice",
    initialState,

});

const {reducer: productReducer} = productSLice

const productsActions = {

}

export {
    productReducer,
    productsActions
}