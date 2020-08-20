import React from 'react';
import classes from './Button.module.css';

const Button = props => {
    const classNames = [classes.Button];
    switch(props.color) {
        case 'primary': {
            classNames.push(classes.PrimaryBtn);
            return <button type={props.type} className={classNames.join(' ')} onClick={props.clicked}>{props.children}</button>;
        }
        case 'secondary': {
            classNames.push(classes.SecondaryBtn);
            return <button type={props.type} className={classNames.join(' ')} onClick={props.clicked}>{props.children}</button>;
        }
        case 'warning':  {
            classNames.push(classes.WarningBtn);
            return <button type={props.type} className={classNames.join(' ')} onClick={props.clicked}>{props.children}</button>;
        }
        case 'success': {
            classNames.push(classes.SuccessBtn);
            return <button type={props.type} className={classNames.join(' ')} onClick={props.clicked}>{props.children}</button>;
        }
        case 'danger': {
            classNames.push(classes.DangerBtn);
            return <button type={props.type}className={classNames.join(' ')} onClick={props.clicked}>{props.children}</button>;
        }
        default: {
            classNames.push(classes.DefaultBtn);
            return <button type={props.type} className={classNames.join(' ')} onClick={props.clicked}>{props.children}</button>;
        }
    }
};

export default Button;