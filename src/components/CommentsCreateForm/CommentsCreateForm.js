import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {commentActions} from "../../redux";

const CommentsCreateForm = ({setOpenCommentsCreateForm}) => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();

    const submit = async (newComment) => {
        await dispatch(commentActions.createProd({comment: newComment}))
        reset()
        setOpenCommentsCreateForm(false)
    }



    return (
        <div onClick={handleSubmit(submit)}>
            <p>Leave your comment and input date!</p>
            <div><label><input type="text" {...register("description")}/></label></div>
            <div><label><input type="text" {...register("date")}/></label></div>
        </div>
    );
};

export {CommentsCreateForm};

