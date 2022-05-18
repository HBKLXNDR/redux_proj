import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {productsActions} from "../../redux";

const ProductForm = () => {

    const {reset, register, handleSubmit} = useForm();

    const dispatch = useDispatch();

    const submit = async (newProduct) => {
       await  dispatch(productsActions.create({product: newProduct}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>imageUrl:<input type="url"{...register("imageUrl")}/></label></div>
            <div><label>name:<input type="text"{...register("name")}/></label></div>
            <div><label>count:<input type="text"{...register("count")}/></label></div>
            <div><label>weight:<input type="text"{...register("weight")}/></label></div>
            <button>Save</button>
        </form>
    );
};

export {ProductForm};