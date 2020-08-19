import React from 'react';
import classes from './Button.module.css';

const Button = props => {
    const classNames = [classes.Button];
    switch(props.type) {
        case 'primary': {
            classNames.push(classes.PrimaryBtn);
            return <button className={classNames.join(' ')} onClick={props.clicked}>{props.children}</button>;
        }
        case 'secondary': {
            classNames.push(classes.SecondaryBtn);
            return <button className={classNames.join(' ')} onClick={props.clicked}>{props.children}</button>;
        }
        case 'warning':  {
            classNames.push(classes.WarningBtn);
            return <button className={classNames.join(' ')} onClick={props.clicked}>{props.children}</button>;
        }
        case 'success': {
            classNames.push(classes.SuccessBtn);
            return <button className={classNames.join(' ')} onClick={props.clicked}>{props.children}</button>;
        }
        case 'danger': {
            classNames.push(classes.DangerBtn);
            return <button className={classNames.join(' ')} onClick={props.clicked}>{props.children}</button>;
        }
        default: {
            classNames.push(classes.DefaultBtn);
            return <button className={classNames.join(' ')} onClick={props.clicked}>{props.children}</button>;
        }
    }
};

export default Button;