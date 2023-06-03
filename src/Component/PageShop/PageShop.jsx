import React, { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import withListLoading from "./withLoadingMenu";
import BlockMenu from "./BlockMenu/BlockMenu";
import BlockShops from "./BlockShops/BlockShops";
import ModalShops from "./ModalShops/ModalShops";
import style from './PageShop.module.scss'


const PageShop = () => {
    const MenuLoading = withListLoading(BlockMenu);
    const [modalActive, setModalActive] = useState(false)
    const [menuState, setMenuState] = useState({
        loading: true,
        menu: null,
    });

    useEffect(() => {
        fetchMenu("BigPizza");
    }, [setMenuState]);

    const fetchMenu = (value) => {
        fetch('http://127.0.0.1:8000/products/product/?name=' + encodeURIComponent(value))
            .then(response => response.json())    
            .then(data => {if (data) {
                setMenuState({loading: false, menu: data.data})
                console.log(data.data)
            }
            })
            .catch(error => console.log(error));
    };

    const handleClick = (value) => {
        fetchMenu(value);
    };

    const isMobile = useMediaQuery({ maxWidth: 650 });
    const isDesktop = useMediaQuery({ minWidth: 651 });
    
    return (
        <div className={style.pageShop}>
            <div className={style.image}></div>
            <div className={style.content}>
                {isDesktop && <BlockShops handleClick={handleClick}/>}
                {isMobile && <button className={style.button} onClick={() => setModalActive(true)}>RESTAURANTS</button>}
                <MenuLoading isLoading={menuState.loading} data={menuState.menu}/>
            </div>
            <ModalShops active={modalActive} setActive={setModalActive} handleClick={handleClick}/>
        </div>
    );
};

export default PageShop;