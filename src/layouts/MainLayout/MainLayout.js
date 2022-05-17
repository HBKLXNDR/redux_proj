import React, {useEffect, useState} from 'react';
import css from "./MainLayout.module.css";
import {productService} from "../../services";
import {Modal, Product} from "../../components";

const MainLayout = () => {
    const [products, setProducts] = useState([]);
    const [openModal, setOpenModal] = useState(null);
    // const [deleteProducts, setDeleteProducts] = useState(null);

    useEffect(() => {
        productService.getAllL().then(({data}) => setProducts(data))
    }, [])




    return (
        <div className={css.main_wrap}>
            {
                products.map((product) => <Product key={product.id} product={product} setOpenModal={setOpenModal} />)
            }
            {openModal && <Modal/>}

        </div>

    );
};

export {MainLayout};

