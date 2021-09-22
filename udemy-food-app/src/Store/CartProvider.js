import React , {useReducer} from 'react'
import CartContext from './Cart-context'





    const defaultCartState = {
        items : [],
        totalAmount : 0,
    }

    const cartReducer = (state , action)=> {
        if (action.type === "Add-item"){

            const updatedItems = state.items.concat(action.item);
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount ;
            return {
                items : updatedItems,
                totalAmount : updatedTotalAmount
            }
        }

        return defaultCartState ;
    };

    const CartProvider = (props) => {
       const [cartState , dispatchCartAction] = useReducer(cartReducer , defaultCartState);


       const addItemToCartHandler = (item) => {
        dispatchCartAction({type : "Add-item" , item : item });
    };

    const removeFromCartHandler = (id) => {
        dispatchCartAction({type : "Remove-item" , id : id });

    };

    
    

   

   


    const CartContext2 = {

        items : cartState.items,
        totalAmount :cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeFromCartHandler

    };


    return (
        <CartContext.Provider value ={CartContext2} >
            {props.children}
        </CartContext.Provider>
    )

    }


export default CartProvider
