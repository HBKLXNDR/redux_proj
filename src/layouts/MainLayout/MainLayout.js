import React, {useEffect, useState} from 'react';
import css from "./MainLayout.module.css";
import {axiosService} from "../../services";
import {productService} from "../../services/product.service";

const MainLayout = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        productService.getAllL().then((data)=> console.log(data))
    },[])
    const openModal = (id) => {
        console.log(id);
        return (<div>
            ${id}
        </div>)
    }
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
                    <button onClick={()=>openModal()}>delete</button>
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

