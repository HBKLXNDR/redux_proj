import React from 'react';

import css from "./Product.module.css"
import {faEye, faTrashCan} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Product = ({product:{name, count, imageUrl, size}}) => {
    const {width, height} = size;


    return (
        <div>
            <div className={css.item_card}>
                <img src={imageUrl} alt={name}/>
                <div className={css.footerCard}>
                    <div>
                        <h3>{name}</h3>
                        <p>Quantity: {count}</p>
                        <p>{width}x{height}</p>
                    </div>
                    <div className={css.icons}>
                        <FontAwesomeIcon icon={faEye}/>
                        <FontAwesomeIcon icon={faTrashCan}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Product};

