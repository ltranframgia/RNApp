import { GET_USER_INFO, SUCCESS, ERROR } from '../constants/ActionTypes'

const initialState = {
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state
      };
    case `${GET_USER_INFO}_${SUCCESS}`:
      return {
        ...state,
        data: action.payload.response.data
      };
    case `${GET_USER_INFO}_${ERROR}`:
      return {
        ...state,
        data: action.payload.response
      };
    default:
      return state
  }
}

export default userReducer
