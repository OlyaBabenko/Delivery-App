import React from "react";
import arrowLeft from "../../assets/image/arrow-left.png";
import arrowRight from "../../assets/image/arrow-right.png";
import style from "./Item.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { addCount, removeCount, removeFromCart } from "../../store/cartReducer";

const Item = ({product}) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart)

    const handleClick= (btn, product) => {
        switch(btn){
            case "remove":
                if(product.count === 1) {
                    return dispatch(removeFromCart({...product}))
                } else {
                    return dispatch(removeCount({...product, count: 1}))
                }
                
            case "add":
                return dispatch(addCount({...product, count: 1}))

            default:
                return 
        }
    }

    return (
        <div className={style.item}>
            <div className={style.imageContainer}>
                <img src={product.imgUrl} alt={product.name} className={style.image}/>
            </div>
            <div className={style.blockDescription}>
                <h3 className={style.name}>{product.name}</h3>
                <h4 className={style.description}>{product.description}</h4>
            </div>
            <div className={style.countWrapper}>
                <img src={arrowLeft} alt="arrow-left" onClick={() => handleClick("remove", product)} className={style.btn}/>
                <span className={style.count}>{product.count}</span>
                <img src={arrowRight} alt="arrow-right" onClick={() => handleClick("add", product)} className={style.btn}/>
            </div>
            <span className={style.price}>
                {product.actualPrice * product.count} ₴
            </span>
        </div>
    )
}

export default Item