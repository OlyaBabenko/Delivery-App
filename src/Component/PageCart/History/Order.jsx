import React from "react";
import Item from "./Item";

import style from "./Order.module.scss"

const Order = ({order}) => {
    const items = order.items.map(item => <Item product={item}/>)
    return (
        <div className={style.orderWrapper}>
            <h3 className={style.orderNumber}>Order number: #{order.id}</h3>
            <div className={style.order}>
                {items}
            </div>
        </div>
    )
}

export default Order