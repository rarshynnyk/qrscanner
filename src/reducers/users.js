import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE
} from "../constants/user";

const initialState = {
  user: null,
  errors: null
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        errors: action.errors
      };
    case USER_CREATE_REQUEST:
      return { ...state };
    case USER_CREATE_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    case USER_CREATE_FAILURE:
      return {
        ...state,
        errors: action.errors
      };
    case USER_LOGOUT_REQUEST:
      return { ...state };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    case USER_LOGOUT_FAILURE:
      return {
        ...state,
        errors: action.errors
      };
    default:
      return state;
  }
}
