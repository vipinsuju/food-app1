import React, { useRef, useState } from 'react'
import MyInput from '../../UI/MyInput'
import classes from "./MealItemForm.module.css"


const MealItemForm = (props) => {

    const [amountIsValid , setAmountIsValid ] = useState(true);


    const amountInputRef = useRef();

    const sumbithandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount ;

        if (enteredAmount.trim() ===0 || enteredAmountNumber < 1 || enteredAmountNumber > 5 ){

            setAmountIsValid(false);
            return;

        }

        props.onAddToCart(enteredAmountNumber);
        

        

    };

    return (
        <form className={classes.form} onSubmit = {sumbithandler} >
            <MyInput 
            ref = {amountInputRef}
            
            label ="Amount"
            input = {{
                id : "amount",
                type : "number",
                min : "1" ,
                max : "5",
                step : "1",
                defaultValue : "1"
            }}  />
            
           
            <button> + Add</button>
            {!amountIsValid && <p>Invalid Input</p> } 
        </form>
    )
}

export default MealItemForm
