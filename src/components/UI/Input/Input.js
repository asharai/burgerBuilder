import React from 'react';
import textarea from "eslint-plugin-jsx-a11y/lib/util/implicitRoles/textarea";
import classes from './Input.css';
const input = (props) => {
    let inputElement = null;
    switch (props.inputtype) {
        case('input'):
        inputElement=<input className={classes.InputElement} {...props}/>
        break;
        case (textarea):
            inputElement =<textarea className={classes.InputElement} {...props}/>
            break;
        default:
            inputElement=<input className={classes.InputElement} {...props}/>
    }
    return (
        <div className={classes.Input}>
            <label htmlFor="" className={classes.Label}>{props.label}</label>
            {inputElement}
            {props.name}
        </div>
    );
};

export default input;