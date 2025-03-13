import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
import classes from '../styles/App.module.css'
import React, { useState } from "react"
import fetchProductsWithErrorHandling from "./test"

export const GlobalContext = React.createContext();

export default function App() {
    const [cart, setCard] = useState([]);
    const url = "https://fakestoreapi.com/products";
    const { products, error, loading } = fetchProductsWithErrorHandling(url);
    
    const addToCart = (id, quantity) => {
        setCard(prevData => {
            if (prevData.find(innerArray => innerArray[0] === id)) {
                console.log("Already in cart");
                return prevData;
            }

            return [...prevData, [id, quantity]];
        });
    }

    const changeQuantity = (id, quantity) => {
        setCard(prevData => prevData.map(item => {
            if (item[0] === id) {
                return [item[0], quantity]
            }
            return item;
        }));
    }

    const removeFromCart = (id) => {
        setCard(prevData => prevData.filter(item => item[0] !== id && item))
    }

    const value = {
        cart,
        addToCart,
        changeQuantity,
        removeFromCart,
        products,
        error,
        loading,
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
                    <p>Copyright © 2025 artutom</p>
                    <a
                    className={classes.github}
                    href="https://github.com/zjedzonyy"
                    ></a>
                </footer>
            </div>
        </GlobalContext.Provider>
    )
}