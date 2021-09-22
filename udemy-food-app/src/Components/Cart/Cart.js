import React, { useContext } from 'react';
import CartContext from '../../Store/Cart-context';
import Model from '../UI/Model';
import classes from './Cart.module.css'

const Cart = (props) => {

    const cartCntex  = useContext(CartContext);

    const totalAmount2 = `$${cartCntex.totalAmount.toFixed(2)}`;

    const hasItems = cartCntex.items.length > 0 ;

    const CartItems = <ul className={classes['cart-items']} >
        {cartCntex.items.map((item) => <li>{item.name}</li>)
        } </ul>;
    return (
        <Model onClose = {props.onClose} >
            {CartItems}
            <div className={classes.total} >
                <span>Amount</span>
                <span>{totalAmount2}</span>
            </div>
            <div className={classes.actions} >
                <button className={classes["button--alt"]} onClick ={props.onClose} > close </button>
                {hasItems && <button className={classes.button} >Order</button>}
            </div>

        </Model>
    )
}

export default Cart
