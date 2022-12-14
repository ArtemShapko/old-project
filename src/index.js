import './index.css';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";



  ReactDOM.render(
    <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
       <App/>
      </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );













