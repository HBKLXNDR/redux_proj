import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from "./Products.module.css"
import {productsActions} from "../../redux";
import {Product} from "../Product/Product";

const Products = () => {
    const {products} = useSelector(state => state.products)
    const dispatch = useDispatch();


    const sorter = () => {
        dispatch(productsActions.getAllSortedByName())
    }
    const sorter2 = () => {
        dispatch(productsActions.getAllSortedByQuantity())
    }

    useEffect(() => {
        dispatch(productsActions.getAll())
    }, [])

    return (

        <div>
            <div className={css.main_wrap}>
                {products.map(product => <Product key={product.id} product={product}/>)}

            </div>
            <div className={css.navbar}>
                <div className={css.dropdown}>
                    <button className={css.dropbtn}>Sorting</button>
                    <div className={css.dropdown_content}>
                        <a href="#" onClick={() => sorter()}>Alphabet</a>
                        <a href="#" onClick={() => sorter2()}>Quantity</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Products};