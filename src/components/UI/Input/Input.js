import React from 'react';
import textarea from "eslint-plugin-jsx-a11y/lib/util/implicitRoles/textarea";
import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid)
    }
    switch (props.elementType) {
        case('input'):
            inputElement = <input className={inputClasses.join(' ')}
                                  {...props.elementConfig}
                                  value={props.value}
                                  onChange={props.changed}
            />
            break;
        case (textarea):
            inputElement = <textarea className={inputClasses.join(' ')}
                                     {...props.elementConfig}
                                     value={props.value}
                                     onChange={props.changed}
            />
            break;
        case ("select"):
            inputElement = (
                <select className={inputClasses.join(' ')}
                        value={props.value}
                        onChange={props.changed}
                >
                    {props.elementConfig.options.map(option=>{
                        return <option key={option.value}
                                       value={option.value}
                                       >{option.displayValue}</option>
                    })}
                </select>
            )
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')}
                                  {...props.elementConfig}
                                  value={props.value}/>
    }
    return (
        <div className={classes.Input}>
            <label htmlFor="" className={classes.Label}>{props.label}</label>
            {inputElement}

        </div>
    );
};

export default input;