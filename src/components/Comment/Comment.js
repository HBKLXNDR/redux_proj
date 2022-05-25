import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import css from "./Comment.module.css"
import {commentActions} from "../../redux";
import {CommentsCreateForm} from "../CommentsCreateForm/CommentsCreateForm";


const Comment = ({
                     comment,
                     comment: {
                         id,
                         productId,
                         description,
                         date
                     }
                 }) => {
    const [openCommentsCreateForm, setOpenCommentsCreateForm] = useState();

    const dispatch = useDispatch();
    const deleteById = async () => {
        await dispatch(commentActions.deleteById({id}))

    }
    return (<div className={css.center}>
            <h3>Comments</h3>
            <div className={css.margin}>
                <h4>Comment № {id}</h4>
                <p>{description}</p>
                <p>Created: {date}</p>
                <div className={css.buttons}>
                    <button onClick={deleteById}>Delete</button>
                    <button onClick={() => setOpenCommentsCreateForm(true)}>Add a new one</button>
                </div>
            </div>
            {openCommentsCreateForm && <CommentsCreateForm setOpenCommentsCreateForm={setOpenCommentsCreateForm}/>}
        </div>
    );
};

export {Comment};