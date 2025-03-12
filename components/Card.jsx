import classes from '../styles/Card.module.css'
import { FaCartPlus } from "react-icons/fa6";
import React, { useContext } from 'react';
import { GlobalContext } from './App';

export default function Card({ title, price, url, id }) {
    const {cart, addToCart, changeQuantity} = useContext(GlobalContext);

    return (
        <div className={classes.card} >
            <div className={classes.add}>
                <FaCartPlus 
                role='button'
                onClick={() => addToCart(id, 1)}
                color='green'
                size={38}
                />
            </div>
            {cart.find(innerArray => innerArray[0] === id) && (
                <input 
                min={1}
                type="number" 
                value={cart.find(item => item[0] === id)?.[1]} 
                onChange={(e) => changeQuantity(id, parseInt(e.target.value, 10))}
                />
            ) }
            <div className={classes.fruit_holder}>
                <img src={url} alt=''/>
            </div>
            <div className={classes.fruit_name}>
                <p>${price}</p>
                <p>{title}</p>
            </div>
        </div>
    )
}