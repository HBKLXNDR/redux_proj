import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {productService} from "../../services";

let initialState = {
    product: []
}

const getAll = createAsyncThunk(
    "productSlice/getAll",
    async ()=>{
        const {data} = await productService.getAllL()
        return data
    }
)


const productSLice = createSlice({
    name: "productSlice",
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {product} = action.payload
                state.products = product
            })
    }

});

const {reducer: productReducer} = productSLice

const productsActions = {
    getAll,

}

export {
    productReducer,
    productsActions
}