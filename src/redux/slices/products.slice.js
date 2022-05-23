import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {productService} from "../../services";

const initialState = {
    products: [],
    status: null,
}

const getAll = createAsyncThunk(
    "productSlice/getAll",
    async () => {
        const {data} = await productService.getAll();
        return data
    }
);

const create = createAsyncThunk(
    "create",
    async ({product}) => {
        const {data} = await productService.create(product);
        return data
    }
)

const deleteById = createAsyncThunk(
    "deleteById",
    async ({id}, {dispatch, rejectWithValue}) => {
        await productService.deleteById(id);
        dispatch(deleteProductById({id}))
    }
)

const updateById = createAsyncThunk(
    "updateById",
    async ({id, product}, {dispatch, rejectWithValue}) => {
        await productService.updateById(id, product);
        dispatch(updateProductById({id, product}))

    }
)


const productSLice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        deleteProductById: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload.id)
            state.products.splice(index, 1)
        },
        updateProductById: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload.id);
            state.products[index] = {...state.products[index], ...action.payload.product};
        }
    },
    extraReducers: {
        [getAll.fulfilled]: (state, action) => {
            state.products = action.payload
        },
        [create.fulfilled]: (state, action) => {
            state.products.push(action.payload)
        }
    }

});

const {reducer: productReducer, actions: {deleteProductById, updateProductById}} = productSLice

const productsActions = {
    getAll,
    create,
    deleteById,
    updateById

}

export {
    productReducer,
    productsActions
}
