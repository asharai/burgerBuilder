import React from 'react';
import classes from './Order.css'
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";
const order = (props) => {
    const ingredients = [];
    for (let ingredientName in props.ingredients){
        ingredients.push({name:ingredientName,amount:props.ingredients[ingredientName]})
    }
    const ingredientOutput = ingredients.map(ig=>{
        return <span style={{textTransform:'capitalize',
            display:"inline-block",
            margin:'0 10px',
            border:'1px solid gray',
            padding:'7px'}} key={ig.name}>{ig.name} ({ig.amount})</span>
    })
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price:<strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    );
};

export default order;