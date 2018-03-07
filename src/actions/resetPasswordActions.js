import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from '../constants/resetPassword';
import firebase from "../firebase";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function resetPasswordRequest() {
  return {
    type: RESET_PASSWORD_REQUEST
  };
}

export function resetPasswordSuccess(email) {
  return {
    type: RESET_PASSWORD_SUCCESS,
    payload: email
  };
}

export function resetPasswordFailure(error) {
  return {
    type: RESET_PASSWORD_FAILURE,
    errors: error
  };
}

export function resetPassword(emailAddress) {
  return async dispatch => {
    dispatch(resetPasswordRequest());
    dispatch(showLoading());

    try {
      await firebase.auth().sendPasswordResetEmail(emailAddress);
      dispatch(resetPasswordSuccess(emailAddress));
    } catch (error) {
      dispatch(resetPasswordFailure(error));
      return Promise.reject(error);
    } finally {
      dispatch(hideLoading());
    }
  }
}