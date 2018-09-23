import { GET_USER_INFO } from '../constants/ActionTypes'

const initialState = {
};

const userInfo = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                ...{ name: 'linhth' }
            };
        default:
            return state
    }
}

export default userInfo
