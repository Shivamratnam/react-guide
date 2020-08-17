import React, { Component } from 'react';
import classes from './Persons.module.css';
import Person from '../../components/Person/Person';
import AddPerson from  '../../components/AddPerson/AddPerson';
import { connect } from 'react-redux';

class Persons extends Component {
    render() {
        return (
            <div className={classes.Persons}>
                <AddPerson added={(person) => this.props.onAddPersonHandler(person)}/>
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        deleted={() => this.props.onRemovePersonHandler(person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    persons: state.persons
});

const mapDispatchToProps = dispatch => ({
    onAddPersonHandler: (person) => dispatch({type: 'ADD_PERSON', person: person}),
    onRemovePersonHandler: (personId) => dispatch({type: 'REMOVE_PERSON', personId: personId})
});

export default connect(mapStateToProps, mapDispatchToProps)(Persons);