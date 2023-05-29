import React from "react";
import style from "./BlockProduct.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addCount, addToCart } from "../../../store/cartReducer";

const BlockProduct = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleClick = (product) => {
    const item = {...product, count: 1}
    let findItem = cart.find(item => item.id === product.id)
    if (findItem === undefined) {
      if (cart.length > 0 && cart[0].restaurant.id === product.restaurant.id) {
        dispatch(addToCart(item))
      } else if (cart.length > 0 && cart[0].restaurant.id !== product.restaurant.id) {
        alert("You can make order only single restaurant.")
      } else {
        dispatch(addToCart(item))
      }
    } else {
      dispatch(addCount(item))
    }
  }

  return (
    <div className={style.blockProduct}>
      <div className={style.imageBlock}>
        <img src={product.imgUrl} alt={product.name} className={style.image}/>
      </div>
      <div className={style.wrapperDescription}>
        <div className={style.nameBlock}>
          <h3 className={style.name}>{product.name}</h3>
          <p className={style.description}>{product.description}</p>
        </div>
        <div className={style.priceAddBlock}>
          <div className={style.priceBlock}>
            {product.oldPrice && <h4 className={style.oldPrice}>{product.oldPrice} ₴</h4>}
            <h3 className={style.actualPrice}>{product.actualPrice} ₴</h3>
          </div>
          <button className={style.button} onClick={() => handleClick(product)}>Add to cart</button>
        </div>
      </div>
      
    </div>
  );
};

export default BlockProduct;
