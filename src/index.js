import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import registerServiceWorker from "./registerServiceWorker";
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import reducer from "./reducers";
import firebase from './firebase';
import App from "./App";
import { loginSuccess } from './actions/usersActions';
import { setLocale } from './actions/localeActions';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    store.dispatch(loginSuccess(user));
  }
});

if (localStorage.appLang) {
  store.dispatch(setLocale(localStorage.appLang));
}

addLocaleData(en);
addLocaleData(ru);

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

