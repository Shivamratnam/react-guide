import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
    return (
        <div className={classes.Person}>
            <button onClick={props.deleted}>x</button>
            <h2 className="PersonData">{props.name}</h2>
            <p className="PersonData">Age: {props.age}</p>
        </div>
    );
}

export default person;