import React, { Component } from 'react';

import FormTemplate from '../../components/FormTemplate/FormTemplate';
import FormConfiguration from '../../components/FormConfiguration/FormConfiguration';

import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/CloseRounded';

class FormGenerator extends Component {
    state = {
        showSnackbar: false,
        formFields: []
    }
    
    generateId = () => '_' + Math.random().toString(36).substr(2, 9);

    onAddElementHandler = (field) => {
        const formField = {
            id: this.generateId(),
            type: field.type,
            placeholder: field.label,
            value: ''
        }
        const newformFields = this.state.formFields.concat(formField);
        this.setState({formFields: newformFields});
    }
    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log('FORM DATA: ', this.state.formFields);
        this.setState({showSnackbar: true});
    }
    onChangeHandler = (element, value) => {
        const updatedFormFields = [...this.state.formFields];
        for (let field of updatedFormFields) {
            if (field.id === element.id) {
                field.value = value;
                break;
            }
        }
        this.setState({formFields: updatedFormFields})
    }

    onCloseSnackbarHandler = () => this.setState({showSnackbar: false});

    render() {
        return (
            <div>
                <Snackbar open={this.state.showSnackbar}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    autoHideDuration={10000}
                    onClose={this.onCloseSnackbarHandler}>
                        <Alert severity="success" action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => this.setState({showSnackbar: false})}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }>
                            Form submitted successfully. Open console to check the submitted data.
                        </Alert>
                </Snackbar>
                <FormTemplate fields={this.state.formFields}
                    changed={(element, value) => this.onChangeHandler(element, value)}
                    submitted={this.onSubmitHandler} />
                <FormConfiguration added={(field) => this.onAddElementHandler(field)}/>
            </div>
        );
    };
};

export default FormGenerator;