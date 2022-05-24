import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import css from "../EditForm/EditForm.module.css";
import {productsActions} from "../../redux";

const EditForm = ({setOpenEditForm}) => {
    const {reset, register, handleSubmit, setValue} = useForm();
    const {productForUpdate} = useSelector(state => state.products);
    const dispatch = useDispatch();




    useEffect(() => {
        const {name, imageUrl, count, size} = productForUpdate;
        setValue("name", name)
        setValue("imageUrl", imageUrl)
        setValue("count", count)
        setValue("size.width", size.width)
        setValue("size.height", size.height)
    }, [productForUpdate])
    


    const update = async (newProduct) => {
        await dispatch(productsActions.updateById({id: productForUpdate.id, product: newProduct}))
        reset()
        setOpenEditForm(false)
    }

    return (
        <div className={css.modal}>

            <form className={css.content} onSubmit={handleSubmit(update)}>
                <div><label>Name: <input type="text"{...register("name")}/></label></div>
                <div><label>Image URL: <input type="text"{...register("imageUrl")}/></label></div>
                <div><label>Quantity: <input type="text"{...register("count", {valueAsNumber: true})}/></label></div>
                <div><label>Width: <input type="text"{...register("size.width", {valueAsNumber: true})}/></label></div>
                <div><label>Height: <input type="text"{...register("size.height", {valueAsNumber: true})}/></label>
                </div>
                <div className={css.confirm}>
                    <button>Edit</button>
                    <button onClick={() => setOpenEditForm(false)}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export {EditForm};