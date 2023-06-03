import React from "react";
import Modal from "../Modal/Modal"
import BlockShops from "../BlockShops/BlockShops";
import style from "./ModalShops.module.scss"


const ModalShops = ({active, setActive, handleClick}) => {

    return (
        <Modal active={active} setActive={setActive}>
            <button className={style.close} onClick={() => {setActive(false)}}>Close</button>
            <BlockShops handleClick={handleClick}/>
        </Modal>
    )
}

export default ModalShops