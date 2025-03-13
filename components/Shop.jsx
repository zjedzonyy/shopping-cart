import Navbar from "./Navbar"
import Card from "./Card"
import classes from '../styles/Shop.module.css'
import { GlobalContext } from './App';
import { useContext } from "react";


export default function Shop() {
    const { products, error, loading } = useContext(GlobalContext);

    
    if (loading) return <p>Loading</p>
    if (error) return <p>A network error was encountered</p>
    console.log(products);

    return (
        <div className={classes.wrapper}>
            {products.map(item => (
                <Card 
                key={item.id}
                id={item.id}
                title={item.title} 
                price={item.price}
                url={item.image}
                />
            ))}
        </div>
    )
}