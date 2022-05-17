import React from 'react';
import css from "./MainLayout.module.css";

const MainLayout = () => {
    return (
        <div className={css.main_wrap}>
            <div className={css.item_card}>
                <img src={"image"} alt=""/>
                <br/>
                <h1>Name:{"product"}</h1>
                <p>id:{"id"}</p>
                <p>weight:{"weight"}</p>
                <div className={css.buttons}>
                    <button>add</button>
                    <button>delete</button>
                </div>

            </div>
            <div className={css.item_card}>
                <img src={"image"} alt=""/>
                <br/>
                <h1>Name:{"product"}</h1>
                <p>id:{"id"}</p>
                <p>weight:{"weight"}</p>
                <div className={css.buttons}>
                    <button>add</button>
                    <button>delete</button>
                </div>

            </div>
            <div className={css.item_card}>
                <img src={"image"} alt=""/>
                <br/>
                <h1>Name:{"product"}</h1>
                <p>id:{"id"}</p>
                <p>weight:{"weight"}</p>
                <div className={css.buttons}>
                    <button>add</button>
                    <button>delete</button>
                </div>

            </div>
            <div className={css.item_card}>
                <img src={"image"} alt=""/>
                <br/>
                <h1>Name:{"product"}</h1>
                <p>id:{"id"}</p>
                <p>weight:{"weight"}</p>
                <div className={css.buttons}>
                    <button>add</button>
                    <button>delete</button>
                </div>

            </div>
            <div className={css.item_card}>
                <img src={"image"} alt=""/>
                <br/>
                <h1>Name:{"product"}</h1>
                <p>id:{"id"}</p>
                <p>weight:{"weight"}</p>
                <div className={css.buttons}>
                    <button>add</button>
                    <button>delete</button>
                </div>

            </div>
            <div className={css.item_card}>
                <img src={"image"} alt=""/>
                <br/>
                <h1>Name:{"product"}</h1>
                <p>id:{"id"}</p>
                <p>weight:{"weight"}</p>
                <div className={css.buttons}>
                    <button>add</button>
                    <button>delete</button>
                </div>

            </div>
        </div>
    );
};

export {MainLayout};

