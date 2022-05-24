import React, {useState} from 'react';
import {faEye, faTrashCan} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch} from "react-redux";


import css from "./Product.module.css"
import {ModalForDeleting} from "../ModalForDeleting/ModalForDeleting";
import {EditForm} from "../EditForm/EditForm";
import {productsActions} from "../../redux";
import {Comments} from "../Comments/Comments";

const Product = ({product, product: {name, count, imageUrl, size}}) => {
    const {width, height} = size;
    const dispatch = useDispatch();
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openEditForm, setOpenEditForm] = useState(false);


    return (
        <div>
            <div className={css.item_card}>
                <img src={imageUrl} alt={name}/>
                <div className={css.footerCard}>
                    <div>
                        <h3>{name}</h3>
                        <p>Quantity: {count}</p>
                        <p>{width}x{height}</p>
                    </div>
                    <div className={css.icons}>
                        <FontAwesomeIcon onClick={() => {
                            setOpenEditForm(true);
                            dispatch(productsActions.setProductForUpdate({product}))
                        }} icon={faEye}/>
                        <FontAwesomeIcon onClick={() => setOpenDeleteModal(true)} icon={faTrashCan}/>
                    </div>
                    <Comments product={product}/>
                </div>
            </div>
            {openDeleteModal && <ModalForDeleting setOpenDeleteModal={setOpenDeleteModal} product={product}/>}
            {openEditForm && <EditForm setOpenEditForm={setOpenEditForm}/>}

        </div>
    );
};

export {Product};

