import React, {useState} from 'react';
import {CreateForm, Products} from "../../components";
import css from "./ProductsPage.module.css"

const ProductsPage = () => {
    const [openCreateForm, setOpenCreateForm] = useState(false);
    const [products, setProducts] = useState([]);


    const sorter = () => {
        const res = [...products].sort((a, b) => a.name.localeCompare(b.name));
        setProducts(res)
    }
    const sorter2 = () => {
        const res = [...products].sort((a, b) => a - b)
        setProducts(res)
    }

    return (
        <div>

            <Products/>
            <button onClick={() => setOpenCreateForm(true)} className={css.white_button}>Add a new product</button>
            {openCreateForm && <CreateForm setOpenCreateForm={setOpenCreateForm}/>}
            <div className={css.navbar}>
                <div className={css.dropdown}>
                    <button className={css.dropbtn}>Sorting</button>
                    <div className={css.dropdown_content}>
                        <a href="#" onClick={()=>sorter()}>Alphabet</a>
                        <a href="#" onClick={()=>sorter2()}>Quantity</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {ProductsPage};