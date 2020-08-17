const initialState = {
    persons: []
}

const reducer = (state = initialState, actions) => {
    switch(actions.type) {
        case 'ADD_PERSON':
            return {
                persons: state.persons.concat({
                    id: Math.random()*1000,
                    name: actions.person.name,
                    age: actions.person.age
                })
            };
        case 'REMOVE_PERSON':
            return {
                persons: state.persons.filter(person => person.id !== actions.personId)
            };
        default:
            return state;
    }
}

export default reducer;