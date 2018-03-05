import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import users from './users';
import scan from './scan';

export default combineReducers({
  users,
  scan,
  loadingBar: loadingBarReducer
});
