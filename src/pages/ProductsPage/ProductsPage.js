import React, {useState} from 'react';
import {CreateForm, Products} from "../../components";
import css from "./ProductsPage.module.css"
const ProductsPage = () => {
    const [openCreateForm, setOpenCreateForm] = useState(false);

    return (
        <div>

            <Products/>
            <button onClick={()=>setOpenCreateForm(true)} className={css.white_button}>Add a new product</button>
            {openCreateForm && <CreateForm setOpenCreateForm={setOpenCreateForm}/>}
            <div className={css.absolute}>
                <button>Sort</button>
            </div>

        </div>
    );
};

export {ProductsPage};