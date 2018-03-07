import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from '../constants/resetPassword';

const initialState = {
  email: ''
}

export default function scan(state = initialState, action) {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST: 
      return { ...state }
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        email: action.payload
      }
    case RESET_PASSWORD_FAILURE: 
      return {
        ...state,
        errors: action.errors
      }
    default:
      return { ...state }
  }
}