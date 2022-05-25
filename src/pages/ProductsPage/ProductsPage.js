import React, {useEffect, useState} from 'react';
import {CreateForm, Products} from "../../components";
import css from "./ProductsPage.module.css"
import {useDispatch} from "react-redux";
import {productsActions} from "../../redux";

const ProductsPage = () => {
    const [openCreateForm, setOpenCreateForm] = useState(false);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsActions.getAll())
    }, [])



    return (
        <div>

            <Products setProducts={setProducts}/>
            <button onClick={() => setOpenCreateForm(true)} className={css.white_button}>Add a new product</button>
            {openCreateForm && <CreateForm setOpenCreateForm={setOpenCreateForm}/>}

        </div>
    );
};

export {ProductsPage};