import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from "./Products.module.css"
import {productsActions} from "../../redux";
import {Product} from "../Product/Product";
import {ProductForm} from "../ProductForm/ProductForm";

const Products = () => {
    const {products} = useSelector(state => state.products)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(productsActions.getAll())
    }, [])

    return (

        <div>
            <div className={css.main_wrap}>
                {products.map(product => <Product key={product.id} product={product}/>)}

            </div>
        </div>
    );
};

export {Products};