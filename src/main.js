import React from 'react';
import ReactDOM from 'react-dom';
import Component from './containers/map-connector';
import { Provider } from 'react-redux';

import configStore from './store/configure-store';


const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <Component />
  </Provider>,
  document.getElementById('app')
);
