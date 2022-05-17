import React from 'react';

import css from "./Modal.module.css"


const Modal = () => {

    const cancel =()=>{
        css.modal.display = "none"
    }

    return (
        <div className={css.modal}>
            <div className={css.modal_content}>

                <input type="text"/>
                <button>add</button>
                <button onClick={cancel}>cancel</button>
            </div>
        </div>
    );
};

export {Modal};