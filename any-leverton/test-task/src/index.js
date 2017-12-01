import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/configureStore';
import './index.css';
import App from './containers/App';




ReactDOM.render(
  <div>
    <Provider store={store} >
      <App />
    </Provider>
  </div>
  , document.getElementById('root'));
