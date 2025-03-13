import { Fragment, useEffect, useState } from "react"
import React, { useContext } from 'react';
import { GlobalContext } from './App';
import classes from '../styles/Checkout.module.css'
import { MdDeleteForever } from "react-icons/md";

export default function Checkout() {
    const {cart, products, changeQuantity, removeFromCart} = useContext(GlobalContext);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            const product = products.find(p => p.id === item[0]);
            return product ? acc + product.price * item[1] : acc;
        }, 0);
        setTotal(sum);
    }, [cart, products])

    if (cart.length <= 0) return <h2>Nothing in the cart.</h2>
    
    return (
        <>
        <div className={classes.order}> 
        {products.map(product => {
            return cart.map(item => {
                if (product.id === item[0]) {
                    return (
                        <div className={classes.item} key={item[0]} data-testid={`item-${item[0]}`}>
                            <div className={classes.photo}>
                                <img src={product.image} alt="" />
                            </div>
                            <div className={classes.product_info}>
                                <p>{product.title}</p>
                            </div>
                            <div className={classes.order_details}>
                                <input 
                                min={1}
                                type="number" 
                                value={cart.find(item => item[0] === product.id)?.[1]} 
                                onChange={(e) => changeQuantity(product.id, parseInt(e.target.value, 10))}
                                />
                                <p>${(product.price * item[1]).toFixed(2)}</p>
                                <div className={classes.delete}>
                                    <MdDeleteForever role="button" color="red" size={45} onClick={(e) => removeFromCart(product.id)}/>
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        } )}
        </div>
        <div className={classes.summary_wrapper}>

            <div className={classes.summary}>
                <h2>Order Summary</h2>
                <hr />
                <div className={classes.cost}>
                    <p>Subototal</p>
                    <p>${(total).toFixed(2)}</p>
                </div>
                <div className={classes.cost}>
                    <p>Delivery</p>
                    <p>${15}</p>
                </div>
                <hr />
                <div className={classes.cost}>
                    <p>Total</p>
                    <p>${(total+15).toFixed(2)}</p>
                </div>
                <button onClick={() => alert("Checkout!")} >Checkout</button>
            </div>
        </div>
        </>
    )
}