import React, { useEffect, useState} from "react";

import style from './BlockShops.module.scss';

const BlockShops = ({handleClick}) => {
    const [restaurants, setRestaurants] = useState();

    useEffect (() => {
        fetch('http://127.0.0.1:8000/products/restaurant/')
            .then(response => response.json())
            .then(data => {
                setRestaurants(data.data.map(shop => <button onClick={() => handleClick(shop.name)} className={style.button}>{shop.name}</button>))})
            .catch(error => console.log(error))
    },[])   
    
    return (
        <div className={style.blockShops}>
            <h2>RESTAURANTS</h2>
            {restaurants}
        </div>
    )
}

export default BlockShops;