import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./reducers";
import firebase from './firebase';
import App from "./App";
import { loginSuccess } from './actions/usersActions';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    store.dispatch(loginSuccess(user));
  }
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route component={App}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

