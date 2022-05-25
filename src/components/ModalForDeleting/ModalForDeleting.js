import React from 'react';

import css from "./ModalForDeleting.module.css"
import {useDispatch} from "react-redux";
import {productsActions} from "../../redux";
import {useNavigate} from "react-router-dom";


const ModalForDeleting = ({setOpenDeleteModal, product: {id, name}}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const deleteById = async () => {
        await dispatch(productsActions.deleteById({id}))
        navigate("/")
    }

    return (
        <div>
            {<div className={css.modal}>
                <div className={css.modal_content}>
                    <h3>Are you sure you want to delete {name}?</h3>
                    <div className={css.confirm}>
                        <button onClick={deleteById}>Delete</button>
                        <button onClick={() => setOpenDeleteModal(false)}>Cancel</button>
                    </div>
                </div>
            </div>}

        </div>
    );
};

export {ModalForDeleting};