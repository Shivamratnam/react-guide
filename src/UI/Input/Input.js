import React from 'react';
import classes from './Input.module.css';

const Input = props => {
    return (
        <input className={classes.Input}
            id={props.id}
            name={props.name}
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.changed} />
    );
};

export default Input;