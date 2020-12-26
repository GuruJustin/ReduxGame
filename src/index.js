import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import combinedReducers from './app/reducers/index';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'

import { BrowserRouter} from "react-router-dom";


const store = createStore(combinedReducers);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
