import React, { useContext } from 'react'
import CartContext from '../../Store/Cart-context'
import Carticon from '../Cart/Carticon'
import classes from "./Cartbtn.module.css"


const Cartbtn = (props) => {

    

    const cartCntx = useContext(CartContext);

    
    const numberOfCartItems = cartCntx.items.reduce((curNumber , item ) => {
        return curNumber + item.amount;
    }, 0);


    return (
        <button className={classes.button} onClick={props.onClick} >
            <span className={classes.icon} >
                <Carticon />
            </span>
            <span>Cart</span>
            <span className={classes.badge} >{numberOfCartItems}</span>

        </button>
    )
}

export default Cartbtn
