import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_CREATE_REQUEST,
    USER_CREATE_SUCCESS,
    USER_CREATE_FAILURE,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS
} from "../constants/user";
import firebase from "../firebase";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function loginRequest() {
    return {
        type: USER_LOGIN_REQUEST
    };
}

export function loginSuccess(user) {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: user
    };
}

export function loginError(error) {
    return {
        type: USER_LOGIN_FAILURE,
        errors: error
    };
}

export function login(email, password) {
    return async dispatch => {
        dispatch(loginRequest());
        dispatch(showLoading());

        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password);
            dispatch(loginSuccess(user));
        } catch (error) {
            dispatch(loginError(error));
            return Promise.reject(error);
        } finally {
            dispatch(hideLoading());
        }
    }
}

export function createUserRequest() {
    return {
        type: USER_CREATE_REQUEST
    };
}

export function createUserSuccess(user) {
    return {
        type: USER_CREATE_SUCCESS,
        payload: user
    };
}

export function createUserError(error) {
    return {
        type: USER_CREATE_FAILURE,
        errors: error
    };
}

export function createUser(email, password) {
    return async dispatch => {
        dispatch(createUserRequest());
        dispatch(showLoading());

        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
            dispatch(createUserSuccess(user));
        } catch (error) {
            dispatch(createUserError(error));
            return Promise.reject(error);
        } finally {
            dispatch(hideLoading());
        }
    }
}

export function logoutUserRequest() {
    return {
        type: USER_LOGOUT_REQUEST
    };
}

export function logoutUserSuccess(user) {
    return {
        type: USER_LOGOUT_SUCCESS,
        payload: user
    };
}

export function userLogout() {
    return async dispatch => {
        dispatch(logoutUserRequest());
        dispatch(showLoading());

        try {
            const user = await firebase.auth().signOut();
            dispatch(logoutUserSuccess(user));
        } finally {
            dispatch(hideLoading());
        }
    }
}