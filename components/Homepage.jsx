import Navbar from "./Navbar"
import classes from "../styles/Homepage.module.css"

export default function Homepage() {

    return (
        <div className={classes.wrapper}>
        <section>
            <div className={classes.photo}>
                <img src="../src/assets/home.jpg" alt="" />
            </div>
            <div className={classes.about}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nulla cum repudiandae et magni ea, quibusdam illum quam aut placeat, iure impedit quae quisquam a voluptatibus harum praesentium vitae mollitia!
            </div>
        </section>
        </div>
    )
}