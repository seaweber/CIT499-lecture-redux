const initialState = {

    toggle: false,
    user: {
        firstName: 'Sean',
        lastName: 'Weber',
        country: 'USA'
    },
    products: [
        {
            id: 0,
            name: 'Chicken',
            cost: {
                USA: 11.11,
                CAN: 33.33
            }
        },
        {
            id: 1,
            name: 'Rice',
            cost: {
                USA: 22.22,
                CAN: 88.88
            }
        },
        {
            id: 2,
            name: 'Protein',
            cost: {
                USA: 33.33,
                CAN: 99.99
            }
        },
        {
            id: 3,
            name: 'Whole Milk',
            cost: {
                USA: 44.44,
                CAN: 350.33
            }
        }
    ]

};

// destructure initial state to state because why not i guess
const rootReducer = ( state = initialState, action ) => {

    if ( action.type === 'SET_TOGGLE') {

        return {
            ...state,
            toggle: !state.toggle,
            user: {
                ...state.user,
                // country: ( state.toggle ? 'USA' : 'CAN' )
            }
        }
    }

    if ( action.type === 'CHANGE_COUNTRY' ) {

        return {
            ...state,
            user: {
                ...state.user,
                country: action.country
            }
        }
    }

    return state;

};

export default rootReducer;
