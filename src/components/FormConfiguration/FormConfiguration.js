import React, { useState } from 'react';
import classes from './FormConfiguration.module.css';

import Button from '../../UI/Button/Button';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const FormConfiguration = props => {
    const [selectedField, setSelectedField] = useState({
        type: 'text',
        label: ''
    });
    const inputTypes = ['text', 'email', 'number', 'password', 'search', 'date', 'file'];

    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.added(selectedField);
    };
    
    return (
        <div className={classes.FormConfiguration}>
            <form className={classes.Controls} onSubmit={onSubmitHandler}>
                <div className={classes.Control}>
                    <InputLabel id="input-type-field">Choose Input Type</InputLabel>
                    <Select
                        fullWidth
                        id="input-type-field"
                        value={selectedField.type}
                        onChange={(event) => {setSelectedField({...selectedField, label: '', type: event.target.value})}} >
                            {   inputTypes.map(inputType => <MenuItem key={inputType} value={inputType}>{inputType}</MenuItem>) }
                    </Select>
                </div>
                <div className={classes.Control}>
                    <TextField
                        id="label-field"
                        fullWidth
                        value={selectedField.label}
                        label="Enter Placeholder Text"
                        onInput={(event) => { setSelectedField({...selectedField, label: event.target.value}) }} />
                </div>
                <Button type="success">Add Element</Button>
            </form>
        </div>
    );
};

export default FormConfiguration;