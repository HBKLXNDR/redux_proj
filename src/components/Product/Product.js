import React from 'react';

import css from "./Product.module.css"
import {productService} from "../../services";

const Product = ({product: {id, name, imageUrl, weight}, setOpenModal, setDelProducts}) => {
    // const [remove, setRemove] = useState();

    const openPopup = () => {
        setOpenModal(id)
    }

    // const deleteProduct = async ()=>{
    //     await productService.deleteById(id)
    //     setDelProducts(id)
    // }


    return (<div>
            <div className={css.item_card}>
                <img src={imageUrl} alt={name}/>
                <h1>{name}</h1>
                <p>{id}</p>
                <p>{weight}</p>
                <button onClick={openPopup}>add</button>
                <button onClick={()=>{}}>delete</button>
            </div>


        </div>

    );
};

export {Product};