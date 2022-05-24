import React from 'react';
import {Link} from "react-router-dom";



import css from "./Product.module.css"


const Product = ({product, product: {id, name, count, imageUrl, size}}) => {
    const {width, height} = size;


    return (
        <div>
            <div className={css.item_card}>
                <img src={imageUrl} alt={name}/>

                <div className={css.footerCard}>
                    <h3>{name}</h3>
                    <p>Quantity: {count}</p>
                    <p>{width}x{height}</p>
                    <Link to={id.toString()} state={product}>
                        <button className={css.details_button}>Get details</button>
                    </Link>
                </div>


            </div>


        </div>
    );
};

export {Product};

