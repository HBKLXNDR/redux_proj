import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import {productsActions} from "../../redux";
import {ProductExtra} from "../ProductExtra/ProductExtra";

const Products = () => {
    const {product: {id, imageUrl, name, count, weight}} = useSelector(state => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productsActions.getAll())
    }, [])
    return (
        <div>
            {imageUrl}
            {name}: {id}
            {count}
            {weight}
            <button>

            </button>
            <button>

            </button>
        </div>
    );
};

export {Products};