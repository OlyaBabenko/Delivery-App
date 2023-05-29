import React from "react";
import logo from "../../assets/image/facebook_cover_photo_1.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import style from "./Header.module.scss";

const Header = () => {
    // const navigate = useNavigate()
    const cart = useSelector(state => state.cart.cart)
    const count = cart.length;

    // const showCart = () => {
    //     navigate("/cart")
    // }
    return (
        <div className={style.header}>
            <Link to="/" className={style.wrapperLogo}>
                <img src={logo} alt="logo" className={style.logo}/>
            </Link>           
            <div className={style.menu}>
            <Link to="/cart">
                <div className={style.wrapperCart}>
                    {count > 0 && <div className={style.count}>{count}</div>}
                </div>
            </Link>
                
                
            </div>
        </div>
    )
}

export default Header;