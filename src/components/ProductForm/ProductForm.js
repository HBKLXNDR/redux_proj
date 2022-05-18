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
        <form onSubmit={handleSubmit(submit)}>
            <div className={css.common, css.active}>
                <div className={css.input}>
                    <div className={css.flex}><label>imageUrl:<input type="url"{...register("imageUrl")}/></label></div>
                    <div className={css.flex}><label>name:<input type="text"{...register("name")}/></label></div>
                    <div className={css.flex}><label>count:<input type="text"{...register("count")}/></label></div>
                    <div className={css.flex}><label>weight:<input type="text"{...register("weight")}/></label></div>

                </div>
                <div className={css.flex}><label>comments:<input type="text"{...register("comments")}/></label></div>

                <button>Save</button>
            </div>
        </form>
    );
};

export {ProductForm};