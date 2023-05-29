import React, { useState} from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

import style from "./PageCart.module.scss"

const PageCart = () => {
    const cart = useSelector(state => state.cart.cart)
    const [formData, setFormData] = useState({
        address: '',
        email: '',
        phone: '',
        name: '',
        items: cart.map(item => ({product: item.id, quantity: item.count}))
      });

      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
        console.log(JSON.stringify(formData))
      };

      const handleSubmit = (event) => {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add dishes to cart and try again.")
            return;
        }
        
        fetch('http://127.0.0.1:8000/products/token/')
            .then(response => response.json())
            .then(data => {
            // Отриманий CSRF-токен
                console.log(data.csrfToken);
                return data.csrfToken;
            })
            .then(token => fetch('http://127.0.0.1:8000/products/order/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': token,
                },
                body: JSON.stringify(formData),
                })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error)))
            .catch(error => console.error(error));
      };
    
    return (
        <div className={style.wrapperCart}>
            <div className={style.rightContainer}>
                <div className={style.rightInnerContainer}>
                    <form onSubmit={handleSubmit}>
			            <h2 className="lg-view">Contact</h2>
                        <p>* Required</p>
			            
                        <input type="text" placeholder="Name *" name="name" value={formData.name} onChange={handleChange} required className={style.input} />
                        <input type="email" placeholder="Email *" name="email" value={formData.email} onChange={handleChange} required className={style.input}/>
			            <input type="phone" placeholder="Phone *" name="phone" value={formData.phone} onChange={handleChange} required className={style.input}/>
                        <textarea placeholder="Your Address *" name="address" value={formData.address} onChange={handleChange} required className={style.input}></textarea>
			            <button className={style.button}>Submit</button>
		            </form>
                </div>
            </div>
            <div className={style.cart}>
                {cart.map(product => <Item product={product}/>)}
            </div>
        </div>
    )
}

export default PageCart;