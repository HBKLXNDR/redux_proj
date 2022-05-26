import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


import {ProductDetails} from "../../components";
import {useSelector} from "react-redux";


const ProductIdPage = () => {
    const [product, setProduct] = useState(null);
    const {productId} = useParams()
    const {products} = useSelector(state => state.products)

    useEffect(() => {
        const filter = products.filter((product) => product.id == productId)
        setProduct(filter[0])
    }, [products])

    return (
        <div>
            {
                product && <ProductDetails product={product}/>
            }
        </div>
    );
};

export {ProductIdPage};
