import React from 'react';
import textarea from "eslint-plugin-jsx-a11y/lib/util/implicitRoles/textarea";
import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
        case('input'):
            inputElement = <input className={classes.InputElement}
                                  {...props.elementConfig}
                                  value={props.value}
                                  onChange={props.changed}/>
            break;
        case (textarea):
            inputElement = <textarea className={classes.InputElement}
                                     {...props.elementConfig}
                                     value={props.value} onChange={props.changed} />
            break;
        case ("select"):
            inputElement = (
                <select className={classes.InputElement}
                        value={props.value}
                        onChange={props.changed}>
                    {props.elementConfig.options.map(option=>{
                        return <option key={option.value}
                                       value={option.value}
                                       >{option.displayValue}</option>
                    })}
                </select>
            )
            break;
        default:
            inputElement = <input className={classes.InputElement}
                                  {...props.elementConfig}
                                  value={props.value}/>
    }
    return (
        <div className={classes.Input}>
            <label htmlFor="" className={classes.Label}>{props.label}</label>
            {inputElement}
            input
        </div>
    );
};

export default input;