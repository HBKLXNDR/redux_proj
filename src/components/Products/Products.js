import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {ProductExtra} from "../ProductExtra/ProductExtra";
import {productsActions} from "../../redux";
import {useLocation, useSearchParams} from "react-router-dom";

const Products = () => {
    const {products } = useSelector(state => state.products);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(productsActions.getAll() )
    },[])
    return (
        <div>
            {products.map(product => <ProductExtra key={product.id} product={product}/>)}
            <button></button>
            <button></button>
        </div>
    );
};

export {Products};