import { shopsImage } from "./shopsImage";

export const addToLocalStorage = (order) => {
    let orders = [];
            if (localStorage.getItem('orders')) {
                orders = JSON.parse(localStorage.getItem('orders'));
                if (!Array.isArray(orders)) {
                    orders = [];
                }
            }
            orders.push(order);
            localStorage.setItem('orders', JSON.stringify(orders))
}

export const getShopsImage = (cart) => {
    return ((cart.length >= 1) 
        ? shopsImage[cart[0].restaurant.name]
        : undefined)    
}

