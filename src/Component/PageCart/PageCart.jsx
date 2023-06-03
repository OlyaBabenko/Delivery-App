import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import AllOrders from "./History/AllOrders";
import Item from "./Item";
import { resetCart } from "../../store/cartReducer";
import { addToLocalStorage, getShopsImage } from "./lib";
import { shopsImage } from "./shopsImage";

import style from "./PageCart.module.scss"




const PageCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart)
    const [formData, setFormData] = useState({
        address: '',
        email: '',
        phone: '',
        name: '',
        items: cart.map(item => ({product: item.id, quantity: item.count}))
    });
    const isCartEmpty = !cart.length
    const imageUrl = getShopsImage(cart)
    const totalPrice = cart.reduce((accumulator, item) => accumulator + (item.actualPrice * item.count), 0)

    const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (cart.length === 0) {
            alert("Your cart is empty. Please add dishes to cart and try again.")
            return;
        }
        try {
            const responseToken = await axios.get('http://127.0.0.1:8000/products/token/'); // Get token
            const requestOptions = {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': responseToken.data.token,
                }}
            const responseData = await axios.post('http://127.0.0.1:8000/products/order/', formData, requestOptions); // POST order
            addToLocalStorage({...formData, items: cart, id: responseData.data.id})
            setFormData({
                address: '',
                email: '',
                phone: '',
                name: '',
                items: cart.map(item => ({product: item.id, quantity: item.count}))
            });
            console.log(responseData)
            dispatch(resetCart()) // Reset cart in localStorage and store
        } catch (error) {
            console.error(error)
        }
    };
    
    return (
        <div className={style.wrapperCart}>
            <div className={style.title}>
                <h1>MY CART</h1>
                {/* <button className={style.ordersBtn} onClick={() => setModalOrdersActive(true)}>My orders</button> */}
            </div>
            <div className={style.cartContent}>
                <div className={style.formContainer}>
                    <div className={style.formInnerContainer}>
                        {!isCartEmpty && (
                            <div className={style.logoContainer}>
                                <img src={imageUrl} alt={shopsImage["BigPizza"]} className={style.logoImage}/>
                                <h2>{cart[0].restaurant.name}</h2>
                            </div>)}
                        <form onSubmit={(event) => handleSubmit(event)}>
			                <h2>Contact</h2>
                            <p>* Required</p>
			            
                            <input type="text" placeholder="Name *" name="name" value={formData.name} onChange={handleChange} required className={style.input} />
                            <input type="email" placeholder="Email *" name="email" value={formData.email} onChange={handleChange} required className={style.input}/>
			                <input type="phone" placeholder="Phone *" name="phone" value={formData.phone} onChange={handleChange} required className={style.input}/>
                            <textarea placeholder="Your Address *" name="address" value={formData.address} onChange={handleChange} required className={style.input}></textarea>
			                <button className={style.button}>Submit</button>
		                </form>
                    </div>
                </div>
                {isCartEmpty 
                    ? <div className={style.cart} style={{ display: 'flex', alignItems: "center"}}><h3>Your cart is empty.</h3></div>
                    : (<div className={style.cart}>{cart.map(product => <Item product={product}/>)}
                    <h3 className={style.totalPrice}>Total price: {totalPrice} ₴</h3></div>)}
                                   
            </div>
            <AllOrders/>

        </div>
    )
}

export default PageCart;