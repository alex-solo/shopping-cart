import React from 'react';
import ReactDOM from 'react-dom';
import Shop from './components/Shop';
import registerServiceWorker from './registerServiceWorker';
import store from './lib/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Shop />
  </Provider>, document.getElementById('root'));
registerServiceWorker();