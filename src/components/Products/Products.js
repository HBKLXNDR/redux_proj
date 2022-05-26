import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import css from "./Products.module.css"
import {Product} from "../Product/Product";

const Products = () => {
    const {products} = useSelector(state => state.products)
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('name');


    useEffect(() => {
        const sortArray = type => {
            const types = {
                name: 'name',
                count: 'count'
            };
            const sortProperty = types[type];
            let sorted = []
            if (sortProperty === 'name') {
                sorted = [...products].sort((a, b) => a[sortProperty].localeCompare(b[sortProperty]));
            } else {
                sorted = [...products].sort((a, b) => b[sortProperty] - a[sortProperty]);
            }

            setData(sorted);
        };

        sortArray(sortType);
    }, [sortType]);

    return (

        <div>
            <div className={css.main_wrap}>
                {data.map(product => <Product key={product.id} product={product}/>)}

            </div>
            <div className={css.navbar}>
                <div className={css.dropdown}>
                    <select onChange={(e) => setSortType(e.target.value)}>
                        <option value="name">Alphabet</option>
                        <option value="count">Quantity</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export {Products};
