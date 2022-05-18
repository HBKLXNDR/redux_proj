import React from 'react';

import css from "./ProductExtra.module.css"

const ProductExtra = ({product, product: {id, imageUrl, name, count, weight}}) => {

    return (
        <div>
            <div className={css.item_card_card}>
                <img src={imageUrl} alt={name}/>
                <h1>{name}: {id}</h1>
                <h3>Quantity: {count} </h3>
                <h3>Weight:{weight} </h3>
                <div className={css.flex}>
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>

        </div>
    )
        ;
};

export {ProductExtra};