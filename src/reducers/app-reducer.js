import { GET_APP_INFO } from '../constants/ActionTypes'

const initialState = {
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_APP_INFO:
            return state
        case `${GET_APP_INFO}_PENDING`:
            return {
                ...state,
                responseError: 'error'
            };
        case `${GET_APP_INFO}_FULFILLED`:
            return {
                ...state,
                ...action.payload
            };
        case `${GET_APP_INFO}_REJECTED`:
            return {
                ...state,
                responseError: action.payload
            };
        default:
            return state
    }
}

export default appReducer
