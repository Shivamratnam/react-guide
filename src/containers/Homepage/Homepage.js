import React from 'react';
import classes from './Homepage.module.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Homepage = props => {
    console.log(props);
    const onClicked = () => {
        props.history.push('/form-generator');
    };
    return (
        <div className={classes.Homepage}>
            <Card onClick={onClicked} className={classes.Card}>
                <CardContent className={classes.CardContent}>
                    <h3>Form Generator</h3>
                </CardContent>
            </Card>
        </div>
    );
};

export default Homepage;