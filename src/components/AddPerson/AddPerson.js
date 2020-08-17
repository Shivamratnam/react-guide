import React, { Component } from 'react';
import classes from './AddPerson.module.css';

class AddPerson extends Component {
    state = {
        person: {
            name: '',
            age: ''
        }
    }

    nameChangedHandler = (event) => {
        const updatedPerson = {
            ...this.state.person,
            name: event.target.value
        }
        this.setState({person: updatedPerson});
    }
    ageChangedHandler = (event) => {
        const updatedPerson = {
            ...this.state.person,
            age: event.target.value
        }
        this.setState({person: updatedPerson});
    }

    render() {
        return (
            <div className={classes.AddPerson}>
                <input className={classes.Input}
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={this.state.person.name}
                    onChange={this.nameChangedHandler}/>
                <input className={classes.Input}
                    type="text"
                    name="age"
                    placeholder="Enter Age"
                    value={this.state.person.age}
                    onChange={this.ageChangedHandler} />
                <button className={classes.AddButton} onClick={() => this.props.added(
                    {
                        name: this.state.person.name,
                        age: this.state.person.age
                    }
                )}>ADD</button>
                <hr />
            </div>
        );
    }
}

export default AddPerson;