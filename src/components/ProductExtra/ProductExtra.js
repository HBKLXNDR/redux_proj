import React from 'react';

import css from "./ProductExtra.module.css"

const ProductExtra = ({product: {id, imageUrl, name, count, weight}}) => {
    return (
        <div>
            <div className={css.item_card}>
                {imageUrl}
                {name}: {id}
                {count}
                {weight}
            </div>
        </div>
    );
};

export {ProductExtra};