import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {productService} from "../../services";

const initialState = {
    products: []
}

const getAll = createAsyncThunk(
    "productSlice/getAll",
    async () => {
        const {data} = await productService.getAllL();
        return data
    }
);

const create = createAsyncThunk(
    "create",
    async ({product})=>{
        const {data} = await productService.create(product);
        return  data
    }
)

const productSLice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {},
    extraReducers:{
        [getAll.fulfilled]:(state, action)=>{
            state.products = action.payload
        },
        [create.fulfilled]:(state, action)=>{
            state.products.push(action.payload)
        }
    }

});

const {reducer: productReducer, actions} = productSLice

const productsActions = {
    getAll,
    create,

}

export {
    productReducer,
    productsActions
}