import React from "react";

import style from "./Item.module.scss"

const Item = ({product}) => {

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
                </div>
            </div>
      
        </div>
    )
}


export default Item