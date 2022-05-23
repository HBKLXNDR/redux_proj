import React, {useState} from 'react';

import {Outlet} from "react-router-dom";

import {Header, Modal, Product} from "../../components";

const MainLayout = () => {
    // const [products, setProducts] = useState([]);
    // const [openModal, setOpenModal] = useState(null);
    // const [deleteProducts, setDeleteProducts] = useState(null);

    // useEffect(() => {
    //     productService.getAllL().then(({data}) => setProducts(data))
    // }, [])


    return (
        <div>
            <Header/>
            <Outlet/>
            {/*<div className={css.main_wrap}>*/}

            {/*    {*/}
            {/*        products.map((product) => <Product key={product.id} product={product} setOpenModal={setOpenModal}/>)*/}
            {/*    }*/}
            {/*    {openModal && <Modal/>}*/}

            {/*</div>*/}
        </div>

    );
};

export {MainLayout};

