import React from 'react';

import css from "./modal.module.css"

const Modal = ({active, setActive}) => {
    return (
        <div className={css.modal}>
            <div className={css.modal_content}>

            </div>
        </div>
    );
};

export {Modal};