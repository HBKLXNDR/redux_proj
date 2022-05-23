import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import css from "./ProductForm.module.css"
import {productsActions} from "../../redux";


const ProductForm = () => {

    const {reset, register, handleSubmit} = useForm();

    const dispatch = useDispatch();

    const submit = async (newProduct) => {
        await dispatch(productsActions.create({product: newProduct}))
        reset()
    }

    return (
        <div className={css.modal}>
            <form className={css.content} onSubmit={handleSubmit(submit)}>
                <div><label>Name: <input type="text"{...register("name")}/></label></div>
                <div><label>Image URL: <input type="text"{...register("imageUrl")}/></label></div>
                <div><label>Quantity: <input type="text"{...register("count", {valueAsNumber: true})}/></label></div>
                <div><label>Width: <input type="text"{...register("size.width", {valueAsNumber: true})}/></label></div>
                <div><label>Height: <input type="text"{...register("size.height", {valueAsNumber: true})}/></label>
                </div>
                <div className={css.confirm}>
                    <button>Save</button>
                    <button>cancel</button>
                </div>
            </form>
        </div>
    );
};

export {ProductForm};

