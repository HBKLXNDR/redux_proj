import React, {useState} from 'react';
import {Modal} from "../Modal/Modal";
import css from "../../layouts/MainLayout/MainLayout.module.css"
import css_module from "../Modal/modal.module.css"

const Product = ({product: {id, name, image, weight}}) => {
    const [active, setActive] = useState();
    const [openModel, setOpenModel] = useState("");
    const openModal = () => {
        return (<div className={css_module.modal}>
            <div className={css_module.modal_content}>
                sosi
            </div>
        </div>)
    }
    const deleteItem = () => {
        console.log(id);
    }
    return (
        <div>
            <div className={css.item_card}>
                <img src={image} alt={name}/>
                <h1>{name}</h1>
                <p>{id}</p>
                <p>{weight}</p>
                <button onClick={(() => {
                    setOpenModel(id)
                })}>add
                </button>
                <button onClick={deleteItem}>delete</button>


            </div>
            {
                openModel === id && openModal()
            }
        </div>

    )
        ;
};

export {Product};