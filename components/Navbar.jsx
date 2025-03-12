import classes from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react';
import { GlobalContext } from './App';
import { IoLogoPython } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
    const { cart } = useContext(GlobalContext);
    
    return (
        <header>
            <div className={classes.wrapper}>
                <div className="logo">
                    <IoLogoPython size={64} color='white'/>
                </div>
                <nav>
                    <div className={classes.tab}>
                        <Link to='/homepage'>Homepage</Link>
                    </div>
                    <div className={classes.tab}>
                        <Link to='/shop'>Shop</Link>
                    </div>
                    <div className={classes.tab}>
                        <Link to='/contact'>Contact</Link>
                    </div>

                </nav>
                <div className={classes.shopping}>
                    <div className={classes.cart}>
                        {cart.length}
                        <FaShoppingCart size={24}/>
                    </div>
                    <Link to='/checkout'>Checkout</Link>
                    <div className="login">Login</div>
                </div>
            </div>
        </header>
    )
}