import { GET_APP_INFO } from '../constants/ActionTypes'

const initialState = {
};

const appInfo = (state = initialState, action) => {
    switch (action.type) {
        case GET_APP_INFO:
            return {
                ...state,
                ...{ version: '1.0.0', needUpdate: true }
            };
        default:
            return state
    }
}

export default appInfo
