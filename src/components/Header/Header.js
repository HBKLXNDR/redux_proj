import React from 'react';

import css from "./Header.module.css"

const Header = () => {
    return (
        <div className={css.header}>
            <h1>Product Web</h1>



        </div>
    );
};
//
// const sorter = () => {
//     const res = [...products].sort((a, b) => a.name.localeCompare(b.name));
//     setProducts(res)
// }

export {Header};