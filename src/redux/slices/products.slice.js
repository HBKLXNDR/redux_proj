import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {productService} from "../../services";

let initialState = {
    products: []
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
                const {products} = action.payload
                state.products = products
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