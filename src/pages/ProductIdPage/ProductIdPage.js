import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";


import {ProductDetails} from "../../components";
import {productService} from "../../services";


const ProductIdPage = () => {
    const [product, setProduct] = useState(null);
    const {state} = useLocation();
    const {productId} = useParams()

    useEffect(() => {
        if (state) {
            setProduct(state)
        } else {
            productService.getById(productId).then(({data}) => setProduct(data))
        }
    }, [])

    return (
        <div>
            {
                product && <ProductDetails product={product}/>
            }
        </div>
    );
};

export {ProductIdPage};