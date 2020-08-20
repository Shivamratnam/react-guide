import React from 'react';
import classes from './FormTemplate.module.css';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

const FormTemplate = props => {
    let formFields = <div style={{marginTop: '10px'}}>Form is empty</div>;
    if (props.fields.length > 0) {
        formFields = props.fields.map(field => (
            <Input key={field.id} {...field} changed={(event) => props.changed(field, event.target.value)} />
        ));
    }
    return (
        <div className={classes.FormTemplate}>
            <div className={classes.FormContainer}>
                <strong>Dynamic Form</strong>
                <form onSubmit={props.submitted}>
                    {formFields}
                    { props.fields.length > 0
                        ? <Button color="success">Submit</Button>
                        : null
                    }
                </form>
            </div>
        </div>
    );
};

export default FormTemplate;