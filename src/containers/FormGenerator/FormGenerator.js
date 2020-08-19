import React, { Component } from 'react';

import FormTemplate from '../../components/FormTemplate/FormTemplate';
import FormConfiguration from '../../components/FormConfiguration/FormConfiguration';

class FormGenerator extends Component {
    state = {
        template:{
            formFields: []
        },
        config: {

        }
    }
    
    generateId = () => '_' + Math.random().toString(36).substr(2, 9);

    onAddElementHandler = (field) => {
        const formField = {
            id: this.generateId(),
            type: field.type,
            placeholder: field.label,
            value: ''
        }
        const newTemplate = {
            formFields: this.state.template.formFields.concat(formField)
        };
        this.setState({template: newTemplate});
    }
    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(event);
    }
    onChangeHandler = (element, value) => {
        console.log(element, value);
    }

    render() {
        return (
            <div>
                <FormTemplate fields={this.state.template.formFields}
                    changed={(element, value) => this.onChangeHandler(element, value)}
                    submitted={this.onSubmitHandler} />
                <FormConfiguration added={(field) => this.onAddElementHandler(field)}/>
            </div>
        );
    };
};

export default FormGenerator;