import React from "react";
import BlockProduct from "./BlockProduct";
import style from './BlockMenu.module.scss';

const BlockMenu = (props) => {   
    console.log(props.data)
    return (
        <div className={style.blockMenu}>
            {props.data.map(product => <BlockProduct product={product}/>)}
        </div>
    )
}

export default BlockMenu;