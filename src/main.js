import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/map-container';
import { Provider } from 'react-redux';

import configStore from './store/configure-store';


const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
