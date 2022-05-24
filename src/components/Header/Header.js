import React, {useState} from 'react';

import css from "./Header.module.css"
import {CreateForm} from "../CreateForm/CreateForm";

const Header = () => {
    const [openCreateForm, setOpenCreateForm] = useState(false);
    return (
        <div className={css.header}>
            <h1>Product Web</h1>
            <button onClick={()=>setOpenCreateForm(true)} className={css.white_button}>Add a new product</button>
            {openCreateForm && <CreateForm setOpenCreateForm={setOpenCreateForm}/>}
        </div>
    );
};

export {Header};