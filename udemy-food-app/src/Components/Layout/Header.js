import React, { Fragment } from 'react';
import mealsimage from "../../Assets/meals.jpg";
import classes from "../Layout/Header.module.css"
import Cartbtn from './Cartbtn';

export const Header = (props) => {
    return (
        <Fragment>
            <header className ={classes.header} >
                <h1>React Meals</h1>
                <Cartbtn onClick ={props.onShowCart} />
                
            </header>

            <div className={classes['main-image']} >
                <img src={mealsimage} alt="foods" />
            </div>

        </Fragment>

    )
}

export default Header;