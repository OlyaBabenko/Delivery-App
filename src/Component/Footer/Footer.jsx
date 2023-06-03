import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo_transparent.png"
import facebook from "../../assets/image/social/facebook.png"
import insta from "../../assets/image/social/instagram.png"
import twitter from "../../assets/image/social/twitter.png"

import style from "./Footer.module.scss"


const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.containerImage}>
                <img src={logo} alt="logo" className={style.image}/>
            </div>
            <div className={style.nav}>
                <Link to="/" className={style.link}>
                    Home
                </Link>
                <Link to="/cart" className={style.link}>
                    My Cart
                </Link>
            </div>
            <div className={style.contact}>
                <h4 className={style.address}>Central Office: Ukraine, Kyiv, Basseyna Str., 2</h4>
                <h4 className={style.phone}>Phone number: +38 050 123-45-67</h4>
                <div className={style.socialBlock}>
                    <a href="https://www.facebook.com/"><img src={facebook} alt="facebook" className={style.social}/></a>
                    <a href="https://www.instagram.com/"><img src={insta} alt="instagram" className={style.social}/></a>
                    <a href="https://twitter.com/"><img src={twitter} alt="twitter" className={style.social}/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer