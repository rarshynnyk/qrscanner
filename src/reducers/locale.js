import { SET_LOCALE_SUCCESS } from '../constants/locale';

const initialState = {
  lang: 'en'
}

export default function locale(state = initialState, action) {
  switch (action.type) {
    case SET_LOCALE_SUCCESS: 
      return {
        ...state,
        lang: action.payload
      }
    default:
      return { ...state }
  }
}