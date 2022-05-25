import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {commentActions} from "../../redux";

const CommentsCreateForm = ({setOpenCommentsCreateForm}) => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();

    const submit = async (newComment) => {
        await dispatch(commentActions.createComment({comment: newComment}))
        reset()
        setOpenCommentsCreateForm(false)
    }


    return (
        <div onClick={handleSubmit(submit)}>
            <p>Leave your comment and input date!</p>
            <div><label><input type="text" {...register("description", {required: true})}/></label></div>
            <div><label><input type="text" {...register("date", {required: true})}/></label></div>
        </div>
    );
};

export {CommentsCreateForm};

