import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {commentActions} from "../../redux";
import {Comment} from "../Comment/Comment";
import css from "./Comments.module.css"

const Comments = () => {
    const {comments} = useSelector(state => state.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(commentActions.getAll())
    }, [])

    return (
        <div className={css.comments}>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};

