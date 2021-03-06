import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faTrashCan} from "@fortawesome/free-regular-svg-icons";
import {useDispatch} from "react-redux";


import {productsActions} from "../../redux";
import css from "./ProductDetails.module.css"
import {ModalForDeleting} from "../ModalForDeleting/ModalForDeleting";
import {EditForm} from "../EditForm/EditForm";


const ProductDetails = ({product}) => {
    const dispatch = useDispatch();
    const {name, imageUrl, count, size, weight} = product;
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openEditForm, setOpenEditForm] = useState(false);
    const {width, height} = size;

    return (
        <div className={css.main}>
            <div className={css.item_card}>
                <img src={imageUrl} alt={name}/>
                <div className={css.text}>
                    <h2>{name}</h2>
                    <p>Quantity:{count}</p>
                    <p>Weight:{weight}</p>
                    <h4>Sizes</h4>
                    <p>Width: {width} x Height:{height}</p>
                </div>
                <div className={css.icons}>
                    <FontAwesomeIcon onClick={() => {
                        setOpenEditForm(true);
                        dispatch(productsActions.setProductForUpdate({product}))
                    }} icon={faEye}/>
                    <FontAwesomeIcon onClick={() => setOpenDeleteModal(true)} icon={faTrashCan}/>
                </div>
            </div>
            {openDeleteModal && <ModalForDeleting setOpenDeleteModal={setOpenDeleteModal} product={product}/>}
            {openEditForm && <EditForm setOpenEditForm={setOpenEditForm}/>}

        </div>
    );
};

export {ProductDetails};
