import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
import classes from '../styles/App.module.css'
import React, { useState } from "react"

export const GlobalContext = React.createContext();

export default function App() {
    const [cart, setCard] = useState([]);
    
    const addToCart = (id, quantity) => {
        setCard(prevData => [...prevData, [id, quantity]]);
        console.log(cart);
    }

    const changeQuantity = (id, quantity) => {
        setCard(prevData => prevData.map(item => {
            if (item[0] === id) {
                return [item[0], quantity]
            }
            return item;
        }));
    }

    const value = {
        cart,
        addToCart,
        changeQuantity,
    };

    console.log(cart);


    return (
        <GlobalContext.Provider value={value}>
            <div className={classes.app}>
                <Navbar />
                <main>
                    <Outlet/>
                </main>
                <footer>
                    I am footer
                </footer>
            </div>
        </GlobalContext.Provider>
    )
}