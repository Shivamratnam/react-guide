import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

class Header extends Component {
    render() {
        return(
            <nav className={classes.Header}>
                <ul>
                    <NavLink className={classes.LinkItem} to='/'>React Guide</NavLink>
                    <NavLink className={classes.linkItem} to='/persons'>Persons List</NavLink>
                </ul>
            </nav>
        );
    };
};

export default Header;