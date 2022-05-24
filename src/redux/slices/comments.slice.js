import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentService} from "../../services";

const initialState = {
    comments: [],
    status: null,
    commentForUpdate: null
}


const getAll = createAsyncThunk(
    "getAll",
    async () => {
        const {data} = await commentService.getAll();
        return data
    }
);

const createComment = createAsyncThunk(
    "create",
    async ({comment, dispatch}) => {
        const {data} = await commentService.create(comment)
        dispatch(create({product: data}))
    }
)

const deleteById = createAsyncThunk(
    "deleteById",
    async ({id}, {dispatch, rejectWithValue}) => {
        await commentService.deleteById(id);
        dispatch(deleteCommentById({id}))

    }
);

const updateById = createAsyncThunk(
    "updateById",
    async ({id, comment}, {dispatch, rejectWithValue}) => {
        await commentService.updateById(id, comment);
        dispatch(updateCommentById({id, comment}))

    }
);


const commentSlice = createSlice({
    name: "CommentSlice",
    initialState,
    reducers: {
        create: (state, action) => {
            state.comments.push(action.payload.comment)
        }
        , deleteCommentById: (state, action) => {
            const index = state.comments.findIndex(comment => comment.id === action.payload.id);
            state.comments.splice(index, 1)
        }, updateCommentById: (state, action) => {
            const index = state.comments.findIndex(comment => comment.id === action.payload.id);
            state.comments[index] = {...state.comments[index], ...action.payload.comment};
        },
        setCommentForUpdate: (state, action) => {
            state.commentForUpdate = action.payload.product

        }

    },
    extraReducers: {
        [getAll.fulfilled]: (state, action) => {
            state.comments = action.payload
        },
        [createComment.fulfilled]: (state, action)=>{
        }
    }
});


const {reducer: commentReducer, actions: {create,deleteCommentById, updateCommentById,setCommentForUpdate}} = commentSlice;


const commentActions = {
    getAll,
    deleteById,
    updateById,
    createComment,
    setCommentForUpdate
}

export {
    commentActions, commentReducer
}