import { ADD_COUNTER } from '../actions/actionTypes'

const initialState = {
    // articles: []
};

const addCounter = (state = initialState, action) => {
    console.log(state)
    console.log(action)
    switch (action.type) {
        case ADD_COUNTER:
            return {
                ...state,
                // {
                id: action.id,
                text: action.text,
                // completed: false
                // }
            };
        default:
            return state
    }
}

export default addCounter
