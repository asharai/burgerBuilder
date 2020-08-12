import React from 'react';
import Auxillary from '../../../hoc/Auxillary';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey=>{
            return <li key={igKey}>
                <span style={{textTranform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
            </li>
        })
    return (
        <Auxillary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </Auxillary>
    )

};
export default orderSummary;
