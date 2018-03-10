import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import users from './users';
import scan from './scan';
import resetPassword from './resetPassword';
import locale from './locale';

export default combineReducers({
  users,
  scan,
  resetPassword,
  locale,
  loadingBar: loadingBarReducer
});
