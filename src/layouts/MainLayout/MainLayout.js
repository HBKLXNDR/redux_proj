import React from 'react';

import {Outlet} from "react-router-dom";

import {Header} from "../../components";

const MainLayout = () => {



    return (
        <div>
            <Header/>
            <Outlet/>

        </div>

    );
};

export {MainLayout};

// <div className={css.main_wrap}>
//
//     {
//         products.map((product) => <Product key={product.id} product={product} setOpenModal={setOpenModal}/>)
//     }
//     {openModal && <ModalForDeleting/>}
//
// </div>
