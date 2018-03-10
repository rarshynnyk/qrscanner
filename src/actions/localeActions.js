import { SET_LOCALE_SUCCESS } from '../constants/locale';

export function setLocaleSuccess(lang) {
  return ({
    type: SET_LOCALE_SUCCESS,
    payload: lang
  })
}

export function setLocale(lang) {
  return dispatch => {
    localStorage.appLang = lang;
    dispatch(setLocaleSuccess(lang));
  }
}