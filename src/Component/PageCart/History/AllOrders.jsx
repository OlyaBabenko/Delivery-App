import React from "react";
import Order from "./Order";

import style from "./AllOrders.module.scss"

const AllOrders = () => {
    const orders = JSON.parse(localStorage.getItem('orders'))
    let allOrders
    if (orders) {
        allOrders = orders.map(order => <Order order={order}/>)
    } else {
        allOrders = <div className={style.emptyBlock}><h3 className={style.emptyText}>Your history is empty.</h3></div>
    }
    
    return (
        <div className={style.allOrders}>
            <h2 className={style.title}>History</h2>
            <div>
                {allOrders}
            </div>

        </div>
    )
}

export default AllOrders