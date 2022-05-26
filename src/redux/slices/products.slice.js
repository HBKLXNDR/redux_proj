import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {productService} from "../../services";

const initialState = {
    products: [],
    status: null,
    productForUpdate: null
}

const getAll = createAsyncThunk(
    "productSlice/getAll",
    async () => {
        const {data} = await productService.getAll();
        return data
    }
);

const createProd = createAsyncThunk(
    "create",
    async ({product}, {dispatch, rejectWithValue}) => {

        const {data} = await productService.create(product)
        dispatch(create({product: data}))
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
        create: (state, action) => {
            state.products.push(action.payload.product)
        },
        deleteProductById: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload.id)
            state.products.splice(index, 1)
        },
        updateProductById: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload.id);
            state.products[index] = {...state.products[index], ...action.payload.product};
        },
        setProductForUpdate: (state, action) => {
            state.productForUpdate = action.payload.product
        }

    },
    extraReducers: {
        [getAll.fulfilled]: (state, action) => {
            state.products = action.payload
        },
        [createProd.fulfilled]: (state, action) => {
        }
    }

});

const {
    reducer: productReducer,
    actions: {
        create,
        deleteProductById,
        updateProductById,
        setProductForUpdate,
    }
} = productSLice

const productsActions = {
    getAll,
    deleteById,
    updateById,
    createProd,
    setProductForUpdate
}

export {
    productReducer,
    productsActions
}
