import React, {useEffect, useState} from 'react';
import css from "./MainLayout.module.css";
import {productService} from "../../services/product.service";
import {Product} from "../../components";

const MainLayout = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        productService.getAllL().then(({data}) => setProducts(data))
    }, [])

    return (
        <div className={css.main_wrap}>
                {
                    products.map((product) => <Product key={product.id} product={product}/>)
                }
        </div>

    );
};

export {MainLayout};

