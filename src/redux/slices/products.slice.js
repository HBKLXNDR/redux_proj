import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {productService} from "../../services";

const initialState = {
    products: [],
    status: null,
    formErrors: {},
    productForUpdate
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
    async ({product}) => {
        const {data} = await productService.create(product);
        return data
    }
)

const deleteById = createAsyncThunk(
    "deleteById",
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            await productService.deleteById(id);
            dispatch(deleteProductById({id}))
        } catch (e) {
            return rejectWithValue({status: e.message})
        }
    }
);
const updateById = createAsyncThunk(
    "updateById",
    async ({id, car}, {dispatch, rejectWithValue}) => {
        try {
            await carService.updateById(id, car);
            dispatch(updateCarById({id, car}))
        } catch (e) {
            return rejectWithValue({status: e.message})
        }
    }
);


const productSLice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        deleteProductById: (state, action) => {
            const index = state.product.findIndex(product => product.id === action.payload.id);
            state.product.splice(index, 1)
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

const {
    reducer: productReducer, actions: {
        create,
        deleteById,
        updateById,
        setProductForUpdate
    }
} = productSLice

const productsActions = {
    getAll,
    create,
    deleteById,
    updateById,
    setProductForUpdate

}

export {
    productReducer,
    productsActions
}