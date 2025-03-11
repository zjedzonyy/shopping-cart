import classes from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header>
            <div className={classes.wrapper}>
                <div className="logo">
                    SHOP LOGO
                </div>
                <nav>
                    <Link to='/homepage'>Homepage</Link>
                    <Link to='/shop'>Shop</Link>
                    <Link to='/contact'>Contact</Link>
                </nav>
                <div className={classes.shopping}>
                    <div className="cart">cart</div>
                    <Link to='/checkout'>Checkout</Link>
                    <div className="login">login</div>
                </div>
            </div>
        </header>
    )
}